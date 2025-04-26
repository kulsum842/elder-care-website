// src/pages/Home.js

import React from "react";
import Hero from "../components/home/Hero";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorks from "../components/home/HowItWorks";
import ValuesSection from "../components/home/ValuesSection";
import FaqSection from "../components/home/FaqSection";
import CaregiverRegisterSection from "../components/home/CaregiverRegisterSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>

      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <ValuesSection />
      <FaqSection />
      <CaregiverRegisterSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
