import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home_updated";
import PortfolioDetails from "./pages/PortfolioDetails";
import ServiceDetails from "./pages/ServiceDetails";
import StarterPage from "./pages/StarterPage";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div data-aos="fade-up">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/starter-page" element={<StarterPage />} />
          {/* Agar koi galat route mile to Home render hoga */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <Preloader />
      </div>
    </Router>
  );
};

export default App;
