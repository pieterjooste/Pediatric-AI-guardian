import React, { useState } from 'react';
import { 
  HeartPulse,
  AlertTriangle,
  ArrowLeft,
  Info, 
  Thermometer, 
  Baby, 
  Activity, 
  Brain, 
  Wind, 
  Eye, 
  Layers, 
  Droplets, 
  BookOpenCheck, 
  Ear,
  Scale,
  Ribbon,
  Dna,
  Puzzle,
  Heart,
  Sun,
  Footprints,
  PlusCircle,
  Bandage
} from 'lucide-react';
import SEO from '../components/SEO';
import babyData from '../data/babyHealth.json';
import childData from '../data/ChildHealth.json';

// Medical Images
import cataractsImg from '../assets/medical/cataracts.jpg';
import conjunctivitisImg from '../assets/medical/conjunctivitis.jpg';
import sunsetEyesImg from '../assets/medical/sunset-eyes.png';
import stoolsImg from '../assets/medical/stools.jpg';
import tongueImg from '../assets/medical/tongue.jpg';
import weightImg from '../assets/medical/weight.jpg';
import fontanelImg from '../assets/medical/fontanel.jpg';
import redReflexImg from '../assets/medical/red-reflex.jpg';
import absentRedReflexImg from '../assets/medical/absent-red-reflex.jpg';
import glaucomaImg from '../assets/medical/glaucoma.jpg';
import ankyloglossiaImg from '../assets/medical/ankyloglossia.jpg';

import './SymptomChecker.css';

// Mapping for category colors to enhance premium look
const categoryColorMap = {
  'emergency': '#ef4444',
  'breathing': '#3b82f6',
  'fever': '#f59e0b',
  'eyes': '#06b6d4',
  'growth': '#ec4899',
  'diarrhoea': '#0ea5e9',
  'skin': '#f97316',
  'gut': '#10b981',
  'kidneys genitals': '#14b8a6',
  'ent': '#6366f1',
  'info': '#64748b',
  'resources': '#14b8a6',
  'brain': '#a855f7',
  'birth defects': '#f472b6',
  'cancer': '#dc2626',
  'crying': '#f59e0b',
  'development': '#8b5cf6',
  'heart': '#ef4444',
  'jaundice': '#eab308',
  'movement': '#22c55e',
  'other': '#94a3b8',
  'trauma': '#ef4444',
};

// Mapping for category icons
const categoryIconMap = (id) => {
  const color = categoryColorMap[id] || 'var(--primary)';
  const icons = {
    'emergency': <HeartPulse size={32} color={color} />,
    'breathing': <Wind size={32} color={color} />,
    'fever': <Thermometer size={32} color={color} />,
    'resources': <BookOpenCheck size={32} color={color} />,
    'info': <Info size={32} color={color} />,
    'birth defects': <Dna size={32} color={color} />,
    'brain': <Brain size={32} color={color} />,
    'eyes': <Eye size={32} color={color} />,
    'growth': <Scale size={32} color={color} />,
    'skin': <Layers size={32} color={color} />,
    'diarrhoea': <Droplets size={32} color={color} />,
    'ent': <Ear size={32} color={color} />,
    'cancer': <Ribbon size={32} color={color} />,
    'crying': <Baby size={32} color={color} />,
    'development': <Puzzle size={32} color={color} />,
    'gut': <Droplets size={32} color={color} />,
    'heart': <Heart size={32} color={color} />,
    'jaundice': <Sun size={32} color={color} />,
    'kidneys genitals': <Droplets size={32} color={color} />,
    'movement': <Footprints size={32} color={color} />,
    'other': <PlusCircle size={32} color={color} />,
    'trauma': <Bandage size={32} color={color} />,
  };
  return icons[id] || <Activity size={32} color={color} />;
};

// Comprehensive mapping for JSON 'type: image' references
const imageMap = {
  'Cataracts': cataractsImg,
  'Conjunctivitis': conjunctivitisImg,
  'Sunset Eyes': sunsetEyesImg,
  'Stools': stoolsImg,
  'Tongue': tongueImg,
  'Weight': weightImg,
  'Fontanel': fontanelImg,
  'Red reflex': redReflexImg,
  'Absent red reflex': absentRedReflexImg,
  'Glaucoma': glaucomaImg,
  'Ankyloglossia': ankyloglossiaImg,
  'Stool Appearance': stoolsImg,
  'Tongue Appearance': tongueImg,
};

const SymptomChecker = () => {
  const [ageGroup, setAgeGroup] = useState(null); // 'baby' | 'child'
  const [selectedCategory, setSelectedCategory] = useState(null);

  const activeData = ageGroup === 'baby' ? babyData : childData;

  const handleBack = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      setAgeGroup(null);
    }
  };

  // Helper to render the specific section content (red, orange, green, etc.)
  const renderContentItems = (contentItems, isInfo = false) => {
    return contentItems.map((item, idx) => {
      const showBullet = !isInfo; // No bullets in Info section
      
      switch (item.type) {
        case 'titletext':
          // Titles don't get bullets anymore for cleaner look
          return <h4 key={idx} className="content-title">{item.content}</h4>;
        case 'text':
        case 'greentext':
        case 'redtext':
          return (
            <p key={idx} className={`content-text ${item.type}`}>
              {showBullet && <span className="bullet">⊙ </span>}
              {item.content}
            </p>
          );
        case 'image':
          const imgSrc = imageMap[item.content];
          if (!imgSrc) return null;
          return (
            <div key={idx} className="inline-image-container">
              <img src={imgSrc} alt={item.content} className="inline-medical-image" />
              <span className="inline-image-label">{item.content} Reference</span>
            </div>
          );
        case 'link':
          return (
            <div key={idx} className="link-wrapper">
              {showBullet && <span className="bullet">⊙</span>}
              <a href={item.linkUrl} target="_blank" rel="noreferrer" className="content-link">
                {item.content}
              </a>
            </div>
          );
        case 'button':
          // The user wants these to be headings for sub-sections
          return (
            <div key={idx} className="sub-section">
              <h4 className="sub-section-title">{item.content}</h4>
              <div className="sub-section-content">
                {item.sheet?.sheetContent && renderContentItems(item.sheet.sheetContent, isInfo)}
              </div>
            </div>
          );
        default:
          return null;
      }
    });
  };

  // Age Selection Screen
  if (!ageGroup) {
    return (
      <div className="page-container animate-enter webapp-container">
        <SEO
          title="Symptom Checker"
          description="AI-powered pediatric symptom checker based on IMCI guidelines. Get expert guidance for newborns and children."
        />
        <div className="webapp-header">
          <h1>Pediatric Symptom Checker</h1>
          <p>Select your child's age group to view tailored pediatric guidelines.</p>
        </div>

        <div className="age-selection-grid">
          <button className="glass-panel age-card" onClick={() => setAgeGroup('baby')}>
            <div className="age-icon baby-icon">0-2 months</div>
            <h2>Baby Health</h2>
            <p>Guidelines for newborns and infants up to 2 months old.</p>
          </button>

          <button className="glass-panel age-card" onClick={() => setAgeGroup('child')}>
            <div className="age-icon child-icon">2-60 months</div>
            <h2>Child Health</h2>
            <p>Guidelines for toddlers and children from 2 to 60 months old.</p>
          </button>
        </div>

        <div className="medical-disclaimer glass-panel">
          <AlertTriangle size={24} color="#f59e0b" />
          <p><strong>Disclaimer:</strong> This tool provides general medical guidelines and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
        </div>
      </div>
    );
  }

  // Category Selection Screen
  if (!selectedCategory) {
    return (
      <div className="page-container animate-enter webapp-container">
        <div className="webapp-header with-back">
          <button onClick={handleBack} className="btn-back">
            <ArrowLeft size={20} /> Back
          </button>
          <div className="header-titles">
            <h1>{ageGroup === 'baby' ? 'Baby Health (0-2m)' : 'Child Health (2-60m)'}</h1>
            <p>Select a symptom or category</p>
          </div>
        </div>

        <div className="category-grid">
          {activeData.map((category) => (
            <button
              key={category.id}
              className={`glass-panel category-card ${category.id === 'info' ? 'info-card' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <div className="category-icon">
                {categoryIconMap(category.id)}
              </div>
              <h3>{category.name}</h3>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Category Detail Screen
  return (
    <div className="page-container animate-enter webapp-container">
      <div className="webapp-header with-back">
        <button onClick={handleBack} className="btn-back">
          <ArrowLeft size={20} /> Back
        </button>
        <div className="header-titles">
          <h1>{selectedCategory.name}</h1>
          <p>Guidelines & Indicators</p>
        </div>
      </div>

      <div className="guideline-sections">
        {selectedCategory.sections.map((section, idx) => {
          const bgClass = `bg-${section.background.toLowerCase()}`;
          return (
            <div key={idx} className={`glass-panel guideline-section ${bgClass}`}>
              <div className="section-body">
                {renderContentItems(section.content, selectedCategory.id === 'info')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SymptomChecker;

