// src/components/Footer/index.js
import React from 'react';
import './index.css';   

import whatsappIcon from '../../assests/whatsappIcon.png';
import youtubeIcon from '../../assests/youtubeIcon.png';
import instaIcon from '../../assests/instaIcon.png';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-wrap">
        <div className="footer-text">
          Copyright © 2025 Healveda . | Concept & Design by eparivartan
        </div>
        
        <div className="footer-socials">
          <a 
            href="#whatsapp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="WhatsApp"
          >
            <img 
              src={whatsappIcon} 
              alt="WhatsApp" 
              className="whatsapp-icon"
            />
          </a>
          <a 
            href="#youtube" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="YouTube"
          >
            <img 
              src={youtubeIcon} 
              alt="YouTube" 
              className="youtube-icon"
            />
          </a>
          <a 
            href="https://www.instagram.com/healvedaindia/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <img 
              src={instaIcon}
              alt="Instagram" 
              className="instagram-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}