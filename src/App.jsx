import React from 'react';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Partners from './components/Partners';

const App = () => {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <Banner />
      <Features />
      <Partners />
      <Contact />
    </main>
    <Footer />
    </>
  )
};

export default App;