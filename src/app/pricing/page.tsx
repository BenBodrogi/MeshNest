import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Pricing from "../../components/pricing";
import Footer from "../../components/footer";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One flat hourly rate, monthly maintenance tiers, and setup pricing for home Wi-Fi and small business IT support in Törökbálint.",
  openGraph: {
    title: "MeshNest Pricing",
    description:
      "One flat hourly rate, monthly maintenance tiers, and setup pricing for home Wi-Fi and small business IT support.",
    url: "https://mesh-nest.vercel.app/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
