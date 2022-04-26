import React, { useEffect, useRef, useState } from 'react';
import AboutSection from './components/AboutSection';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import MainSection from './components/MainSection';
import useLocoScroll from './hooks/useLocoScroll';
import './scss/main.css';

function App() {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>BOGDAN.MARICA</h1>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Header />
          <MainSection />
          <FeaturedSection />
          <AboutSection />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
