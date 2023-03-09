import homepic from '../images/homepic.jpg';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import resume from '../pages/about/Daniel-Jordan-Resume.pdf';

const AboutMe = ({ name, email, location, availability, brand, brand2 }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Daniel-Jordan-Resume.pdf';
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="aboutContainer container">
      <div className="column container">
        <motion.div
          className="personalImage col-12"
          ref={ref}
          initial={{ x: '-10vw', opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: '-10vw', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <img src={homepic} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12"
          ref={ref}
          initial={{ x: '10vw', opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: '10vw', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <div className="contentContainer">
            <h5 style={{ textAlign: 'center' }}>
              Motivated Web Developer that is new to the field, but not new to
              hard work, excellence, versatility, innovation, and
              problem-solving.
            </h5>
            <div className="contentDescription">
              <p>{brand}</p>
              <br />
              <p>{brand2}</p>
            </div>
            <div className="buttonContainer">
              <button
                className="btn downloadCV"
                onClick={handleDownload}
                disabled={downloading}
              >
                {downloading ? 'Downloading...' : 'Download Resume'}
              </button>{' '}
            </div>
            <SocialIcons />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
