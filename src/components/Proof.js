import React from 'react';
import { mockAPI } from '../data/mockData';
import { Smartphone, Shield, Brain } from 'lucide-react';

const Proof = () => {
  const iconMap = {
    Smartphone: Smartphone,
    Shield: Shield,
    Brain: Brain
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="proof">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-16">
          FUTURE-PROOF FEATURES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockAPI.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="bg-apex-dark border border-gray-800 rounded-lg p-8 hover:border-apex-blue transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-apex-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Proof;
