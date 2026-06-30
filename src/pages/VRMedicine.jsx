import React from 'react';
import { HelpCircle, Brain, Activity, ShieldCheck, ExternalLink, Play } from 'lucide-react';
import SEO from '../components/SEO';
import './VRMedicine.css';
import childVRImg from '../assets/child-vr.jpg';

const VRMedicine = () => {
  const applications = [
    {
      title: "Surgical & Diagnostic",
      items: ["Minor surgical procedures (biopsies)", "Induction of anesthesia", "Orthopaedic procedures", "Nasal endoscopy", "Preparation for MRI"]
    },
    {
      title: "Routine Medical",
      items: ["Insertion of IV lines", "Accessing central lines", "Laceration repair", "Burn wound management", "Pre-operative anxiety"]
    },
    {
      title: "Specialized Therapy",
      items: ["Oncology procedures", "Acute pain (Sickle cell anemia)", "Chronic pain management", "Dental procedures", "Physio and Occupational therapy"]
    },
    {
      title: "Developmental Care",
      items: ["Autism Spectrum Disorder", "Cerebral Palsy support", "Anxiety reduction in clinic settings"]
    }
  ];

  return (
    <div className="page-container animate-enter vr-medicine-container">
      <SEO 
        title="VR in Medicine" 
        description="Exploring how Immersive Technology and Virtual Reality are transforming pediatric care, pain management, and medical therapy."
      />
      <header className="vr-hero glass-panel">
        <div className="vr-hero-grid">
          <div className="vr-hero-content">
            <h1>Immersive Therapy</h1>
            <p className="subtitle">Revolutionizing Pediatric Care through Virtual & Augmented Reality</p>
            <div className="vr-intro-text">
              <p>
                Virtual Reality (VR) and Augmented Reality (AR) are no longer just for gaming. 
                In the medical field, they are powerful, non-pharmacological tools used to 
                significantly reduce pain and anxiety in children during medical procedures.
              </p>
            </div>
          </div>
          <div className="vr-hero-image animate-float">
            <img src={childVRImg} alt="Child wearing VR headset in clinical setting" />
          </div>
        </div>
      </header>

      <section className="vr-grid">
        {applications.map((group, idx) => (
          <div key={idx} className="application-group glass-panel">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item, i) => (
                <li key={i}><Activity size={16} className="item-icon" /> {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="expert-network">
        <div className="expert-card glass-panel">
          <div className="expert-header">
            <Brain size={32} color="#7dd3fc" />
            <h2>Stanford Chariot Program</h2>
          </div>
          <p>
            The Chariot Program at Stanford University is a world leader in pediatric immersive technology, 
            developing tools that help children navigate their medical journeys with less fear.
          </p>
          <div className="expert-links">
            <a href="https://chariot.stanford.edu" target="_blank" rel="noopener noreferrer" className="external-link">
              Visit Chariot <ExternalLink size={16} />
            </a>
            <a href="https://youtu.be/8haoyf4RkL0?si=jzHj8rqPG7txpyM2" target="_blank" rel="noopener noreferrer" className="external-link video-link">
              Watch Prof Rodriques <Play size={16} />
            </a>
          </div>
        </div>

        <div className="expert-card glass-panel">
          <div className="expert-header">
            <ShieldCheck size={32} color="#7dd3fc" />
            <h2>InvinciKids</h2>
          </div>
          <p>
            An organization dedicated to providing high-quality VR solutions to clinics and hospitals globally. 
            For implementation and partnerships, contact CEO André Bollaert.
          </p>
          <div className="expert-links">
            <a href="https://www.invincikids.org" target="_blank" rel="noopener noreferrer" className="external-link">
              Learn More <ExternalLink size={16} />
            </a>
            <a href="mailto:andre@invincikids.org" className="external-link">
              Contact André <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="research-resources glass-panel">
        <h2>Scientific Evidence</h2>
        <p>Research consistently shows that VR provides a powerful distraction, reducing the perception of pain.</p>
        <div className="resource-list">
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10865524/" target="_blank" rel="noopener noreferrer" className="resource-link">
            <div className="resource-icon"><HelpCircle size={20} /></div>
            <div className="resource-info">
              <h4>Systematic Review & Meta-analysis</h4>
              <p>Efficacy of virtual reality for pain relief in medical procedures.</p>
            </div>
          </a>
        </div>
      </section>

      <footer className="vr-dr-note glass-panel">
        <p>
          "As a pediatrician, I've seen firsthand how these technologies can transform a terrifying hospital visit 
          into a positive, empowering experience for a child."
        </p>
        <div className="dr-profile-link">
          <span>— Dr. Pieter Jooste</span>
          <a href="https://twitter.com/jooste_jp" target="_blank" rel="noopener noreferrer" className="twitter-link">
            @jooste_jp
          </a>
        </div>
      </footer>
    </div>
  );
};

export default VRMedicine;
