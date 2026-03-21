import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, ogImage }) => {
  const siteTitle = "ChildHealthForAll | Dr. Pieter Jooste";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Expert pediatric advice and medical mediation services by Dr. Pieter Jooste. Empowering parents with AI-driven symptom checkers and clinical guidance.";
  const metaDescription = description || defaultDescription;
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={metaDescription} />
      {/* End standard metadata tags */}
      
      {/* Facebook tags */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      {/* End Facebook tags */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || 'Dr. Pieter Jooste'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {/* End Twitter tags */}

      {ogImage && <meta property="og:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEO;
