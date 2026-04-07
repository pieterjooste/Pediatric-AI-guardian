import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const AppsShowcase = lazy(() => import('./pages/MobileApps'));
const WebApp = lazy(() => import('./pages/SymptomChecker'));
const Mediation = lazy(() => import('./pages/Mediation'));
const VRMedicine = lazy(() => import('./pages/VRMedicine'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Fallback loader
const FallbackLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    <div className="spinner" style={{ width: '40px', height: '40px', border: '4px solid rgba(0,0,0,0.1)', borderTopColor: '#007BFF', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Suspense fallback={<FallbackLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<AppsShowcase />} />
              <Route path="/web-app" element={<WebApp />} />
              <Route path="/mediation" element={<Mediation />} />
              <Route path="/vr-medicine" element={<VRMedicine />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
