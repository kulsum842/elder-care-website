import React from 'react';
import './FeaturesGrid.css';

const features = [
  {
    title: "EMERGENCY ALERT BUTTON",
    description: "At the core of the app is a one-tap emergency alert feature. In case of distress, users can tap the button to immediately notify their emergency contacts via SMS or email. The alert includes the current location (if enabled), ensuring timely help. This feature is placed in a prominent area of the dashboard for quick access. Alerts are also logged in the family member’s dashboard. It’s fast, effective, and made with senior users in mind."
  },
  {
    title: "MEDICINE REMINDER SYSTEM",
    description: "This feature allows users (or caregivers/family) to set up medicine schedules with exact timings. At the specified times, the app sends loud alerts and vibrations so the elder doesn’t miss a dose. The user must confirm whether they took the medicine. If there’s no response or they report “missed,” their emergency contact is notified automatically. This adds a safety layer to routine medication and prevents accidental skips. It’s designed to ensure consistent and safe medication adherence."
  },
  {
    title: "HEALTH MONITORING SYSTEM",
    description: "Users can manually enter vital signs like blood pressure, sugar levels, weight, and pulse. Each entry is stored with a timestamp and displayed as visual graphs (line/bar charts). This allows elders, caregivers, and family members to track health trends over time. These logs are also downloadable for doctor consultations. The interface is simple and large-button based, suited for older adults. It turns everyday tracking into meaningful insights."
  },
  {
    title: "ROLE BASED DASHBOARDS",
    description: "The app offers customized views based on the user’s role — elder, caregiver, or family member. Elders can view reminders, health logs, and book services. Caregivers get a bookings list and update schedules. Family members can monitor alerts, view health entries, and get notified in emergencies. Each dashboard is designed with the user’s priorities and ease-of-use in mind. This keeps the app intuitive while meeting everyone’s needs."
  },
  {
    title: "ACCESSIBILITY FEATURES",
    description: "We’ve built the app keeping accessibility in focus. It offers a high contrast mode for users with vision difficulties, a toggle for larger fonts, and basic screen-reader compatibility. Buttons are large, and spacing is optimized for touch. Audio feedback helps guide the user where needed. These features ensure that seniors with limited tech experience can use the app confidently. It’s not just smart — it’s inclusive."
  },
  {
    title: "CAREGIVER BOOKINGS & REMINDERS",
    description: "Through the app, elders or family members can book caregiver services and view upcoming appointments. They receive alerts before the scheduled service and can rate the caregiver afterward. The system shows status updates like “Confirmed,” “In Progress,” or “Completed.” Users can also cancel or reschedule with one tap. This reduces confusion and adds structure to daily care."
  }
];

const FeaturesGrid = () => {
  return (
    <section className="features-grid-section-unique">
      <div className="features-grid-container">
        {features.map((feature, index) => (
          <div className="features-grid-card" key={index}>
            <h3 className="features-grid-title">{feature.title}</h3>
            <p className="features-grid-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
