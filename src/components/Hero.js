import React, { useState, useEffect } from "react";
import { mockAPI } from "../data/mockData";

const Hero = () => {
  const [bannerData, setBannerData] = useState(null);

  // Simulate API call
  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setBannerData(mockAPI.banner);
    }, 500);
  }, []);

  if (!bannerData) {
    return (
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-96">
            <div className="text-white text-xl">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="home"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {bannerData.headline.split("WITH")[0]}WITH
              <br />
              <span className="text-apex-blue">
                {bannerData.headline.split("WITH")[1]}
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              {bannerData.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {bannerData.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`${
                    button.primary
                      ? "bg-apex-blue hover:bg-blue-400 text-white"
                      : "bg-transparent border-2 border-apex-blue text-apex-blue hover:bg-apex-blue hover:text-white"
                  } px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105 text-center`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Brain Graphic */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 brain-graphic rounded-full flex items-center justify-center">
              {/* Brain Network Visualization */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                {/* Central Hub */}
                <circle
                  cx="200"
                  cy="200"
                  r="10"
                  fill="#00D4FF"
                  className="glow-effect"
                />

                {/* Primary Nodes */}
                <circle cx="160" cy="160" r="7" fill="#00D4FF" opacity="0.9" />
                <circle cx="240" cy="160" r="7" fill="#00D4FF" opacity="0.9" />
                <circle cx="160" cy="240" r="7" fill="#00D4FF" opacity="0.9" />
                <circle cx="240" cy="240" r="7" fill="#00D4FF" opacity="0.9" />

                {/* Secondary Nodes */}
                <circle cx="130" cy="130" r="5" fill="#00D4FF" opacity="0.8" />
                <circle cx="270" cy="130" r="5" fill="#00D4FF" opacity="0.8" />
                <circle cx="130" cy="270" r="5" fill="#00D4FF" opacity="0.8" />
                <circle cx="270" cy="270" r="5" fill="#00D4FF" opacity="0.8" />
                <circle cx="200" cy="140" r="5" fill="#00D4FF" opacity="0.8" />
                <circle cx="200" cy="260" r="5" fill="#00D4FF" opacity="0.8" />
                <circle cx="140" cy="200" r="5" fill="#00D4FF" opacity="0.8" />
                <circle cx="260" cy="200" r="5" fill="#00D4FF" opacity="0.8" />

                {/* Tertiary Nodes */}
                <circle cx="110" cy="110" r="4" fill="#00D4FF" opacity="0.7" />
                <circle cx="290" cy="110" r="4" fill="#00D4FF" opacity="0.7" />
                <circle cx="110" cy="290" r="4" fill="#00D4FF" opacity="0.7" />
                <circle cx="290" cy="290" r="4" fill="#00D4FF" opacity="0.7" />
                <circle cx="200" cy="110" r="4" fill="#00D4FF" opacity="0.7" />
                <circle cx="200" cy="290" r="4" fill="#00D4FF" opacity="0.7" />
                <circle cx="110" cy="200" r="4" fill="#00D4FF" opacity="0.7" />
                <circle cx="290" cy="200" r="4" fill="#00D4FF" opacity="0.7" />

                {/* Small Neural Nodes */}
                <circle cx="150" cy="120" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="250" cy="120" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="150" cy="280" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="250" cy="280" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="120" cy="150" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="280" cy="150" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="120" cy="250" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="280" cy="250" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="170" cy="170" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="230" cy="170" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="170" cy="230" r="3" fill="#00D4FF" opacity="0.6" />
                <circle cx="230" cy="230" r="3" fill="#00D4FF" opacity="0.6" />

                {/* Micro Nodes */}
                <circle cx="135" cy="165" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="265" cy="165" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="135" cy="235" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="265" cy="235" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="165" cy="135" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="235" cy="135" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="165" cy="265" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="235" cy="265" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="185" cy="185" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="215" cy="185" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="185" cy="215" r="2" fill="#00D4FF" opacity="0.5" />
                <circle cx="215" cy="215" r="2" fill="#00D4FF" opacity="0.5" />

                {/* Neural Connections - Main Hub */}
                <line
                  x1="200"
                  y1="200"
                  x2="160"
                  y2="160"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  opacity="0.7"
                />
                <line
                  x1="200"
                  y1="200"
                  x2="240"
                  y2="160"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  opacity="0.7"
                />
                <line
                  x1="200"
                  y1="200"
                  x2="160"
                  y2="240"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  opacity="0.7"
                />
                <line
                  x1="200"
                  y1="200"
                  x2="240"
                  y2="240"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  opacity="0.7"
                />

                {/* Primary Connections */}
                <line
                  x1="160"
                  y1="160"
                  x2="130"
                  y2="130"
                  stroke="#00D4FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="240"
                  y1="160"
                  x2="270"
                  y2="130"
                  stroke="#00D4FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="160"
                  y1="240"
                  x2="130"
                  y2="270"
                  stroke="#00D4FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="240"
                  y1="240"
                  x2="270"
                  y2="270"
                  stroke="#00D4FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="160"
                  y1="160"
                  x2="140"
                  y2="200"
                  stroke="#00D4FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="240"
                  y1="160"
                  x2="260"
                  y2="200"
                  stroke="#00D4FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="160"
                  y1="240"
                  x2="140"
                  y2="200"
                  stroke="#00D4FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="240"
                  y1="240"
                  x2="260"
                  y2="200"
                  stroke="#00D4FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />

                {/* Secondary Connections */}
                <line
                  x1="130"
                  y1="130"
                  x2="110"
                  y2="110"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1="270"
                  y1="130"
                  x2="290"
                  y2="110"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1="130"
                  y1="270"
                  x2="110"
                  y2="290"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1="270"
                  y1="270"
                  x2="290"
                  y2="290"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  opacity="0.5"
                />

                {/* Cross Connections */}
                <line
                  x1="160"
                  y1="160"
                  x2="240"
                  y2="160"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  opacity="0.4"
                />
                <line
                  x1="160"
                  y1="240"
                  x2="240"
                  y2="240"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  opacity="0.4"
                />
                <line
                  x1="130"
                  y1="130"
                  x2="270"
                  y2="130"
                  stroke="#00D4FF"
                  strokeWidth="0.8"
                  opacity="0.3"
                />
                <line
                  x1="130"
                  y1="270"
                  x2="270"
                  y2="270"
                  stroke="#00D4FF"
                  strokeWidth="0.8"
                  opacity="0.3"
                />

                {/* Neural Pathways */}
                <line
                  x1="150"
                  y1="120"
                  x2="170"
                  y2="170"
                  stroke="#00D4FF"
                  strokeWidth="0.8"
                  opacity="0.4"
                />
                <line
                  x1="250"
                  y1="120"
                  x2="230"
                  y2="170"
                  stroke="#00D4FF"
                  strokeWidth="0.8"
                  opacity="0.4"
                />
                <line
                  x1="150"
                  y1="280"
                  x2="170"
                  y2="230"
                  stroke="#00D4FF"
                  strokeWidth="0.8"
                  opacity="0.4"
                />
                <line
                  x1="250"
                  y1="280"
                  x2="230"
                  y2="230"
                  stroke="#00D4FF"
                  strokeWidth="0.8"
                  opacity="0.4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
