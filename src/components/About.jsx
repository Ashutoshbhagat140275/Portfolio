import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';
import selfImg from '../assets/self_img.jpg'; // Ensure the image path is correct

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className={`about-container ${isVisible ? 'animate' : ''}`}>
        <div className="about-left">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I'm an <span className="highlight">AI/ML Developer</span> driven to build smart systems that can{' '}
            <em>understand</em> and <em>learn</em>. I love working with data and transforming it into actionable
            insights using technologies like <strong>Python, TensorFlow, and PyTorch</strong>. My mission is to create
            intelligent solutions that are impactful and meaningful.
          </p>
          <div className="skills">
            <span>Python</span>
            <span>Scikit-learn</span>
            <span>TensorFlow</span>
            <span>PyTorch</span>
            <span>Model Deployment</span>
          </div>
        </div>
        <div className="about-right">
          <img src={selfImg} alt="Ashutosh Bhagat" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;