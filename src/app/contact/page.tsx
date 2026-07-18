import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description:
    "Vedd fel a kapcsolatot a MeshNesttel Wi-Fi ellenőrzés, hálózati fejlesztés vagy kisvállalkozási informatikai támogatás ügyében Törökbálinton.",
  openGraph: {
    title: "Kapcsolat – MeshNest",
    description:
      "Vedd fel a kapcsolatot Wi-Fi ellenőrzés, hálózati fejlesztés vagy kisvállalkozási informatikai támogatás ügyében.",
    url: "https://meshnest.co/contact",
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
