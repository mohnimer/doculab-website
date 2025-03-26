import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Menu, X, ChevronDown, ChevronUp, Send, FileCheck, Building2, Users, Clock, ArrowRight, Mail, Shield, CheckCircle2, Briefcase, FileText, BarChart3, CircleDot } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.03,
    y: -5,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut"
    }
  }
};

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the visa renewal process take?",
      answer: "Typically, visa renewals are processed within 3-5 working days, depending on the type of visa and documentation completeness."
    },
    {
      question: "What documents do I need for trade license renewal?",
      answer: "Required documents include your existing trade license, passport copies of shareholders, tenancy contract, and other specific documents based on your business activity."
    },
    {
      question: "Can Doculab handle multiple business locations?",
      answer: "Yes, we can manage compliance and documentation for businesses with multiple branches or locations across the UAE."
    },
    {
      question: "What sets Doculab apart from traditional PRO services?",
      answer: "Unlike typing centers, we're fully digital and proactive. Our platform automates document tracking, sends renewal reminders, and provides real-time status updates—all without you leaving your office."
    }
  ];

  const services = [
    {
      title: "Visa Renewals",
      icon: <Users className="w-12 h-12 text-primary" />,
      description: "Automated visa tracking and renewal management for your entire team."
    },
    {
      title: "Trade License Management",
      icon: <Building2 className="w-12 h-12 text-primary" />,
      description: "Proactive license monitoring and hassle-free renewals across all UAE jurisdictions."
    },
    {
      title: "Corporate Compliance",
      icon: <Shield className="w-12 h-12 text-primary" />,
      description: "Stay compliant with automated document tracking and timely alerts."
    }
  ];

  const steps = [
    {
      title: "Submit Details",
      icon: <Send className="w-8 h-8 text-primary" />,
      description: "Share your business information and compliance needs"
    },
    {
      title: "Digital Upload",
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      description: "Upload documents through our secure platform"
    },
    {
      title: "Smart Processing",
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      description: "Our system processes and validates your documents"
    },
    {
      title: "Auto Renewals",
      icon: <Clock className="w-8 h-8 text-primary" />,
      description: "Receive alerts and handle renewals digitally"
    }
  ];

  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Business Setup",
      description: "Streamlined company formation and licensing"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Document Management",
      description: "Centralized storage and tracking"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Analytics Dashboard",
      description: "Real-time compliance monitoring"
    },
    {
      icon: <CircleDot className="w-8 h-8 text-primary" />,
      title: "Automated Alerts",
      description: "Never miss a renewal deadline"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-public-sans">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-primary">Doculab</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#home" className="text-text-body hover:text-primary transition-all">Home</a>
              <a href="#services" className="text-text-body hover:text-primary transition-all">Services</a>
              <a href="#how-it-works" className="text-text-body hover:text-primary transition-all">How It Works</a>
              <a href="#about" className="text-text-body hover:text-primary transition-all">About Us</a>
              <a href="#faqs" className="text-text-body hover:text-primary transition-all">FAQs</a>
              <motion.button 
                className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-xl font-semibold transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-body hover:text-primary transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-text-body hover:text-primary transition-all">Home</a>
                <a href="#services" className="block px-3 py-2 text-text-body hover:text-primary transition-all">Services</a>
                <a href="#how-it-works" className="block px-3 py-2 text-text-body hover:text-primary transition-all">How It Works</a>
                <a href="#about" className="block px-3 py-2 text-text-body hover:text-primary transition-all">About Us</a>
                <a href="#faqs" className="block px-3 py-2 text-text-body hover:text-primary transition-all">FAQs</a>
                <a href="#contact" className="block px-3 py-2 bg-accent text-white rounded-xl text-center">Contact Us</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-hero-pattern relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              variants={staggerChildren}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-text-heading mb-8 leading-tight"
                variants={fadeInUp}
              >
                Effortless Compliance for UAE Businesses
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-text-body mb-12 leading-relaxed font-inter"
                variants={fadeInUp}
              >
                One dashboard to manage your business documents, employee renewals, and trade licenses.
              </motion.p>
              <motion.button
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(204, 78, 58, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Compliance Review
              </motion.button>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <motion.div variants={staggerChildren}>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center text-text-heading mb-6"
                variants={fadeInUp}
              >
                Our Services
              </motion.h2>
              <motion.p 
                className="text-xl text-text-body text-center mb-16 max-w-2xl mx-auto font-inter"
                variants={fadeInUp}
              >
                Streamline your business compliance with our digital-first approach
              </motion.p>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-background p-10 rounded-2xl transition-all relative group"
                    initial="rest"
                    whileHover="hover"
                    variants={cardHover}
                    onHoverStart={() => setHoveredService(index)}
                    onHoverEnd={() => setHoveredService(null)}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-primary/5 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredService === index ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="relative">
                      <motion.div 
                        className="mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-2xl font-semibold text-text-heading mb-4">{service.title}</h3>
                      <p className="text-text-body leading-relaxed font-inter">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-section bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <motion.div variants={staggerChildren}>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center text-text-heading mb-6"
                variants={fadeInUp}
              >
                How It Works
              </motion.h2>
              <motion.p 
                className="text-xl text-text-body text-center mb-16 max-w-2xl mx-auto font-inter"
                variants={fadeInUp}
              >
                Four simple steps to streamline your business compliance
              </motion.p>
              <div className="grid md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-card"
                      whileHover={{ scale: 1.1, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-text-heading mb-3">{step.title}</h3>
                    <p className="text-text-body leading-relaxed font-inter">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={staggerChildren}>
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-text-heading mb-6"
                  variants={fadeInUp}
                >
                  About Doculab
                </motion.h2>
                <motion.p 
                  className="text-xl text-text-body leading-relaxed mb-8 font-inter"
                  variants={fadeInUp}
                >
                  We are not a typing center. We are your digital compliance team.
                </motion.p>
                <motion.p 
                  className="text-lg text-text-body leading-relaxed mb-8 font-inter"
                  variants={fadeInUp}
                >
                  Doculab revolutionizes business compliance in the UAE by combining cutting-edge technology with expert knowledge. 
                  Our platform automates document tracking, sends renewal reminders, and provides real-time status updates—all without 
                  you leaving your office.
                </motion.p>
                <motion.div 
                  className="grid grid-cols-2 gap-6"
                  variants={staggerChildren}
                >
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start space-x-4"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h4 className="font-semibold text-text-heading mb-1">{feature.title}</h4>
                        <p className="text-sm text-text-body font-inter">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2940&auto=format&fit=crop"
                  alt="Business Dashboard"
                  className="rounded-2xl shadow-lg object-cover w-full h-[600px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-section bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <motion.div variants={staggerChildren}>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center text-text-heading mb-6"
                variants={fadeInUp}
              >
                Common Questions
              </motion.h2>
              <motion.p 
                className="text-xl text-text-body text-center mb-16 max-w-2xl mx-auto font-inter"
                variants={fadeInUp}
              >
                Everything you need to know about our services
              </motion.p>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                    initial={false}
                    animate={{ height: "auto" }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <motion.button
                      className="w-full px-8 py-6 text-left flex justify-between items-center"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      whileHover={{ backgroundColor: "rgba(122, 139, 156, 0.05)" }}
                    >
                      <span className="font-semibold text-text-heading">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary" />
                        )}
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-8 py-6 border-t border-gray-100 bg-background/50"
                        >
                          <p className="text-text-body leading-relaxed font-inter">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center text-text-heading mb-6"
                variants={fadeInUp}
              >
                Get Started
              </motion.h2>
              <motion.p 
                className="text-xl text-text-body text-center mb-16 max-w-2xl mx-auto font-inter"
                variants={fadeInUp}
              >
                Ready to streamline your business compliance? Let's talk.
              </motion.p>
              <motion.form 
                className="space-y-6"
                variants={staggerChildren}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-medium text-text-heading mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-medium text-text-heading mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-text-heading mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option>Visa Services</option>
                    <option>Trade License</option>
                    <option>Corporate Compliance</option>
                    <option>Other</option>
                  </select>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-text-heading mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Tell us about your needs..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white px-6 py-4 rounded-xl font-semibold transition-all"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(204, 78, 58, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold text-text-heading mb-6">Doculab</h4>
              <p className="text-text-body leading-relaxed mb-6 font-inter">
                Your trusted partner for business compliance in the UAE. We make document management effortless.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold text-text-heading mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-text-body hover:text-primary transition-all">Services</a></li>
                <li><a href="#how-it-works" className="text-text-body hover:text-primary transition-all">How It Works</a></li>
                <li><a href="#about" className="text-text-body hover:text-primary transition-all">About Us</a></li>
                <li><a href="#contact" className="text-text-body hover:text-primary transition-all">Contact</a></li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold text-text-heading mb-6">Contact</h4>
              <ul className="space-y-4 text-text-body font-inter">
                <li className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span>Dubai, UAE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@doculab.ae</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div 
            className="border-t border-gray-200 mt-12 pt-8 text-center text-text-body"
            variants={fadeInUp}
          >
            <p className="font-inter">&copy; {new Date().getFullYear()} Doculab. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;