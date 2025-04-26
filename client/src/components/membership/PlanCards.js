// src/components/features/PlanCards.js

import React from "react";
import "./PlanCards.css";

const plans = [
  {
    title: "Essential Care",
    price: "Rs. 499",
    features: [
      "Access to mobile app",
      "Medicine reminders",
      "Health monitoring tools",
      "Emergency alert system",
      "Basic caregiver browsing (limited contact details)",
    ],
  },
  {
    title: "Complete Care",
    price: "Rs. 999",
    features: [
      "Full caregiver marketplace access",
      "Caregiver profile previews with contact info",
      "Role-based dashboards (for elders and family)",
      "Unlimited appointment bookings",
      "Email/SMS alerts to family members",
    ],
  },
  {
    title: "Premium Care",
    price: "Rs. 1499",
    features: [
      "One-on-one onboarding support",
      "Personal assistance in finding caregivers based on needs",
      "Priority customer support",
      "Monthly health summary reports",
      "Early access to new features",
    ],
  },
];

const PlanCards = () => {
  return (
    <section className="plan-cards-section">
      <div className="plan-cards-wrapper">
        {plans.map((plan, index) => (
          <div className="individual-plan-card" key={index}>
            <h3 className="plan-card-title">{plan.title}</h3>
            <p className="plan-card-price">
              {plan.price} <span className="plan-card-per-month">/month</span>
            </p>
            <ul className="plan-card-features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="plan-card-feature-item">
                   {feature}
                </li>
              ))}
            </ul>
            <button className="plan-card-button">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanCards;
