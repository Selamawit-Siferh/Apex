import React from 'react';
import { mockAPI } from '../data/mockData';
import { Target, Eye, Quote } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-16">
          ABOUT US
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Quote Section */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <Quote className="w-12 h-12 text-apex-blue mb-6" />
            <p className="text-gray-300 leading-relaxed text-lg">
              {mockAPI.about.tagline}
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-apex-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {mockAPI.about.mission}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-apex-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {mockAPI.about.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
