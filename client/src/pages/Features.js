// src/pages/Features.js

import React from "react";
import Hero from "../components/features/Hero";
import ServiceFeatures from "../components/features/ServiceFeatures";
import MarketplaceFeatures from "../components/features/MarketplaceFeatures";
import CompanionSection from "../components/features/CompanionSection";
import FeaturesGrid from "../components/features/FeaturesGrid";
import WhyChoose from "../components/features/WhyChoose";
import CallToAction from "../components/features/CallToAction";
import Footer from "../components/Footer"

const Features = () => {
  return (
    <div>
      <Hero />
      <ServiceFeatures /> 
      <MarketplaceFeatures />
      <CompanionSection />
      <FeaturesGrid />
      <WhyChoose />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Features;
