import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './index.css';

import blogImageBg from '../../assests/blogImageBg.png';
import blogPost1 from '../../assests/blogPost1.png';
import blogPost2 from '../../assests/blogPost2.png';
import blogPost3 from '../../assests/blogPost3.png';
import blogPost4 from '../../assests/blogPost4.png';
import blogPost5 from '../../assests/blogPost5.png'; 
import blogPost6 from '../../assests/blogPost6.png';  
import blogContainerBg from '../../assests/blogContainerBg.png'; 

const HERO_IMAGE = `${blogImageBg}`;

export const BLOG_POSTS = [
  {
    id: 1,
    image: `${blogPost1}`,
    title: 'Back to the Verandah: Where Wellness Began'
  },
  {
    id: 2,
    image: `${blogPost2}`,
    title: "Grandmother's Remedies, Modern Science"
  },
  {
    id: 3,
    image: `${blogPost3}`,
    title: 'The Rhythm of Rituals: Everyday Healing in Ancient India'
  },
  {
    id: 4,
    image: `${blogPost4}`,
    title: 'Back to the Verandah: Where Wellness Began'
  },
  {
    id: 5,
    image:`${blogPost5}`,
    title: "Grandmother's Remedies, Modern Science"
  },
  {
    id: 6,
    image: `${blogPost6}`,
    title: 'The Rhythm of Rituals: Everyday Healing in Ancient India'
  }
];

const POSTS_PER_PAGE = 6;
const TOTAL_PAGES = 10;

// ✨ Helper function to format title with styled apostrophe
const formatTitle = (title) => {
  const parts = title.split("'");
  
  if (parts.length === 1) {
    return title; // No apostrophe found
  }
  
  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className="font-1 size-1">'</span>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const renderPageNumbers = () => {
    const pages = [];
    
    pages.push(
      <button
        key={1}
        className={`page-number ${currentPage === 1 ? 'active' : ''}`}
        onClick={() => setCurrentPage(1)}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      pages.push(<span key="dots1" className="page-dots">...</span>);
    }

    for (let i = 2; i < TOTAL_PAGES; i++) {
      if (i === currentPage || i === currentPage - 1 || i === currentPage + 1) {
        pages.push(
          <button
            key={i}
            className={`page-number ${currentPage === i ? 'active' : ''}`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        );
      }
    }

    if (currentPage < TOTAL_PAGES - 2) {
      pages.push(<span key="dots2" className="page-dots">...</span>);
    }

    pages.push(
      <button
        key={TOTAL_PAGES}
        className={`page-number ${currentPage === TOTAL_PAGES ? 'active' : ''}`}
        onClick={() => setCurrentPage(TOTAL_PAGES)}
      >
        {TOTAL_PAGES}
      </button>
    );

    return pages;
  };

  return (
    <div className="blog-container" style={{ backgroundImage: `url(${blogContainerBg})` }}>
      <div className="blog-hero">
        <img src={HERO_IMAGE} alt="Blog Hero" className="hero-image" />
      </div>
      <h1 className="hero-title">Blog</h1>
      
      <div className="blog-content">
        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id} 
              className="blog-card"
              onClick={() => handleBlogClick(post.id)}
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="blog-card-image"
              />
              {/* ✨ Use formatTitle here */}
              <h3 className="blog-card-title">{formatTitle(post.title)}</h3>
            </div>
          ))}
        </div>
        
        {/* <div className="pagination">
          {renderPageNumbers()}
        </div> */}
      </div>
    </div>
  );
}