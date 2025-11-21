import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/400/500?random=10" 
                alt="Students in assembly" 
                className="rounded-lg shadow-lg w-full h-64 object-cover" 
              />
              <img 
                src="https://picsum.photos/400/500?random=11" 
                alt="School building" 
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" 
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 hindi-text">
              परिचय (Introduction)
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Construction of <strong className="text-gray-800">Rajkiya Ashram Paddhati Vidyalaya</strong>, Saharanpur began in 2008, and the school became fully operational in 2011.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The school has a total student capacity of <strong className="text-orange-600">490</strong>. We are dedicated to serving socially and economically underprivileged children from both rural and urban areas.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide completely <span className="underline decoration-orange-500 decoration-2">free education</span> along with free uniforms, residential accommodation, daily necessities, study materials, sports equipment, and computer facilities.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <span className="block text-3xl font-bold text-gray-800">490</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Student Capacity</span>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <span className="block text-3xl font-bold text-gray-800">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Free Education</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};