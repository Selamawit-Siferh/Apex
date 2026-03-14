import React, { useState } from "react";
import { mockAPI } from "../data/mockData";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const portfolio = mockAPI.portfolio;
  
  const categories = ["All", ...new Set(portfolio.map(project => project.category))];
  
  const filteredProjects = activeFilter === "All" 
    ? portfolio 
    : portfolio.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="text-apex-blue">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === category
                  ? "bg-apex-blue text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-apex-blue transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-apex-blue to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-sm">Project Preview</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-apex-blue font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-apex-blue hover:bg-blue-400 text-white py-2 rounded-md font-semibold transition-colors">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
