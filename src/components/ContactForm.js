import React, { useState } from 'react';
import { mockAPI } from '../data/mockData';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
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
    alert('Thank you for your interest! We will contact you soon.');
  };

  const handleCalendlyClick = () => {
    // Open Calendly link in new tab
    window.open(mockAPI.contactForm.calendlyUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            GET <span className="text-apex-blue">STARTED</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            STOP LOSING LEADS TO OUTDATED TECH. LET'S TALK
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {mockAPI.contactForm.fields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-2">
                    {field.label}
                  </label>
                  
                  {field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-apex-blue transition-colors"
                      required={field.required}
                    >
                      <option value="">Select a project type</option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-apex-blue transition-colors resize-none"
                      placeholder="Tell us about your project..."
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-apex-blue transition-colors"
                      placeholder={field.type === 'email' ? 'your@email.com' : `Your ${field.label.toLowerCase()}`}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
              
              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full bg-apex-blue hover:bg-blue-400 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Send Message
                </button>
                
                <button
                  type="button"
                  onClick={handleCalendlyClick}
                  className="w-full bg-transparent border-2 border-apex-blue text-apex-blue hover:bg-apex-blue hover:text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  {mockAPI.contactForm.buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
