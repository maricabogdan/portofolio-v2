import React from 'react';

import ImageDesktop from './images/ollie-website-featured.webp';
import VideoMobile from './images/ollie-website-mobile-featured.mp4';

const FeaturedSection = () => {
  return (
    <section className="featured-section" data-scroll-section id="featured">
      <div className="featured-row-layout">
        <h6>Mobile</h6>
        <video src={VideoMobile} autoPlay loop muted data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>Desktop</h6>
        <img src={ImageDesktop} alt data-scroll></img>
      </div>
    </section>
  );
};

export default FeaturedSection;
