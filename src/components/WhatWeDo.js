import React from "react";
import { mockAPI } from "../data/mockData";
import * as Icons from "lucide-react";

const WhatWeDo = () => {
  const services = mockAPI.services;

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8 text-white" /> : null;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            WHAT WE <span className="text-apex-blue">DO</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to transform your business and accelerate growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-apex-dark border border-gray-800 rounded-lg p-8 hover:border-apex-blue transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-apex-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-apex-blue rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <button className="mt-6 text-apex-blue hover:text-white font-semibold transition-colors flex items-center">
                Learn More
                <Icons.ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
