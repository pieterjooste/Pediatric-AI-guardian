import React from 'react';
import { Mail, Twitter, ChevronRight, Activity, Heart, Thermometer, Brain, Microscope, Stethoscope, CloudMoon, Smartphone, Cpu, Scale } from 'lucide-react';
import SEO from '../components/SEO';

import './Contact.css';

const Contact = () => {
  const topics = [
    { name: "Baby and Child Health", icon: <Stethoscope size={18} /> },
    { name: "Infectious diseases", icon: <Activity size={18} /> },
    { name: "Rare diseases", icon: <Microscope size={18} /> },
    { name: "Gut microbiome", icon: <Brain size={18} /> },
    { name: "Acute pain management in children with Virtual Reality", icon: <Cpu size={18} /> },
    { name: "Chronic Pain in adults and children", icon: <Heart size={18} /> },
    { name: "Sleep problems in adults and children", icon: <CloudMoon size={18} /> },
    { name: "Tendon injuries", icon: <Thermometer size={18} /> },
    { name: "The use of Technology in Medicine", icon: <Smartphone size={18} /> },
    { name: "Artificial intelligence", icon: <Cpu size={18} /> },
    { name: "Mediation in Medical Negligence cases", icon: <Scale size={18} /> }
  ];

  return (
    <div className="page-container animate-enter">
      <SEO 
        title="Contact & Interests" 
        description="Get in touch with Dr. Pieter Jooste to discuss pediatric health, medical technology, AI, or medical mediation."
      />

      <div className="contact-hero glass-panel">
        <div className="contact-hero-content">
          <h1 className="hero-title">Connect with <span className="text-gradient">Dr. Pieter Jooste</span></h1>
          <p>I am passionate about bridging the gap between medicine, technology, and resolution.</p>
        </div>
      </div>

      <div className="contact-grid">
        <div className="topics-section">
          <h2>Areas of Professional Interest</h2>
          <p>I am actively engaged in and welcome discussions on the following topics:</p>
          <div className="topics-container">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className={`topic-tag animate-enter`} 
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <span className="topic-icon">{topic.icon}</span>
                {topic.name}
              </div>
            ))}
          </div>
        </div>

        <div className="contact-info-section">
          <div className="glass-panel contact-card">
            <h2>Contact Details</h2>
            <p>If you would like to discuss any of these topics, you are welcome to contact me at:</p>
            
            <a href="mailto:doctor@childhealthforall.com" className="contact-method">
              <div className="contact-method-icon">
                <Mail size={24} />
              </div>
              <div className="contact-method-details">
                <h4>Email</h4>
                <p>doctor@childhealthforall.com</p>
              </div>
            </a>

            <a href="https://x.com/jooste_jp" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="contact-method-icon">
                <Twitter size={24} />
              </div>
              <div className="contact-method-details">
                <h4>X (Twitter)</h4>
                <p>@jooste_jp</p>
              </div>
            </a>

            <div style={{ marginTop: '1rem', opacity: 0.8, fontSize: '0.9rem' }}>
              <p>I look forward to hearing from you and exploring how we can collaborate or provide insights into these critical areas of healthcare.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
