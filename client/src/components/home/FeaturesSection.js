import React from 'react';
import './FeaturesSection.css';
import caregiverIcon from '../../assets/images/caregiver.png';
import alertIcon from '../../assets/images/emergency.png';
import medicineIcon from '../../assets/images/medicines.png';
import healthIcon from '../../assets/images/health.png';

const features = [
  {
    icon: caregiverIcon,
    title: 'CAREGIVER MARKETPLACE',
    description:
      'Easily browse and book verified caregivers based on your specific needs. View profiles with experience, ratings, and availability before making a decision. Finding trusted support for your loved ones is now simple and secure.',
  },
  {
    icon: alertIcon,
    title: 'EMERGENCY ALERT SYSTEM',
    description:
      'In any emergency, a single tap sends instant alerts to your chosen contacts via SMS and email. The alert includes your current location, ensuring timely help. It’s fast, reliable, and made with seniors in mind.',
  },
  {
    icon: medicineIcon,
    title: 'MEDICINE REMINDER SYSTEM',
    description:
      'Set daily reminders to take medications right on time. You’ll get friendly alerts, and you can confirm once taken – or notify family if missed. It’s like having a personal assistant for your health.',
  },
  {
    icon: healthIcon,
    title: 'HEALTH MONITORING',
    description:
      'Keep track of vitals like blood pressure, sugar, and weight with easy manual input. All logs are saved with timestamps and shown in simple charts to monitor trends. Stay informed and spot changes early.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="home-features-section">
      <h2 className="home-section-title">WHY CHOOSE US?</h2>
      <div className="home-features-container">
        {features.map((feature, index) => (
          <div className="home-features-card" key={index}>
            <img src={feature.icon} alt={feature.title} className="home-feature-icon" />
            <h3 className="home-feature-title">{feature.title}</h3>
            <p className="home-feature-description">{feature.description}</p>
          </div>
        ))}

        <a className="home-explore-link" href="/features">
          EXPLORE ALL FEATURES
        </a>
      </div>
    </section>
  );
};

export default FeaturesSection;
