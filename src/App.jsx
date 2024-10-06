import React from 'react';
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection'; 
import AboutSection from './components/AboutSection'; 
import ProjectsSection from './components/ProjectsSection'; 
import ContactSection from './components/ContactSection'; 
import Footer from './components/Footer'; 
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
