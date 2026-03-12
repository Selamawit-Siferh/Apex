import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/AboutUs";
import Proof from "./components/Proof";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-apex-dark">
      <Header />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <AboutUs />
      <Proof />
      <ContactForm />
    </div>
  );
}

export default App;
