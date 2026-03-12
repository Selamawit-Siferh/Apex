import React from "react";
import { mockAPI } from "../data/mockData";
import { Phone, Code, Rocket } from "lucide-react";

const HowItWorks = () => {
  const iconMap = {
    Phone: Phone,
    Code: Code,
    Rocket: Rocket,
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="process">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-16">
          HOW IT WORKS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mockAPI.process.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={step.step} className="text-center space-y-6">
                {/* Step Number */}
                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-apex-blue rounded-full flex items-center justify-center text-white font-black text-2xl">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-apex-blue" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
