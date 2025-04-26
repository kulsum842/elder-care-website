import React from 'react';
import './ValuesSection.css';
import trustIcon from '../../assets/images/trust.png';
import simplicityIcon from '../../assets/images/simplicity.png';
import connectedIcon from '../../assets/images/connected.png';
import plansIcon from '../../assets/images/plans.png';
import supportIcon from '../../assets/images/support.png';

const items = [
  { img: trustIcon, label: 'TRUST & SAFETY FIRST' },
  { img: simplicityIcon, label: 'DESIGNED FOR SIMPLICITY' },
  { img: connectedIcon, label: 'STAY CONNECTED,\nALWAYS' },
  { img: plansIcon, label: 'FLEXIBLE PLANS' },
  { img: supportIcon, label: 'SUPPORT THAT\nUNDERSTANDS YOU' },
];

const ValuesSection = () => {
  return (
    <div className="value-icons-wrapper">
      {items.map((item, index) => (
        <div className="value-item" key={index}>
          <img src={item.img} alt={item.label} className="value-icon" />
          <p className="value-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuesSection;
