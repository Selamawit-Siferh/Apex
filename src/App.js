import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import WhatWeDo from "./components/WhatWeDo";
import HowItWorks from "./components/HowItWorks";
import Portfolio from "./components/Portfolio";
import AboutUs from "./components/AboutUs";
import Proof from "./components/Proof";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-apex-dark">
      <Header />
      <Hero />
      <WhyChooseUs />
      <WhatWeDo />
      <HowItWorks />
      <Portfolio />
      <AboutUs />
      <Proof />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
