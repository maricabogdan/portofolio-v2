import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SliderMenu = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([revealMenu], {
        duration: 0.8,
        x: 500,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: 'none' },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.inital === null)
    ) {
      gsap.to(menu, {
        duration: 0,
        css: { display: 'flex' },
      });
      gsap.to(revealMenu, {
        duration: 0,
        opacity: 1,
        x: 0,
      });
      staggerReveal(revealMenu);
    }
  }, [state]);

  const staggerReveal = (node) => {
    gsap.from(node, {
      duration: 0.8,
      x: 500,
      transformOrigin: 'right top',
      skewX: 2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1,
      },
    });
  };

  return (
    <div className="slider-menu" ref={(el) => (menu = el)}>
      <div className="slider-wrapper" ref={(el) => (revealMenu = el)}>
        <nav>
          <ul>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SliderMenu;
