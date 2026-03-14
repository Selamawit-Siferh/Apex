import React from 'react';
import { mockAPI } from '../data/mockData';
import { Target, Eye, Quote, Lightbulb, Shield, Award, Users } from 'lucide-react';

const AboutUs = () => {
  const getValueIcon = (iconName) => {
    switch (iconName) {
      case "Lightbulb":
        return <Lightbulb className="w-6 h-6 text-white" />;
      case "Shield":
        return <Shield className="w-6 h-6 text-white" />;
      case "Award":
        return <Award className="w-6 h-6 text-white" />;
      case "Users":
        return <Users className="w-6 h-6 text-white" />;
      default:
        return <Lightbulb className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-white text-center mb-16">
          ABOUT <span className="text-apex-blue">US</span>
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

        {/* Our Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Our <span className="text-apex-blue">Values</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The core principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockAPI.about.values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:border-apex-blue transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-apex-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  {getValueIcon(value.icon)}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
