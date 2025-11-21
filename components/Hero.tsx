import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="School Building"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-orange-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-block mb-4 px-4 py-1 border border-white/30 rounded-full backdrop-blur-sm bg-white/10">
          <span className="uppercase text-xs tracking-widest font-semibold">Est. 2008</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight hindi-text">
          राजकीय आश्रम पद्धति विद्यालय
        </h1>
        <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-200">
          District Bindoli, Nangal, Saharanpur
        </h2>
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Empowering students through free holistic education, modern facilities, and a nurturing residential environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Discover More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};