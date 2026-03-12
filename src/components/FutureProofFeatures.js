import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const FutureProofFeatures = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-16">
          FUTURE-PROOF FEATURES
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Form */}
          <div className="bg-apex-dark border border-gray-800 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-apex-blue transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-apex-blue transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-apex-blue hover:bg-blue-400 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Book a 15-minute Discovery Call
              </button>
            </form>
          </div>
          
          {/* Middle - Quote */}
          <div className="bg-apex-dark border border-gray-800 rounded-lg p-8 flex flex-col justify-center">
            <Quote className="w-12 h-12 text-apex-blue mb-6" />
            <p className="text-gray-300 leading-relaxed text-lg">
              "We believe small businesses the backbone of the economy. Our mission to give you the same digital tools as the tech giants, without corporate price tag."
            </p>
          </div>
          
          {/* Right Side - CTA Text */}
          <div className="bg-apex-dark border border-gray-800 rounded-lg p-8 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              STOP LOSING LEADS TO OUTDATED TECH.
            </h3>
            <p className="text-xl text-apex-blue font-bold">
              LET'S TALK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureProofFeatures;
