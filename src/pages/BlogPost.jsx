import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import SEO from '../components/SEO';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="page-container" style={{ textAlign: 'center', padding: '10rem 0' }}>
        <h2>Article note found.</h2>
        <Link to="/blog" className="btn btn-primary" style={{ marginTop: '2rem' }}>Return to Blog</Link>
      </div>
    );
  }

  const recentPosts = blogPosts.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="page-container animate-enter">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        ogImage={post.image}
      />
      <Link to="/blog" className="back-to-blog">
        <ArrowLeft size={18} /> Back to Insights
      </Link>

      <div className="blog-post-header glass-panel">
        <img src={post.image} alt={post.title} className="blog-post-hero-img" />
        <div className="blog-post-header-content">
          <span className="blog-category">{post.category}</span>
          <h1 style={{ margin: '1rem 0' }}>{post.title}</h1>
          <div className="blog-card-meta" style={{ justifyContent: 'flex-start', gap: '2rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="blog-post-content-container">
        <article className="glass-panel blog-article">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <aside className="blog-sidebar">
          <div className="glass-panel sidebar-section">
            <h4>Recent Insights</h4>
            {recentPosts.map(rp => (
              <Link key={rp.id} to={`/blog/${rp.id}`} className="recent-post-link">
                {rp.title}
              </Link>
            ))}
          </div>

          <div className="glass-panel sidebar-section">
            <h4>Expert Guidance</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Looking for professional advice tailored to your child? Dr. Jooste is available for medical mediation and consultations.
            </p>
            <Link to="/mediation" className="btn btn-outline" style={{ display: 'flex', marginTop: '1rem', width: '100%' }}>
              Learn More <ChevronRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
