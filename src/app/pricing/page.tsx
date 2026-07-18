import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Pricing from "../../components/pricing";
import Footer from "../../components/footer";

export const metadata: Metadata = {
  title: "Árak",
  description:
    "Óradíjas karbantartási csomagok és egyszeri beüzemelés árazása otthoni Wi-Fi-hez és kisvállalkozási informatikai támogatáshoz Törökbálinton.",
  openGraph: {
    title: "MeshNest Árak",
    description:
      "Óradíjas karbantartási csomagok és egyszeri beüzemelés árazása otthoni Wi-Fi-hez és kisvállalkozási informatikai támogatáshoz.",
    url: "https://meshnest.co/pricing",
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
