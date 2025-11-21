import React from 'react';
import { Bed, Utensils, BookOpen, FlaskConical, Monitor, Flower2 } from 'lucide-react';
import { Facility } from '../types';

export const Facilities: React.FC = () => {
  const facilities: Facility[] = [
    {
      title: "Smart Classrooms",
      description: "Equipped with projectors and tablets. Learning is enhanced via Khan Academy and Embibe platforms.",
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      image: "https://picsum.photos/400/300?random=1"
    },
    {
      title: "Laboratories",
      description: "Fully equipped Physics, Chemistry, and Biology labs for practical scientific learning.",
      icon: <FlaskConical className="w-8 h-8 text-purple-600" />,
      image: "https://picsum.photos/400/300?random=2"
    },
    {
      title: "Library",
      description: "A rich collection of books to foster reading habits and knowledge expansion among students.",
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      image: "https://picsum.photos/400/300?random=3"
    },
    {
      title: "Hostel & Boarding",
      description: "Residential capacity for 490 students providing a secure and home-like environment.",
      icon: <Bed className="w-8 h-8 text-indigo-600" />,
      image: "https://picsum.photos/400/300?random=4"
    },
    {
      title: "Mess & Nutrition",
      description: "Nutritious, varied meals managed by a specific committee ensuring health and hygiene.",
      icon: <Utensils className="w-8 h-8 text-green-600" />,
      image: "https://picsum.photos/400/300?random=5"
    },
    {
      title: "Yoga & Environment",
      description: "Daily morning yoga sessions and regular tree plantation drives for holistic development.",
      icon: <Flower2 className="w-8 h-8 text-teal-600" />,
      image: "https://picsum.photos/400/300?random=6"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hindi-text">सुविधाएँ (Facilities)</h2>
          <div className="h-1 w-24 bg-orange-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide state-of-the-art infrastructure to support both academic and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md backdrop-blur-sm">
                  {facility.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};