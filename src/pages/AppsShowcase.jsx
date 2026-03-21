import { Apple, Play as PlayIcon } from 'lucide-react';
import SEO from '../components/SEO';
import './AppsShowcase.css';
import iconBaby from '../assets/icon-baby-health.png';
import iconChild from '../assets/icon-child-health.png';
import iconWine from '../assets/icon-wine.png';
import iconBeer from '../assets/icon-beer.png';

const apps = [
  {
    title: "Baby Health 0-2 Months",
    description: "Guidelines developed by a pediatrician to help parents decide when to seek medical help for their newborn.",
    ios: "https://apps.apple.com/us/app/baby-health-0-2-months/id6450794620",
    android: "https://play.google.com/store/apps/details?id=com.babyhealth",
    icon: iconBaby,
    color: "var(--color-orange)",
    bgTone: "rgba(249, 115, 22, 0.1)"
  },
  {
    title: "Child Health 2-60 Months",
    description: "Comprehensive medical guidelines for infants and toddlers up to 5 years of age.",
    ios: "https://apps.apple.com/app/child-health-2-60-months/id6470392895",
    android: "https://play.google.com/store/apps/details?id=com.childhealth&hl=en_US",
    icon: iconChild,
    color: "var(--color-emergency)",
    bgTone: "rgba(239, 68, 68, 0.1)"
  },
  {
    title: "My Wine Journey",
    description: "A specialized app for wine enthusiasts to track and journal their tastings.",
    ios: "https://apps.apple.com/za/app/mywine-journey/id6612030378",
    android: null,
    icon: iconWine,
    color: "#9333ea",
    bgTone: "rgba(147, 51, 234, 0.1)"
  },
  {
    title: "My Beer Journey",
    description: "Track and rate your craft beer tasting experiences.",
    ios: "https://apps.apple.com/us/app/my-beer-journey/id6736820431",
    android: null,
    icon: iconBeer,
    color: "#ca8a04",
    bgTone: "rgba(202, 138, 4, 0.1)"
  }
];

const AppsShowcase = () => {
  return (
    <div className="page-container animate-enter">
      <SEO 
        title="Mobile Apps" 
        description="Premium pediatric and lifestyle mobile applications developed by Dr. Pieter Jooste, available on the App Store and Google Play."
      />
      <div className="apps-header">
        <h1>Premium Applications</h1>
        <p>Available on the App Store and Google Play</p>
      </div>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div 
            key={index} 
            className="glass-panel app-card"
            style={{ '--app-color': app.color, '--app-bg': app.bgTone }}
          >
            <img src={app.icon} alt={app.title} className="app-icon" />
            <h2>{app.title}</h2>
            <p className="app-desc">{app.description}</p>
            
            <div className="store-links">
              {app.ios && (
                <a href={app.ios} target="_blank" rel="noreferrer" className="store-btn ios">
                  <Apple size={20} /> App Store
                </a>
              )}
              {app.android && (
                <a href={app.android} target="_blank" rel="noreferrer" className="store-btn android">
                  <Play size={20} /> Play Store
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsShowcase;
