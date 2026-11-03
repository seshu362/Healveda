// src/components/Products/index.js
import React, { useState } from 'react';
import './index.css';
import Contact from '../Contact';
import { useNavigate } from 'react-router-dom';

import heroImagebg22 from '../../assests/heroImagebg22.png';  
import productImage1 from '../../assests/productImage1.png';
import productImage2 from '../../assests/productImage2.png';
import productImage3 from '../../assests/productImage3.png';
import productImage4 from '../../assests/productImage4.png';
import productDetailsBg from '../../assests/productDetailsBg.jpg';

const HERO_IMAGE = `${heroImagebg22}`;

const PRODUCTS = [
  {
    id: 1,
    image: productImage3,
    title: 'Deccan Cinnamon Dum Chai',
    subtitle: 'Hyderabad Chai with friends near Charminar',
    description: "In the middle of hyderabad's galliyon, a quiet corner. Friends, flavour, and a moment that holds you still."
  },
  {
    id: 2,
    image: `${productImage2}`,
    title: 'Idukki Vally Cardamom Chai',
    subtitle: 'Idukki - Tea overlooking valley on curved road',
    description: 'In misty valleys of idukki, the road curved and view widened. Valley opened up and cleared your head. Chai made it all pause.'
  },
  {
    id: 3,
    image: `${productImage1}`,
    title: "India's Herbal Chai",
    subtitle: 'Varanasi Sitting on ghat steps, river activity',
    description: 'The River Flowed, the Ghats Never Stopped. You sat down, sipped slow, and everything felt timeless.'
  },
  {
    id: 4,
    image: `${productImage4}`,
    title: 'Desi Masala Chai',
    subtitle: 'Delhi-Tea in busy street, Red Fort/Qutub view',
    description: 'The city raced, monuments stood still. You paused in the noise, sipped, and felt everything fall into place.'
  }
];

// ✨ Helper function to format text with styled apostrophe
const formatText = (text) => {
  const parts = text.split("'");
  
  if (parts.length === 1) {
    return text; // No apostrophe found
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

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0]);
  const navigate = useNavigate();

  const handleContactForm = () => {
    navigate('/contact');
  };

  return (
    <section className="products-root" id="products">
      <div className="products-hero">
        <img src={HERO_IMAGE} alt="Tea gardens" className="hero-img" />
      </div>

      <div className="products-content">
        <h2 className="products-title">Products</h2>

        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <button
              key={product.id}
              className={`product-card ${activeProduct.id === product.id ? 'active' : ''}`}
              onClick={() => setActiveProduct(product)}
            >
              <img src={product.image} alt={product.title} />
            </button>
          ))}
        </div>

        <div className="product-details" style={{ backgroundImage: `url(${productDetailsBg})` }}>
          <div className="details-inner">
            <img 
              src={activeProduct.image} 
              alt={activeProduct.title}
              className="details-image"
            />
            <div className="details-text">
              {/* ✨ Apply formatText to title */}
              <h3 className="details-title">{formatText(activeProduct.title)}</h3>
              
              {/* ✨ Apply formatText to subtitle */}
              <p className="details-subtitle">{formatText(activeProduct.subtitle)}</p>
              
              {/* ✨ Apply formatText to description */}
              <p className="details-description">{formatText(activeProduct.description)}</p>
              
              <button onClick={handleContactForm} className="contact-btn">Contact for Product</button>
            </div>
            <button 
              className="close-btn"
              onClick={() => setActiveProduct(PRODUCTS[0])}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
}