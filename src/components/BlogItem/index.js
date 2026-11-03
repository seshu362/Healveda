import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../Blog'; 
import './index.css';
import blogItemContainerBg from '../../assests/blogItemContainerBg.png';

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

export default function BlogItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === parseInt(id));

  if (!post) {
    return <div className="blog-not-found">Blog post not found</div>;
  }

  return (
    <div className="blog-item-container" style={{ backgroundImage: `url(${blogItemContainerBg})` }}>
      <div className="blog-item-content">
        <h1 className="blog-item-title">{formatTitle(post.title)}</h1>
        
        <div className="blog-item-image-container">
          <img 
            src={post.image} 
            alt={post.title}
            className="blog-item-image"
          />
        </div>

        <div className="blog-item-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
            the release of Letraset sheets containing Lorem Ipsum passages, and more 
            recently with desktop publishing software like Aldus PageMaker including versions 
            of Lorem Ipsum.
          </p>

          <p>
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters, as opposed to using 
            'Content here, content here', making it look like readable English. Many desktop 
            publishing packages and web page editors now use Lorem Ipsum as their default 
            model text, and a search for 'lorem ipsum' will uncover many web sites still in their 
            infancy. Various versions have evolved over the years, sometimes by accident, 
            sometimes on purpose (injected humour and the like).
          </p>
        </div>

        <button 
          className="back-to-blogs-btn"
          onClick={() => navigate('/blog')}
        >
          Back to Blogs
        </button>
      </div>
    </div>
  );
}