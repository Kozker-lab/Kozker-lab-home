'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowRight, BarChart2, Zap, Layers, TrendingUp, ChevronDown, Menu, X, BlocksIcon } from 'lucide-react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import {Button, buttonVariants} from '@/components/ui/button'

const data = [
  { name: 'Jan', value: 1000 },
  { name: 'Feb', value: 2000 },
  { name: 'Mar', value: 3000 },
  { name: 'Apr', value: 2500 },
  { name: 'May', value: 4000 },
  { name: 'Jun', value: 5000 },
];

// Smooth scroll function
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['solutions', 'industries', 'about', 'contact', 'calculator'];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-indigo-600' : 'text-white'}`}>Kozker Tech</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    scrolled
                      ? 'text-gray-700 hover:text-indigo-600'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${scrolled ? 'bg-white' : 'bg-indigo-900'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                scrollTo(item);
                setIsOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                scrolled
                  ? 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'
                  : 'text-white hover:text-white hover:bg-indigo-800'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};


const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '50%']);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative h-screen flex items-center text-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                speed: 1,
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.2,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.0,
              width: 0.0,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 90,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.2, max: 1 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      />
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://i.ibb.co/xshT0cX/milad-fakurian-n-Y14-Fs8px-T8-unsplash.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y
        }}
      />
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 max-w-7xl"
        >
                Transform Complex Data into Actionable Intelligence
                </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-6xl mx-auto"
        >
                Boost ROI by 30% with our cutting-edge data solutions. We deliver customized AI-automation, Business Intelligence and Analytics solutions that drive smarter decisions and measurable results.
        </motion.p>

       {/* Stack bottons one by one */}
       <div className="flex justify-center mt-8 space-x-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-s-slate-100 hover:bg-slate-900 py-3 px-6 text-md hover:text-indigo-500 font-bold rounded-sm">
                     Get Started!   </motion.button>
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-s-white py-3 px-6 text-md hover:bg-white  hover:text-slate-600 font-semibold rounded-sm">
            Schedule a Demo 
        </motion.button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={40} className="text-white animate-bounce" />
      </motion.div>
    </div>
  );
};

const cta1 = () => {
  return (
    <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                >
                <h2 className="text-3xl font-bold mb-4 md:text-4xl">Ready to unlock the power of your data?</h2>
                <Button 
                    className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-3 rounded-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => setIsFormOpen(true)}
                >
                    Get A Free Assessment
                </Button>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Get a complete assessment of your company with a detailed blueprint, ROI projection, and tailored recommendations.</p>
                </motion.div>
            </div>
     </div>
  );
};

const Feature = ({ icon: Icon, title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="bg-indigo-100 p-3 rounded-full mb-4"
      >
        <Icon className="h-8 w-8 text-indigo-600" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features = () => (
  <section id="solutions" className="py-20 bg-violet-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >Why Kozker?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Feature
          icon={BarChart2}
          title="Advanced Analytics Powered by Data"
          description="Turn raw data into actionable intelligence in minutes, not days. Our AI algorithms process vast amounts of information to identify trends, patterns, and opportunities you might miss."
        />
        <Feature
          icon={Zap}
          title="Real-time Processing"
          description="Make informed decisions with up-to-the-minute data analysis."
        />
        <Feature
          icon={BlocksIcon}
          title="Multi-source Integration"
          description="Worried about complex implementation? Don't be. Kozker Tech integrates smoothly with your existing systems, requiring minimal IT resources and causing zero disruption to your operations."
        />
        <Feature
            icon={ArrowRight}
            title="Real-Time Decision Support"
            description="Make informed decisions on the fly. Our real-time analytics provide up-to-the-minute insights, allowing you to respond quickly to market changes and emerging opportunities."
            />
        <Feature
            icon={Layers}
            title="Customized Solutions"
            description="Whether you're in retail, education, finance, or services, our platform adapts to your specific needs. No one-size-fits-all approach – just tailored insights that drive real results."
        />
        <Feature
            icon={TrendingUp}
            title="Measurable ROI"
            description="We're not just about flashy dashboards. Our solutions are designed to deliver tangible results. Track your ROI directly through our platform and see the impact on your bottom line."
        />
      </div>
    </div>
    
  </section>
);

const Industries = () => {
  const industries = ['Retail', 'Finance', 'Healthcare', 'Manufacturing'];
  return (
    <section id="industries" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Industries We Serve
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-800 p-6 rounded-lg text-center cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ROIChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-2xl font-semibold mb-4">Projected ROI Growth</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </motion.div>
);

const CTA = () => (
  <section id="contact" className="py-20 bg-gradient-to-r from-purple-700 to-indigo-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-4"
      >
        Ready to Transform Your Data?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl mb-8"
      >
        Get started with Kozker Tech today and unlock the full potential of your data.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-indigo-900 font-bold py-3 px-8 text-lg rounded-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
      >
        Get Free Assesment and Blueprint
      </motion.button>
    </div>
  </section>
);


const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div> 
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Analytics</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Data Integration</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Machine Learning</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Blog</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Whitepapers</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Webinars</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2024 Kozker Tech. All rights reserved.</p>
      </div>
    </div>
  </footer>
);


const Homepage2 = () => {
    return (
      <div className="font-sans">
        <Navbar />
        <Hero />
        <cta1 />
        <Features />
        <Industries />
        <section id="about" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12"
            >
              See the Impact
            </motion.h2>
            <ROIChart />
          </div>
        </section>
        <CTA />
        <Footer />
      </div>
    );
  };

export default Homepage2;