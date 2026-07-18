import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import TrustedSection from "../components/home/TrustedSection";
import FeaturesSection from "../components/home/FeaturesSection";
import BankingShowcase from "../components/home/BankingShowcase";
import WhyChoose from "../components/home/WhyChoose";
import GlobalBanking from "../components/home/GlobalBanking";
import PremiumCTA from "../components/home/PremiumCTA";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <main className="bg-slate-950 text-white">

      <Navbar />

      <Hero />
      <TrustedSection />
      <FeaturesSection />
      <BankingShowcase />
      <WhyChoose />
      <GlobalBanking />
      <PremiumCTA />
      <Footer />

    </main>
  );
}

export default Home;