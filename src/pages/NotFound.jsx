import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="page-container animate-enter not-found-container">
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist."
      />
      
      <div className="glass-panel not-found-content">
        <div className="not-found-icon-wrapper">
          <AlertCircle size={64} />
        </div>
        
        <h1 className="not-found-title text-gradient">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        
        <p className="not-found-text">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link to="/" className="btn btn-primary">
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
