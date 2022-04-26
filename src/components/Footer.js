import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Contact" />
      <div className="getintouch">
        <h1 className="getintouch-text">Get In Touch</h1>
        <button className="downloadCv">Download CV +</button>
        <div className="linksContact">
          <a href="https://facebook.com/maricabogdann">
            <FaFacebook />
          </a>
          <a href="https://github.com/maricabogdan">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/maricabogdan">
            <FaLinkedin />
          </a>
          <a href="mailto:marickbogdan@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <h6 className="copyright">Copyright &copy; {date}</h6>
      </div>
    </section>
  );
};

export default Footer;
