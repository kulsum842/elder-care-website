import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem("user"); // adjust key name if different
    if (isLoggedIn) {
      window.location.href = "/membership";
    } else {
      window.location.href = "/register";
    }
  };

  return (
    <div className="how-wrapper">
      <div className="how-left">
        <h2 className="how-title">HOW IT WORKS?</h2>
        <h3 className="how-subtitle">Smart Elder Care, Made Simple.</h3>
        <p className="how-desc">
          Empowering families with simple tools to care for their elderly loved ones. <br />
          From finding caregivers to staying informed, all in one place. <br />
          Everything you need to support aging family members, from booking trusted help to
          managing health and safety - in just a few clicks.
        </p>
        <button className="how-button" onClick={handleGetStarted}>
          GET STARTED
        </button>
      </div>

      <div className="how-right">
        {[
          {
            number: "1",
            title: "SIGN UP",
            text: "Create your free account in minutes. Register on the website using your email and basic details — it's fast, simple, and made for all age groups.",
          },
          {
            number: "2",
            title: "CHOOSE A PLAN",
            text: "Select a membership that suits your needs. We offer flexible subscription plans depending on how much support or caregiver access you require.",
          },
          {
            number: "3",
            title: "PLATFORM ACCESS",
            text: "Access features based on your plan. From booking caregivers to setting medicine reminders and tracking health vitals, you’ll get full or partial access depending on your membership tier.",
          },
          {
            number: "4",
            title: "GET STARTED",
            text: "Use the app to stay connected, healthy, and safe. You can begin using the elder care app, book services, manage health logs, and get alerts.",
          },
        ].map((step, index) => (
          <div className="how-step" key={index}>
            <div className="how-circle">{step.number}</div>
            <div className="how-step-text">
              <h4 className="how-step-title">{step.title}</h4>
              <p className="how-step-desc">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
