import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Problems from "../components/problems";
import Approach from "../components/approach";
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Approach />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}