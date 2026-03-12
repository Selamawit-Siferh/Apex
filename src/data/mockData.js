// Mock API data for dynamic content
export const mockAPI = {
  // Website Banner Data
  banner: {
    headline: "FUTURE-PROOF YOUR BUSINESS WITH ELITE WEB SOLUTIONS",
    subheadline: "We build high-performance websites and custom apps turn small businesses into local legends",
    buttons: [
      { text: "Launch Your Project", primary: true },
      { text: "View Our Work", primary: false }
    ]
  },

  // Services Data
  services: [
    {
      icon: "Zap",
      title: "Custom Web Design",
      description: "Not just templates. Unique digital identities that convert visitors into customers."
    },
    {
      icon: "Settings",
      title: "Scalable Web Apps",
      description: "Internal tools & customer portals built to grow as you do."
    },
    {
      icon: "BarChart3",
      title: "SEO & Optimization",
      description: "Lightning-fast load speeds and top-tier Google rankings."
    }
  ],

  // How It Works Data
  process: [
    {
      step: 1,
      title: "Discovery",
      description: "We jump on a call to understand your goals and roadblocks",
      icon: "Phone"
    },
    {
      step: 2,
      title: "Development",
      description: "We build your digital engine using the latest tech stacks",
      icon: "Code"
    },
    {
      step: 3,
      title: "Deployment",
      description: "We launch, monitor, and provide 24/7 support",
      icon: "Rocket"
    }
  ],

  // About Us Data
  about: {
    tagline: "We believe small businesses are the backbone of the economy. Our mission is to give you the same digital firepower as the tech giants, without the corporate price tag.",
    mission: "To empower small businesses with cutting-edge digital solutions that drive growth and success.",
    vision: "To become the trusted digital partner for businesses looking to thrive in the digital age."
  },

  // Proof/Features Data
  features: [
    {
      title: "Mobile-First",
      description: "It looks perfect on every screen.",
      icon: "Smartphone"
    },
    {
      title: "Secure",
      description: "SSL, encryption, and data protection as standard.",
      icon: "Shield"
    },
    {
      title: "AI-Integrated",
      description: "Options for chatbots or automated workflows.",
      icon: "Brain"
    }
  ],

  // Form Data
  contactForm: {
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "projectType", label: "Project Type", type: "select", required: true, options: ["Web Design", "Web App", "SEO", "Other"] }
    ],
    calendlyUrl: "https://calendly.com/your-calendly-link",
    buttonText: "Book a 15-minute Discovery Call"
  }
};
