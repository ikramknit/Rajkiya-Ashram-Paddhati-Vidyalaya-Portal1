import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-orange-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 hindi-text">राजकीय आश्रम पद्धति विद्यालय</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Operated by the Social Welfare Department, Uttar Pradesh, Lucknow. Dedicated to providing quality education and a bright future for all students.
            </p>
            <span className="text-orange-500 font-bold text-sm">Affiliated to CBSE Board</span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#results" className="hover:text-orange-500 transition-colors">Results</a></li>
              <li><a href="#facilities" className="hover:text-orange-500 transition-colors">Facilities</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-orange-500 flex-shrink-0" />
                <span>District Bindoli, Nangal,<br/>Saharanpur, Uttar Pradesh</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-orange-500 flex-shrink-0" />
                <span>+91 123-456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-orange-500 flex-shrink-0" />
                <span>info@rapvsaharanpur.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rajkiya Ashram Paddhati Vidyalaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};