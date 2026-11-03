import React, { useEffect, useMemo, useRef, useState } from "react";
import "./index.css";
import StackedCardsSection from '../StackedCardsSection';
import { useNavigate } from 'react-router-dom';
import heroBgImage from '../../assests/heroBgImage.png';  

import rowIcon1 from '../../assests/rowIcon1.svg';
import rowIcon2 from '../../assests/rowIcon2.svg';
import rowIcon3 from '../../assests/rowIcon3.svg';
import rowIcon4 from '../../assests/rowIcon4.svg';
import rowIcon5 from '../../assests/rowIcon5.svg';
import rowIcon6 from '../../assests/rowIcon6.svg';
import rowIcon7 from '../../assests/rowIcon7.svg';
import rowIcon8 from '../../assests/rowIcon8.svg';
import rowIcon9 from '../../assests/rowIcon9.svg';
import rowIcon10 from '../../assests/rowIcon10.svg';

import lowerImage from '../../assests/lowerImage.png';

import logoInspobgImage from '../../assests/logoInspobgImage.png';
import logoInspirationImg from '../../assests/logoInspirationImg.svg'
import outerBoundary from '../../assests/outerBoundary.png';
import InnerSpiral from '../../assests/InnerSpiral.png';
import storyImage1 from '../../assests/storyImage1.png';
import storyImage2 from '../../assests/storyImage2.png';
import storyImage3 from '../../assests/storyImage3.png';
import storyBgImmage from '../../assests/storyBgImmage.jpg';


import ritualImages1 from '../../assests/ritualImages1.png';
import ritualImages2 from '../../assests/ritualImages2.png';
import ritualImages3 from '../../assests/ritualImages3.png';
import ritualImages4 from '../../assests/ritualImages4.png';


const Home = () => {
   const ritualImages = useMemo(
    () => [ritualImages1, ritualImages2, ritualImages3, ritualImages4],
    []
  );

  // Stacked gallery state/refs
  const [active, setActive] = useState(0);
  const stackRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const touchRef = useRef({ x: 0, y: 0 });

  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/blog');
  };

    const handleExploreAllClick = () => {
    navigate('/products');
  };

  const next = () => setActive((i) => (i + 1) % ritualImages.length);
  const prev = () =>
    setActive((i) => (i - 1 + ritualImages.length) % ritualImages.length);

  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;

    const lock = () => {
      isAnimatingRef.current = true;
      window.setTimeout(() => (isAnimatingRef.current = false), 550);
    };

    const onWheel = (e) => {
      // Interact only when the cursor is over the stack
      if (isAnimatingRef.current) return;
      // Prevent the page from scrolling while interacting with the gallery
      e.preventDefault();
      if (e.deltaY > 0) {
        next();
      } else if (e.deltaY < 0) {
        prev();
      }
      lock();
    };

    const onKey = (e) => {
      if (isAnimatingRef.current) return;
      if (e.key === "ArrowRight") {
        next();
        isAnimatingRef.current = true;
        setTimeout(() => (isAnimatingRef.current = false), 550);
      } else if (e.key === "ArrowLeft") {
        prev();
        isAnimatingRef.current = true;
        setTimeout(() => (isAnimatingRef.current = false), 550);
      }
    };

    const onTouchStart = (e) => {
      const t = e.touches[0];
      touchRef.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchEnd = (e) => {
      if (isAnimatingRef.current) return;
      const dx = e.changedTouches[0].clientX - touchRef.current.x;
      if (Math.abs(dx) > 40) {
        if (dx < 0) {
          next();
        } else {
          prev();
        }
        isAnimatingRef.current = true;
        setTimeout(() => (isAnimatingRef.current = false), 450);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("keydown", onKey);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [ritualImages.length]);

  return (
    <div className="home" id="home">
      {/* Hero */}
      <section className="hero"  style={{ backgroundImage: `url(${heroBgImage})` }} aria-label="Ayurveda kitchen hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">
            Before wellness was a hashtag, it was a way of
            <br className="hide-sm" /> life <span className="font-1 size-1">-</span> We<span className="font-1 size-1">’</span>re bringing that back.
          </h1>
          <button onClick={handleExploreAllClick} className="hero__cta" type="button">Explore</button>
        </div>
      </section>

      
      {/* Icon Row */}
      <div className="icon-row" aria-hidden="true">
        <div className="icon-row__container">
          {[
            rowIcon1,
            rowIcon2,
            rowIcon3,
            rowIcon4,
            rowIcon5,
            rowIcon6,
            rowIcon7,
            rowIcon8,
            rowIcon9,
            rowIcon10,
          ].map((src, i) => (
            <img
              className="icon-row__icon"
              src={src}
              alt=""
              key={i}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Lower Section */}
      <section className="lower">
        <div className="lower__grid">
          <figure className="lower__imageWrap">
            <img
              src={lowerImage}
              alt="A sunlit verandah with swing and plants"
              className="lower__image"
            />
          </figure>

          <div className="lower__content">
            <h2 className="lower__heading">
              We<span className="font-1 size-1">’</span>re not trending. <br/> We<span className="font-1 size-1">’</span>re time<span className="font-1 size-1"> </span>traveling.
            </h2>

            <div className="lower__cards">
              <article className="fact">
                <p className="fact__small">
                  Our great grandparents
                  <br />had a wellness routine.
                </p>
                <p className="fact__bold">
                  They just didn<span className="font-1 size-1">’</span>t
                  <br />
                  call it that.
                </p>
              </article>

              <article className="fact fact--tint">
                <p className="fact__small">
                  Before mindfulness
                  <br />apps, there were
                </p>
                <p className="fact__bold">
                  Gossip sessions
                  <br />
                  in the verandah.
                </p>
              </article>

              <article className="fact fact--tint">
              <p className="fact__small">They didn<span className="font-1 size-1">’</span>t journal.</p>
                <p className="fact__bold">
                  They just talked
                  <br />
                  over chai.
                </p>
                
              </article>

              <article className="fact">
                <p className="fact__small">
                  Who knew a bowl of
                  <br />
                  soaked nuts was a
                  <br />
                  wellness ritual?
                </p>
                <p className="fact__bold">
                  Oh right,
                  <br />
                  grandma.
                </p>
              </article>

              
            </div>
          </div>
        </div>
      </section>

      {/* Icon Row 2*/}
      <div className="icon-row" aria-hidden="true">
        <div className="icon-row__container">
          {[
            rowIcon1,
            rowIcon2,
            rowIcon3,
            rowIcon4,
            rowIcon5,
            rowIcon6,
            rowIcon7,
            rowIcon8,
            rowIcon9,
            rowIcon10,
          ].map((src, i) => (
            <img
              className="icon-row__icon"
              src={src}
              alt=""
              key={i}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Restoration / Stacked Gallery */}
      <StackedCardsSection/>

      {/* Logo Inspiration Section */}
      <section className="logo-inspo" aria-label="Logo Inspiration section">

        {/* Background SVG */}
        <div className="logo-inspo__bg" aria-hidden="true">
          <img 
            src= {logoInspobgImage}
            alt="logoInspobgImage"
            className="logo-inspo__bg-image"  
          />
        </div>

        <div className="logo-inspo__container">
          <img className="logo-inspo__mark" src={logoInspirationImg} alt="logo" loading="lazy"/>
          <h2 className="logo-inspo__title">Logo Inspiration</h2>

          <div className="logo-inspo__grid">
            <article className="logo-inspo__card">
              <img className="logo-inspo__icon" src={outerBoundary} alt="vectorlogo" loading="lazy"/>
              <p className="logo-inspo__subtitle">Outer Boundary:</p>
              <p className="logo-inspo__text">Called as ‘Yantra’, in Vedic/ Ayurvedic culture, this represents a Physical force or a creative energy.</p>
              <p className="logo-inspo__text">At HealVeda, we intend to convey the meaning of physical/ outer wellbeing.</p>
            </article>

            <article className="logo-inspo__card">
              <img className="logo-inspo__icon" src={InnerSpiral} alt="vectorlogo" loading="lazy"/>
              <p className="logo-inspo__subtitle">Inner spiral:</p>
              <p className="logo-inspo__text">This represents spiritual energy and internal harmony.</p>
              <p className="logo-inspo__text">At HealVeda, we intend to convey the meaning of mental/ inner wellbeing.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Stories That Heal */}
      <section className="stories" style={{ backgroundImage: `url(${storyBgImmage})` }} aria-label="Stories That Heal">
        <div className="stories__bg" aria-hidden="true" />
        <div className="stories__container">
          <header className="stories__header">
            <h2 className="stories__title">Stories That Heal</h2>
            <p className="stories__subtitle">A journal of traditions, rituals, and timeless wisdom</p>
          </header>

          <div className="stories__grid">
            <article className="story">
              <figure className="story__imageWrap">
                <img className="story__image" src={storyImage1} alt="storyImage3" loading="lazy" />
              </figure>
              <h3 className="story__heading">Back to the Verandah:<br/>Where Wellness Began</h3>
            </article>

            <article className="story">
              <figure className="story__imageWrap">
                <img className="story__image" src={storyImage2} alt="storyImage3" loading="lazy" />
              </figure>
              <h3 className="story__heading">Grandmother’s Remedies, Modern Science</h3>
            </article>

            <article className="story">
              <figure className="story__imageWrap">
                <img className="story__image" src={storyImage3} alt="storyImage3" loading="lazy" />
              </figure>
              <h3 className="story__heading">The Rhythm of Rituals: Everyday Healing in Ancient India</h3>
            </article>
          </div>

          <div className="stories__ctaWrap">
            <button 
            type="button" 
            className="stories__cta" 
            onClick={handleViewAllClick}
          >
            View All
          </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;