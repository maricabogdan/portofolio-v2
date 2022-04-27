import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SplitText from '../utils/Split3.min.js';
import cn from 'classnames';
import SectionHeader from './SectionHeader';
import useOnScreen from '../hooks/useOnScreen.js';

const AboutSection = () => {
  const ref = useRef();

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText('#headline', {
        type: 'lines',
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2',
      });
    }
  }, [reveal]);

  return (
    <section className={cn('about-section')} data-scroll-section id="about">
      <SectionHeader title="about" />
      <p ref={ref} id="headline" className={cn({ 'is-reveal': reveal })}>
        Hello! My name is Bogdan Marica and I am web developer, web designer and
        web enthusiast. At the end of 2020, i found a website called CodeAcademy
        which have an offer for 100,000 students for free 3 months. Even I am
        study Electrical Engineering at Faculty of Engineering from Craiova, I
        was curious about programming. At that moment I didn’t have any
        knowledge about codding. I found a series of courses about Web
        Development which have courses about HTML CSS, JavaScript and more.
        After that day, I found my passion. Almost everyday I started learning
        about anything which have web development in common. After 3 mounths I
        entered in a special program , sort of an internship at OSF Academy for
        Web Development, Front-End. From there I started more serios and I
        learned more frameworks like React.js, SCSS and more. For me , it’s hard
        because I need to split between Job, Faculty and learning. I hope you
        enjoy my portofolio. Have a nice day! 😊
      </p>
    </section>
  );
};

export default AboutSection;
