import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleContactClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div>
      <Header onContactClick={handleContactClick} />
      <About />
      <Projects />
      <Contact isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      <Footer />
    </div>
  );
};

export default App;