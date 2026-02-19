import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/shared/CookieConsent";
import ThankYou from "./pages/ThankYou";
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

const SECTION_IDS = ["about", "services", "technologies", "portfolio", "team", "payments", "maintenance", "contact", "top"] as const;

function HomePage() {
  const { pathname } = useLocation();
  const section = pathname === "/" ? null : pathname.slice(1).toLowerCase();

  useEffect(() => {
    if (!section || !SECTION_IDS.includes(section as typeof SECTION_IDS[number])) return;
    const el = document.getElementById(section);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
  }, [section]);

  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 bg-hero-grid-light opacity-60 dark:bg-hero-grid dark:opacity-80 transition-opacity duration-300" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/:section" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <CookieConsent />
    </div>
  );
}

export default App;


