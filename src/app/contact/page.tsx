import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MeshNest for a Wi-Fi health check, network upgrade, or small business IT support in Törökbálint.",
  openGraph: {
    title: "Contact MeshNest",
    description:
      "Get in touch for a Wi-Fi health check, network upgrade, or small business IT support.",
    url: "https://mesh-nest.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
