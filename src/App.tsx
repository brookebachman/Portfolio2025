import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;