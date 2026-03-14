// Mock API data for dynamic content
export const mockAPI = {
  // Website Banner Data - 3 Slides for Carousel
  bannerSlides: [
    {
      headline: "FUTURE-PROOF YOUR BUSINESS WITH ELITE WEB SOLUTIONS",
      subheadline: "We build high-performance websites and custom apps turn small businesses into local legends",
      buttons: [
        { text: "Launch Your Project", primary: true },
        { text: "View Our Work", primary: false }
      ]
    },
    {
      headline: "TRANSFORM YOUR DIGITAL PRESENCE WITH CUTTING-EDGE TECHNOLOGY",
      subheadline: "Leverage the latest tech stacks to create innovative digital experiences that drive growth",
      buttons: [
        { text: "Launch Your Project", primary: true },
        { text: "View Our Work", primary: false }
      ]
    },
    {
      headline: "GROW YOUR BUSINESS WITH CUSTOM WEB & MOBILE SOLUTIONS",
      subheadline: "Scalable applications and websites designed to evolve with your business needs",
      buttons: [
        { text: "Launch Your Project", primary: true },
        { text: "View Our Work", primary: false }
      ]
    }
  ],

  // Services Data - Enhanced with additional services
  services: [
    {
      icon: "Zap",
      title: "Custom Web Design",
      description: "Not just templates. Unique digital identities that convert visitors into customers.",
      features: ["Responsive Design", "UX Optimization", "Brand Integration"]
    },
    {
      icon: "Settings",
      title: "Scalable Web Apps",
      description: "Internal tools & customer portals built to grow as you do.",
      features: ["Custom Architecture", "Cloud Integration", "API Development"]
    },
    {
      icon: "BarChart3",
      title: "SEO & Optimization",
      description: "Lightning-fast load speeds and top-tier Google rankings.",
      features: ["Page Speed Optimization", "SEO Strategy", "Analytics Setup"]
    },
    {
      icon: "Smartphone",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS Development", "Android Development", "Cross-Platform Solutions"]
    },
    {
      icon: "Brain",
      title: "AI Integration",
      description: "Smart solutions with chatbots and automated workflows.",
      features: ["Chatbot Development", "Process Automation", "Data Analytics"]
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
    vision: "To become the trusted digital partner for businesses looking to thrive in the digital age.",
    values: [
      {
        title: "Innovation",
        description: "We embrace cutting-edge technology and creative solutions to solve complex business challenges.",
        icon: "Lightbulb"
      },
      {
        title: "Integrity",
        description: "We build lasting relationships through transparency, honesty, and ethical business practices.",
        icon: "Shield"
      },
      {
        title: "Excellence",
        description: "We deliver exceptional quality in every project, exceeding expectations and setting industry standards.",
        icon: "Award"
      },
      {
        title: "Collaboration",
        description: "We work closely with clients as partners, ensuring their vision becomes our shared success.",
        icon: "Users"
      }
    ]
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

  // Why Choose Us Data
  whyChooseUs: [
    {
      title: "Expert Team",
      description: "10+ years of combined experience in web development",
      icon: "Users"
    },
    {
      title: "Custom Solutions",
      description: "No templates - everything built from scratch",
      icon: "Code"
    },
    {
      title: "Fast Delivery",
      description: "Average project completion in 4-6 weeks",
      icon: "Clock"
    },
    {
      title: "Ongoing Support",
      description: "24/7 maintenance and updates",
      icon: "Headphones"
    },
    {
      title: "Proven Results",
      description: "200+ successful projects across industries",
      icon: "TrendingUp"
    }
  ],

  // Portfolio Data
  portfolio: [
    {
      title: "E-commerce Platform for Retail Store",
      description: "Modern online shopping experience with inventory management",
      image: "/images/ecommerce-platform.jpg",
      tech: "React, Node.js, MongoDB, Stripe API",
      category: "E-commerce"
    },
    {
      title: "Healthcare Management System",
      description: "Patient management system with appointment scheduling",
      image: "/images/healthcare-system.jpg",
      tech: "Vue.js, Python, PostgreSQL, HIPAA Compliance",
      category: "Healthcare"
    },
    {
      title: "Real Estate Mobile App",
      description: "Property listing and virtual tour mobile application",
      image: "/images/real-estate-app.jpg",
      tech: "React Native, Firebase, Google Maps API",
      category: "Mobile App"
    },
    {
      title: "Restaurant Booking System",
      description: "Online reservation and table management system",
      image: "/images/restaurant-booking.jpg",
      tech: "Next.js, Express, MySQL, Payment Gateway",
      category: "Food & Beverage"
    },
    {
      title: "Educational Platform",
      description: "Online learning management system with video streaming",
      image: "/images/educational-platform.jpg",
      tech: "Angular, Django, AWS, Video CDN",
      category: "Education"
    }
  ],

  // Footer Data
  footer: {
    company: {
      name: "APEX DIGITAL SYSTEMS",
      address: "123 Tech Street, Digital City, DC 12345",
      phone: "+1 (555) 123-4567",
      email: "info@apexdigital.com"
    },
    quickLinks: [
      { text: "Services", href: "#services" },
      { text: "About Us", href: "#about" },
      { text: "Portfolio", href: "#portfolio" },
      { text: "Contact", href: "#contact" }
    ],
    socialMedia: [
      { name: "LinkedIn", url: "https://linkedin.com/company/apexdigital" },
      { name: "Twitter", url: "https://twitter.com/apexdigital" },
      { name: "Facebook", url: "https://facebook.com/apexdigital" },
      { name: "Instagram", url: "https://instagram.com/apexdigital" }
    ],
    copyright: "© 2024 APEX DIGITAL SYSTEMS. All rights reserved."
  },

  // Form Data
  contactForm: {
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "projectType", label: "Project Type", type: "select", required: true, options: ["Website Development", "Mobile App Development", "E-commerce Solution", "SEO Services", "AI Integration", "Other"] },
      { name: "message", label: "Project Details", type: "textarea", required: false }
    ],
    calendlyUrl: "https://calendly.com/your-calendly-link",
    buttonText: "Book a 15-minute Discovery Call"
  }
};
