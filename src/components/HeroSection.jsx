import React from 'react';
import { Canvas } from '@react-three/fiber';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        display: 'flex',
        justifyContent: 'center',  // İçeriği ortalamak için
        alignItems: 'center',
        height: '40vh',
        position: 'relative',
        padding: '0 20px', // Kenarlardan boşluk bırakma
      }}
    >
      <div
        className="hero-content"
        style={{
          width: '100%',  // Tüm genişliği kaplayacak şekilde ayarlama
          padding: '0 50px',  // Kenarlardan biraz boşluk bırakma
          textAlign: 'center',  // Tüm yazıları ortalama
        }}
      >
        <h1 className="hero-title" style={{ fontSize: '3rem', whiteSpace: 'nowrap' }}>Hi, I'm MaMi</h1>
        <p className="hero-subtitle" style={{ fontSize: '1.5rem', whiteSpace: 'nowrap' }}>
          Frontend Developer & Creative Designer
        </p>
        <a href="#projects" className="cta-button" style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
          View My Work
        </a>
      </div>
      <Canvas className="hero-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </section>
  );
};

export default HeroSection;
