import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md"; 

import navLogo from '../../assests/navLogo.png';
import './index.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { 
    setOpen(false); 
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav') && !e.target.closest('.menu')) {
        setOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  const activePath = location.pathname;

  const handleLinkClick = () => {
    setOpen(false);
    // REMOVED scroll logic - let ScrollToTop component handle it
  };

  const LinkBtn = ({ to, label }) => (
    <Link
      to={to}
      className={`nav-link ${activePath === to ? 'active' : ''}`}
      aria-current={activePath === to ? 'page' : undefined}
      onClick={handleLinkClick}
    >
      {label}
    </Link>
  );

  return (
    <header className="nav-root">
      <div className="nav-wrap">
        <Link to="/" className="brand" aria-label="Healveda Home" onClick={handleLinkClick}>
          <img className="logo" src={navLogo} alt="Healveda Logo" />
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <LinkBtn to="/" label="Home" />
          <LinkBtn to="/products" label="Products" />
          <LinkBtn to="/blog" label="Blog" />
          <LinkBtn to="/contact" label="Contact" />
        </nav>

        <button
          className="menu"
          onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <MdClose size={24} /> : <TiThMenu size={24} />}
        </button>
      </div>
    </header>
  );
}