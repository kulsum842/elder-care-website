
import React from "react";

import PlanHeader from "../components/membership/PlanHeader";
import PlanCards from "../components/membership/PlanCards";
import PlanFaqSection from "../components/membership/PlanFaqSection";
import PlanCta from "../components/membership/PlanCta";
import Footer from "../components/Footer"


const Membership = () => {
  return (
    <div>
        <PlanHeader />
        <PlanCards />
        <PlanFaqSection />
        <PlanCta />
        <Footer />

    </div>
  );
};

export default Membership;
