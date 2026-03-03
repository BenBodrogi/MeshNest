console.log("Supabase URL exists:", !!process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("Service key exists:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

type LeadPayload = {
  name: string;
  email: string;
  propertyType?: string;
  area?: string;
  issues?: string;
  timeline?: string;

  // honeypot
  website?: string;
};

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

// Simple in-memory rate limit (OK for MVP; resets on deploy / server restart)
const RATE: Record<string, { count: number; ts: number }> = {};
function rateLimit(ip: string, limit = 6, windowMs = 60_000) {
  const now = Date.now();
  const r = RATE[ip];
  if (!r || now - r.ts > windowMs) {
    RATE[ip] = { count: 1, ts: now };
    return { ok: true };
  }
  r.count += 1;
  return { ok: r.count <= limit };
}

function getIp(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const ip = getIp(req);

    const rl = rateLimit(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as LeadPayload;

    // Honeypot (bots fill it, humans shouldn't)
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }); // silently accept
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim().toLowerCase();

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Name is too short." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // --- Supabase insert ---
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      return NextResponse.json(
        { ok: false, error: "Server is not configured (missing Supabase env vars)." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false },
    });

    const { error: dbError } = await supabase.from("leads").insert({
      name,
      email,
      property_type: body.propertyType ?? null,
      area: body.area ?? null,
      issues: body.issues ?? null,
      timeline: body.timeline ?? null,
      ip,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { ok: false, error: "Failed to save your request." },
        { status: 500 }
      );
    }

    // --- Resend email notify (non-blocking failure) ---
    const resendKey = process.env.RESEND_API_KEY;
    const notifyTo = process.env.LEADS_NOTIFY_TO;
    const notifyFrom = process.env.LEADS_NOTIFY_FROM;

    if (resendKey && notifyTo && notifyFrom) {
      const resend = new Resend(resendKey);

      const subject = `New MeshNest lead: ${name} (${email})`;
      const html = `
        <h2>New lead received</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Property type:</strong> ${escapeHtml(body.propertyType || "")}</p>
        <p><strong>Area:</strong> ${escapeHtml(body.area || "")}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(body.timeline || "")}</p>
        <p><strong>Issues:</strong><br/>${escapeHtml(body.issues || "").replaceAll("\n", "<br/>")}</p>
        <hr/>
        <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
      `;

      const { error: mailError } = await resend.emails.send({
        from: notifyFrom,
        to: [notifyTo],
        subject,
        html,
        replyTo: email,
      });

      // If email fails, we still keep the lead in DB.
      if (mailError) {
        console.error("Resend error:", mailError);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}