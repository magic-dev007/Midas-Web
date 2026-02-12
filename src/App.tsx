import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import WhoWeAre from "./components/sections/WhoWeAre";
import WhyChoose from "./components/sections/WhyChoose";
import TeamExpertise from "./components/sections/TeamExpertise";
import Services from "./components/sections/Services";
import Technology from "./components/sections/Technology";
import Portfolio from "./components/sections/Portfolio";
import Experts from "./components/sections/Experts";
import Payments from "./components/sections/Payments";
import Contact from "./components/sections/Contact";
import MaintenanceSupport from "./components/sections/MaintenanceSupport";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 bg-hero-grid-light opacity-60 dark:bg-hero-grid dark:opacity-80 transition-opacity duration-300" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <WhoWeAre />
          <WhyChoose />
          <TeamExpertise />
          <Services />
          <Technology />
          <Portfolio />
          <Experts />
          <Payments />
          <MaintenanceSupport />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;


