import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import SplitText from '../utils/Split3.min.js';

const MainSection = () => {
  useEffect(() => {
    const split = new SplitText('#header-text', {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });
  }, []);

  return (
    <section className="mainSection" data-scroll-section id="header-text">
      <div className="square-main"></div>
      <h1>DESIGNER</h1>
      <h2>DEVELOPER</h2>
      <button className="contact-main">Contact +</button>
    </section>
  );
};

export default MainSection;
