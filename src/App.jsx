import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import AppsShowcase from './pages/MobileApps';
import WebApp from './pages/SymptomChecker';
import Mediation from './pages/Mediation';
import VRMedicine from './pages/VRMedicine';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<AppsShowcase />} />
            <Route path="/web-app" element={<WebApp />} />
            <Route path="/mediation" element={<Mediation />} />
            <Route path="/vr-medicine" element={<VRMedicine />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
