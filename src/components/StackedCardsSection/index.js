import React, { useEffect, useMemo, useRef, useState } from 'react';


import stackedCard2 from '../../assests/stackedCard2.png';
import stackedCard1 from '../../assests/stackedCard1.png';
import stackedCard3 from '../../assests/stackedCard3.png';
import stackedCard4 from '../../assests/stackedCard4.png';
import stackedSectionDecorLeft from '../../assests/stackedSectionDecorLeft.svg';

const StackedCardsSection = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const wheelAccumRef = useRef(0);
  const lastWheelDirRef = useRef(0);

  const cards = useMemo(
    () => [
      {
        id: 1,
        image:`${stackedCard1}`,
        frameColor: '#6B1E2F',
        showCaption: true,
        eyebrow: 'Before they were products, they were rituals',
        headline: 'We’re just bottling them.',
        captionTextColor: '#FFFFFF',
      },
      {
        id: 2,
        image: `${stackedCard2}`,
        frameColor: '#2E3F36',
        showCaption: true,
        eyebrow: 'Tiny traditions, turned into',
        headline: 'Everyday essentials.',
        captionTextColor: '#FFFFFF',
      },
      {
        id: 3,
        image: `${stackedCard3}`,
        frameColor: '#F1E6D9',
        showCaption: true,
        eyebrow: 'What they brewed, crushed, soaked, and mixed',
        headline: 'We now serve, ready to use.',
        captionTextColor: '#2F2A25',
      },
      {
        id: 4,
        image: `${stackedCard4}`
,        frameColor: '#223247',
        showCaption: true,
        eyebrow: 'We didn’t invent functional foods',
        headline: 'Our grandmothers did.',
        captionTextColor: '#FFFFFF',
      },
    ],
    []
  );

  const next = () => setActive((i) => (i + 1) % cards.length);
  const prev = () => setActive((i) => (i - 1 + cards.length) % cards.length);

  const lock = (ms = 420) => {
    isAnimatingRef.current = true;
    window.setTimeout(() => (isAnimatingRef.current = false), ms);
  };

  // Step one card per wheel/touch while within section, release at edges
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const WHEEL_STEP = 60; // accumulate small deltas before stepping
    const onWheel = (e) => {
      const atFirst = active === 0;
      const atLast = active === cards.length - 1;

      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      // Normalize delta across devices: pixel (0), line (1), page (2)
      const scale = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 800 : 1;
      const deltaY = e.deltaY * scale;
      const dir = deltaY > 0 ? 1 : -1;

      // Reset accumulator when direction flips to avoid sticky partials
      if ((lastWheelDirRef.current || dir) !== dir) {
        wheelAccumRef.current = 0;
      }
      lastWheelDirRef.current = dir;

      // If moving inward (there are more cards in that direction), consume scroll and step by threshold.
      const movingInward = (dir > 0 && !atLast) || (dir < 0 && !atFirst);
      if (movingInward) {
        e.preventDefault();
        wheelAccumRef.current += deltaY;
        if (wheelAccumRef.current > WHEEL_STEP) {
          next();
          lock();
          wheelAccumRef.current = 0;
        } else if (wheelAccumRef.current < -WHEEL_STEP) {
          prev();
          lock();
          wheelAccumRef.current = 0;
        }
        return;
      }

      // Moving outward at an edge: reset accumulator and allow page to scroll normally
      wheelAccumRef.current = 0;
      lastWheelDirRef.current = 0;
      // do not call preventDefault here to let page leave the section
    };

    const onKey = (e) => {
      if (isAnimatingRef.current) return;
      const atFirst = active === 0;
      const atLast = active === cards.length - 1;
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && !atLast) {
        e.preventDefault();
        next();
        lock();
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && !atFirst) {
        e.preventDefault();
        prev();
        lock();
      } else if (e.key === 'ArrowRight' && !atLast) {
        e.preventDefault();
        next();
        lock();
      } else if (e.key === 'ArrowLeft' && !atFirst) {
        e.preventDefault();
        prev();
        lock();
      }
    };

    const onTouchStart = (e) => {
      const t = e.touches[0];
      touchStartRef.current = { x: t.clientX, y: t.clientY };
    };

    const onTouchEnd = (e) => {
      if (isAnimatingRef.current) return;
      const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
      const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);
      const MIN = 35;

      const atFirst = active === 0;
      const atLast = active === cards.length - 1;

      if (absY >= absX && absY > MIN) {
        if (dy < 0 && !atLast) {
          e.preventDefault();
          next();
          lock();
        } else if (dy > 0 && !atFirst) {
          e.preventDefault();
          prev();
          lock();
        }
        return;
      }
      if (absX > MIN) {
        if (dx < 0 && !atLast) {
          e.preventDefault();
          next();
          lock();
        } else if (dx > 0 && !atFirst) {
          e.preventDefault();
          prev();
          lock();
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('keydown', onKey);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: false });

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('keydown', onKey);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [active, cards.length]);

  return (
    <>
      <style>{`
        .stacked-section{position:relative;background:#F5EDE4;width:100%;padding: 0 0 20px 0;margin:0}
        .stacked-section__spacer{position:relative;padding:0;margin:0}
        .stacked-section__container{max-width:960px;margin:0 auto;padding:0 16px}
        .stacked-section__decorLeft {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 180px;
  max-width: 22vw;
  height: auto;
  opacity: .6;
  pointer-events: none;
}
        /* Section heading (requested) */
        .stacked-section__header{display:block;margin:28px 0 18px 0}
        .stacked-section__title{margin:0;color:#6B1E2F;font-family:'Georgia',serif;font-weight:600;letter-spacing:.2px;font-size:28px;line-height:1.25}

        /* Compact stage sized to card footprint */
        .stacked-section__stage{position:relative;height:auto}
        .stacked-section__cards{
          position:relative;
          top:auto;
          height:464px; /* match card height to remove layout gap */
          display:flex;align-items:center;justify-content:center;
          overflow:visible;outline:none;touch-action:pan-y
        }

        /* Card footprint (outer) */
        .stacked-card{
          position:absolute;
          width:667px;height:464px;
          border-radius:10px;overflow:hidden;
          transition:transform .55s cubic-bezier(.4,0,.2,1),opacity .55s ease,box-shadow .55s ease;
          box-shadow:0 18px 50px rgba(0,0,0,.22);
          will-change:transform,opacity
        }

        /* Colored frame that sits behind image + caption */
        .stacked-card__frame{
          --frame:#000;
          --caption:#fff;
          display:grid;grid-template-rows:1fr auto; /* ensure caption always fits */
          width:100%;height:100%;
          background:var(--frame);
          border-radius:10px;
        }

        /* Image region on top */
        .stacked-card__imageWrap{
          position:relative;
          min-height:0; /* allow grid to shrink image area for caption */
          margin:18px 18px 0 18px; /* breathing room to show frame color */
          border-radius:6px;overflow:hidden;background:rgba(0,0,0,.08)
        }
        .stacked-card__image{width:100%;height:100%;object-fit:cover;display:block}

        /* Caption region at bottom (only first card shows) */
        .stacked-card__caption{
          padding:18px 22px 26px 22px; /* extra bottom gap */
          color:var(--caption);
          font-family:'Georgia',serif;
        }
        .stacked-card__eyebrow{
          font-size:14px;line-height:1.3;opacity:.9;margin:0 0 6px 0;font-weight:400
        }
        .stacked-card__headline{
          font-size:18px;line-height:1.35;margin:0;font-weight:700;letter-spacing:.2px
        }

        /* Relative positions: active centered, others spread left/right */
        .is-active{transform:translateX(0) scale(1);opacity:1}
        .is-right-1{transform:translateX(60px) scale(.96);opacity:.9}
        .is-right-2{transform:translateX(120px) scale(.92);opacity:.6}
        .is-right-3{transform:translateX(180px) scale(.88);opacity:.35}
        .is-left-1{transform:translateX(-60px) scale(.96);opacity:.9}
        .is-left-2{transform:translateX(-120px) scale(.92);opacity:.6}
        .is-left-3{transform:translateX(-180px) scale(.88);opacity:.35}

        @media (max-width:768px){
          .stacked-card{width:92vw;max-width:667px;height:min(60vw,464px)}
          .stacked-section__cards{height:min(60vw,464px)}
          .stacked-section__decorLeft{display:none}
          .is-right-1{transform:translateX(20px) scale(.96)}
          .is-right-2{transform:translateX(40px) scale(.92)}
          .is-right-3{transform:translateX(60px) scale(.88)}
          .is-left-1{transform:translateX(-20px) scale(.96)}
          .is-left-2{transform:translateX(-40px) scale(.92)}
          .is-left-3{transform:translateX(-60px) scale(.88)}
          .stacked-card__imageWrap{margin:12px 12px 0 12px}
          .stacked-card__caption{padding:12px 16px 14px 16px}
          .stacked-section__header{margin:20px 0 12px}
          .stacked-section__title{font-size:22px}
        }
      `}</style>

      <section
        className="stacked-section"
        ref={sectionRef}
        tabIndex={-1}
        aria-label="Restoration stacked gallery. Scroll to step through images."
      >
        <img
          className="stacked-section__decorLeft"
          src={stackedSectionDecorLeft}
          alt="stackedSectionDecorLeft"
          aria-hidden="true"
          loading="lazy"
        />
        <div className="stacked-section__spacer">
          <div className="stacked-section__container">
            <header className="stacked-section__header">
              <h2 className="stacked-section__title">This isn’t just innovation, it’s restoration -
              <br className="hide-sm"/> rituals into functional products.</h2>
            </header>

            <div className="stacked-section__stage">
              <div className="stacked-section__cards">
              {cards.map((card, index) => {
                const deltaRaw = index - active; // negative -> left, positive -> right
                const clamped = Math.max(-3, Math.min(3, deltaRaw));
                const sideClass =
                  clamped === 0
                    ? 'is-active'
                    : clamped > 0
                    ? `is-right-${clamped}`
                    : `is-left-${Math.abs(clamped)}`;
                const cls = `stacked-card ${sideClass}`;
                const zIndex = 100 - Math.abs(clamped) + (clamped === 0 ? 5 : 0);

                return (
                  <div className={cls} key={card.id} style={{ zIndex }}>
                    <div
                      className="stacked-card__frame"
                      style={{
                        '--frame': card.frameColor,
                        '--caption': card.captionTextColor,
                      }}
                    >
                      <div className="stacked-card__imageWrap">
                        <img className="stacked-card__image" src={card.image} alt="" />
                      </div>

                      {card.showCaption ? (
                        <div className="stacked-card__caption" aria-hidden={!card.showCaption}>
                          <p className="stacked-card__eyebrow">{card.eyebrow}</p>
                          <h3 className="stacked-card__headline">{card.headline}</h3>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default StackedCardsSection;