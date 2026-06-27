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
    </Routes>
  );
}

export default App;