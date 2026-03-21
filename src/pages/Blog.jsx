import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import SEO from '../components/SEO';
import './Blog.css';

const Blog = () => {
  return (
    <div className="page-container animate-enter">
      <SEO 
        title="Insights & Guidance" 
        description="Read the latest pediatric insights, parenting tips, and medical perspectives from Dr. Pieter Jooste."
      />
      <div className="blog-hero glass-panel">
        <h1>Insights & <span className="text-gradient">Guidance</span></h1>
        <p>Expert pediatric advice, parenting tips, and medical perspectives from Dr. Pieter Jooste.</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="glass-panel blog-card animate-enter" style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={post.image} alt={post.title} className="blog-card-image" />
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="blog-category">{post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-read-more">
                Read Article <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
