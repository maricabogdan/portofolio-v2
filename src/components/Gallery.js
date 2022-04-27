import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import cn from 'classnames';
import { BiLink } from 'react-icons/bi';
import { IoLogoGithub } from 'react-icons/io';

import BookLibrary from './images/gallery/book-librarymb-website.webp';
import Mboogle from './images/gallery/mboogle-website.webp';
import Ollie from './images/gallery/ollie-website.webp';
import Osf from './images/gallery/osf-website.webp';
import PlanetEarth from './images/gallery/planet-earth-website.webp';
import SnakeGame from './images/gallery/snake-game-website.webp';
import useOnScreen from '../hooks/useOnScreen';
import SectionHeader from './SectionHeader';

const images = [
  {
    src: Ollie,
    title: 'Ollie',
    subtitle: 'Design',
    description: 'Simple and clean design',
    link: 'https://olliedesign.netlify.app',
    codeGit: 'https://github.com/maricabogdan/ollie-design',
  },
  {
    src: PlanetEarth,
    title: 'Planet Earth',
    subtitle: '3D Earth',
    description: 'Experience with 3D',
    link: 'https://earth-mb.netlify.app/',
    codeGit: 'https://github.com/maricabogdan/earth-planet',
  },
  {
    src: Mboogle,
    title: 'Mboogle',
    subtitle: 'Google 2.0',
    description: 'Get familiar with API',
    link: 'https://mboogle.netlify.app',
    codeGit: 'https://github.com/maricabogdan/mboogle',
  },
  {
    src: SnakeGame,
    title: 'Snake Game',
    subtitle: 'Keyboard Only',
    description: 'A small game',
    link: 'https://snakecube-game.netlify.app/',
    codeGit: 'https://github.com/maricabogdan/snake-game',
  },
  {
    src: Osf,
    title: 'OSF Academy',
    subtitle: 'Internship',
    description: 'Simple E-Commerce',
    link: 'https://maricabogdanosf.netlify.app/',
    codeGit: 'https://github.com/maricabogdan/osfacademy',
  },
  {
    src: BookLibrary,
    title: 'Book Library',
    subtitle: 'Book Zone',
    description: 'Get your books ranked',
    link: 'https://book-librarybm.netlify.app/',
    codeGit: 'https://github.com/maricabogdan/book-library',
  },
];
function GalleryItem({
  src,
  category,
  subtitle,
  title,
  description,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  console.log(images[index].codeGit);

  return (
    <div
      className={cn('gallery-item-wrapper', { 'is-reveal': onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={'gallery-item'}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
          <p className="gallery-info-description">{description}</p>
          <a
            href={images[index].link}
            target="_blank"
            className="gallery-info-links"
            rel="noreferrer"
          >
            <BiLink />
          </a>

          <a
            href={images[index].codeGit}
            target="_blank"
            className="gallery-info-links"
            rel="noreferrer"
          >
            <IoLogoGithub />
          </a>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray('.gallery-item-wrapper');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          trigger: ref.current,
          scroller: '#main-container',
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section
      data-scroll-section
      className="section-wrapper gallery-wrap"
      id="gallery"
    >
      <div className="gallery" ref={ref}>
        <SectionHeader title="Gallery" />
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
