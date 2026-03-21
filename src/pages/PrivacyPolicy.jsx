import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="page-container animate-enter privacy-container">
      <div className="glass-panel privacy-card">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Updated 12 March 2026</p>
        
        <div className="policy-section">
          <p>ChildHealthForAll (Pty) Ltd operates Baby Health 0-2 months, Child Health 2-60 months, My Wine Journey and My Beer Journey apps.</p>
        </div>

        <div className="policy-section">
          <h2>1. Information Collection and Access</h2>
          <p>We are committed to protecting your privacy. Data Accessed and Collected: Our app does not access, collect, or store any Personal Health Information (PHI), medical records, or sensitive health data from your device. We do not use any APIs that access health-related sensors or data repositories (such as Health Connect or Google Fit). Technical Data: To improve app performance, we may collect non-identifiable technical data (such as device model, OS version, and crash logs) via Google Play Services. This data is used solely for troubleshooting and is not linked to your identity.</p>
        </div>

        <div className="policy-section">
          <h2>2. Health Data Usage</h2>
          <p>We do not collect or share any health data. If you provide information via email for support queries, that information is used exclusively to resolve your request and is never shared with third parties for marketing or advertising purposes.</p>
        </div>

        <div className="policy-section">
          <h2>3. Data Retention Policy</h2>
          <p>Retention Period: We retain the minimal technical data mentioned above for a period of 90 days to monitor app stability, after which it is automatically deleted. Correspondence Data: If you contact us via email, we retain your contact information only for the duration of our correspondence. Once your query is resolved, your email and any associated data are deleted from our systems within 30 days.</p>
        </div>

        <div className="policy-section">
          <h2>4. Data Deletion and User Rights</h2>
          <p>You have the right to request the deletion of any data we may have. How to Request Deletion: To request the removal of your data or to inquire about your information, please email us at doctor@childhealthforall.com. We will respond to and fulfill all deletion requests within 7 business days. Note: Since our app does not require account creation, we do not maintain user profiles or databases to delete.</p>
        </div>

        <div className="policy-section">
          <h2>5. Third-party websites</h2>
          <p>Our Services may contain links to other websites or services. We are not responsible for such websites' privacy practices. We encourage you to be aware when you leave our Services and to read the privacy statements of each and every website and service you visit. This privacy Policy does not apply to such linked third party websites and services.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
