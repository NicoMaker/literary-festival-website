import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProposteSection from "@/components/proposte-section";
import CandidatureSection from "@/components/candidature-section";
import FoodSection from "@/components/food-section";
import ProgrammaSection from "@/components/programma-section";
import EdizioniSection from "@/components/edizioni-section";
import InfoVisitaSection from "@/components/info-visita-section";
import ContattiSection from "@/components/contatti-section";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProposteSection />
        <CandidatureSection />
        <FoodSection />
        <ProgrammaSection />
        <EdizioniSection />
        <InfoVisitaSection />
        <ContattiSection />
      </main>
      <Footer />
    </>
  );
}
