import React from 'react';
import { Shield, Scale, BookOpen, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import heroImg from '../assets/mediation-hero-a.png';
import './Mediation.css';

const Mediation = () => {
  return (
    <div className="page-container animate-enter">
      <SEO 
        title="Medical Mediation" 
        description="Professional medical mediation services led by Dr. Pieter Jooste, a retired pediatrician and certified mediator specializing in clinical conflict resolution."
      />
      <div className="mediation-hero">
        <img src={heroImg} alt="Professional Mediation Office" className="mediation-hero-img" />
        <div className="mediation-hero-content">
          <h1>Professional <span className="text-gradient">Medical Mediation</span></h1>
          <p>Navigating complex medical conflicts with clinical authority and certified legal expertise.</p>
        </div>
      </div>

      <div className="credentials-grid">
        <div className="glass-panel credential-box">
          <h3><Scale className="text-gradient" /> Certified Mediator</h3>
          <p>Trained in dispute resolution specifically tailored for high-stakes medical negligence and clinical conflict cases.</p>
        </div>
        <div className="glass-panel credential-box">
          <h3><Shield className="text-gradient" /> Retired Pediatrician</h3>
          <p>Bringing decades of real-world clinical experience to objectively analyze medical facts that others might miss.</p>
        </div>
      </div>

      <h2 className="section-title">The 5-Stage Path to Resolution</h2>
      <div className="process-timeline">
        <div className="glass-panel timeline-item animate-enter delay-1">
          <div className="timeline-number">1</div>
          <div className="timeline-content">
            <h3>Initial Assessment</h3>
            <p>Determine if mediation is the right approach and explain the process to both parties in individual pre-mediation meetings. </p>
          </div>
        </div>

        <div className="glass-panel timeline-item animate-enter delay-2">
          <div className="timeline-number">2</div>
          <div className="timeline-content">
            <h3>Opening Joint Session</h3>
            <p>Establishing ground rules and allowing both parties to outline their perspectives in a controlled, respectful environment.</p>
          </div>
        </div>

        <div className="glass-panel timeline-item animate-enter delay-3">
          <div className="timeline-number">3</div>
          <div className="timeline-content">
            <h3>Caucusing & Exploration</h3>
            <p>Private sessions where confidential interests are explored and the "medical truth" is carefully dissected.</p>
          </div>
        </div>

        <div className="glass-panel timeline-item animate-enter delay-1">
          <div className="timeline-number">4</div>
          <div className="timeline-content">
            <h3>Negotiation & Bargaining</h3>
            <p>Moving from conflict to solution-finding, leveraging Dr. Jooste's unique background to bridge the communication gap.</p>
          </div>
        </div>

        <div className="glass-panel timeline-item animate-enter delay-2">
          <div className="timeline-number">5</div>
          <div className="timeline-content">
            <h3>Formal Agreement</h3>
            <p>Solidifying the resolution in a binding format, ensuring all parties feel heard and protected.</p>
          </div>
        </div>
      </div>

      <div className="glass-panel contact-section">
        <h2>Initiate a Formal Review</h2>
        <p>To discuss a specific medical-legal dispute or set up a consultation, please reach out via the secure channel below.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="mailto:doctor@childhealthforall.com" className="btn btn-primary">
            Contact Dr. Jooste <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mediation;
