import React from "react";
import { mockAPI } from "../data/mockData";
import * as Icons from "lucide-react";

const WhyChooseUs = () => {
  const reasons = mockAPI.whyChooseUs;

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="why-choose-us">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why Choose <span className="text-apex-blue">APEX</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions that drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-apex-blue transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-apex-blue mb-4">
                {getIcon(reason.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
