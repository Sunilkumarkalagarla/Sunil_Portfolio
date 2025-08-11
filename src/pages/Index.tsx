
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import FeaturedWork from '../components/FeaturedWork';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen royal-background">
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <FeaturedWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
