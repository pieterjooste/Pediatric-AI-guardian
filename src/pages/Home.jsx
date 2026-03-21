import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShieldCheck, Scale, Lightbulb } from 'lucide-react';
import SEO from '../components/SEO';
import profileImg from '../assets/dr-jooste.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container animate-enter">
      <SEO 
        title="Home" 
        description="Providing expert pediatric insights and professional medical mediation services to empower families and resolve clinical conflicts."
      />
      {/* Hero Section */}
      <section className="hero-section glass-panel">
        <div className="hero-grid">
          <div className="hero-image-container animate-float">
            <img src={profileImg} alt="Dr. Pieter Jooste" className="hero-profile-image" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              Empowering Parents with <span className="text-gradient">Pediatric Knowledge</span>
            </h1>
            <p className="hero-subtitle">
              Welcome. I am Dr. Pieter Jooste, a retired pediatrician leveraging decades of medical experience alongside modern technology, AI, and virtual reality to provide accessible health guidelines and medical mediation.
            </p>
            <div className="hero-actions">
              <Link to="/web-app" className="btn btn-primary">
                <Activity size={20} />
                0-60m Symptom Checker
              </Link>
              <Link to="/apps" className="btn btn-outline">
                View Premium Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        <Link to="/apps" className="service-card glass-panel delay-1">
          <div className="service-icon apps-icon">
            <ShieldCheck size={32} />
          </div>
          <h3>Premium Apps</h3>
          <p>Discover my top-rated iOS and Android applications for child health, alongside MyWine and MyBeer Journey.</p>
          <span className="service-link">Learn more <ArrowRight size={16} /></span>
        </Link>
        
        <Link to="/mediation" className="service-card glass-panel delay-2">
          <div className="service-icon mediation-icon">
            <Scale size={32} />
          </div>
          <h3>Medical Mediation</h3>
          <p>Qualified mediation services specifically tailored for medical negligence cases, bringing clarity and resolution.</p>
          <span className="service-link">Learn more <ArrowRight size={16} /></span>
        </Link>

        <Link to="/vr-medicine" className="service-card glass-panel delay-3">
          <div className="service-icon vr-icon">
            <Lightbulb size={32} />
          </div>
          <h3>VR in Medicine</h3>
          <p>Exploring the cutting edge: how Virtual Reality is transforming pain management, sleep, and pediatric care.</p>
          <span className="service-link">Learn more <ArrowRight size={16} /></span>
        </Link>
      </section>
    </div>
  );
};

export default Home;
