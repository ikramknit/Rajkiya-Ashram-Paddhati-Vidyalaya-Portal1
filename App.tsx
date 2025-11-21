import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Admissions } from './components/Admissions';
import { Facilities } from './components/Facilities';
import { Stats } from './components/Stats';
import { Staff } from './components/Staff';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Admissions />
        <Facilities />
        <Stats />
        <Staff />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;