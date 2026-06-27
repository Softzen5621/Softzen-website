import { Routes, Route } from "react-router-dom";

import LifeAtSoftzen from "./pages/LifeAtSoftzen";
import Careers from "./pages/Careers";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductEcosystem from "./components/ProductEcosystem";
import AtlasShowcase from "./components/AtlasShowcase";
import OfficeOverview from "./components/officeOverview";
import Values from "./components/Values";
import GlobalPresence from "./components/GlobalPresence";
import Industries from "./components/Industries";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Security from "./pages/Security";
import "./styles/stats.css";

function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <ProductEcosystem />

      <AtlasShowcase />

      <OfficeOverview />

      <Values />

      <GlobalPresence />

      <Industries />

      <CTA />

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/careers"
        element={<Careers />}
      />

      <Route
        path="/life-at-softzen"
        element={<LifeAtSoftzen />}
      />

      <Route path="/terms-of-service" element={<TermsOfService />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/security" element={<Security />} />
    </Routes>
  );
}

export default App;