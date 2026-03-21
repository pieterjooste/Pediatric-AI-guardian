import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Smartphone, HeartPulse, Scale, Shield, Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/logo.png';
import './Layout.css';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <Stethoscope size={18} /> },
    { name: "Symptom Checker", path: "/web-app", icon: <HeartPulse size={18} /> },
    { name: "My Apps", path: "/apps", icon: <Smartphone size={18} /> },
    { name: "Mediation", path: "/mediation", icon: <Scale size={18} /> },
    { name: "Insights", path: "/blog", icon: <BookOpen size={18} /> },
    { name: "VR Medicine", path: "/vr-medicine", icon: <Stethoscope size={18} /> },
  ];

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <img src={logoImg} alt="ChildHealthForAll Logo" className="brand-icon-img" />
            <span className="brand-text">ChildHealthForAll</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="nav-desktop">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="nav-mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} color="#f8fafc" /> : <Menu size={24} color="#f8fafc" />}
        </button>

        {/* Mobile Nav */}
        <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer glass-panel">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Dr. Pieter Jooste</h4>
            <p>Retired Pediatrician & Certified Mediator</p>
            <a href="mailto:doctor@childhealthforall.com">doctor@childhealthforall.com</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <Link to="/privacy-policy" className="footer-link">
              <Shield size={16} /> Privacy Policy
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ChildHealthForAll (Pty) Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
