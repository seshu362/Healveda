import React, { useLayoutEffect } from 'react';
import "./assests/fonts/fonts.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Blog from './components/Blog';
import BlogItem from './components/BlogItem';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page wrapper component to ensure scroll reset
const PageWrapper = ({ children }) => {
  const location = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
  }, [location]);
  
  return <div>{children}</div>;
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogItem />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </>
  );
}