import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Problems from "../components/problems";
import Approach from "../components/approach";
import Services from "../components/services";
import CarePlan from "../components/care-plan";
import WhyMeshNest from "../components/why-meshnest";
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
        <CarePlan />
        <WhyMeshNest />
      </main>
      <Footer />
    </>
  );
}