/*eslint-disable*/
'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart2, Zap, Layers, TrendingUp, Menu, X, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const data = [
  { name: 'Month 1', roi: 0 },
  { name: 'Month 2', roi: 0 },
  { name: 'Month 3', roi: 0.5 },
  { name: 'Month 4', roi: 1 },
  { name: 'Month 5', roi: 2 },
  { name: 'Month 6', roi: 4 },
  { name: 'Month 7', roi: 8 },
  { name: 'Month 8', roi: 16 },
  { name: 'Month 9', roi: 32 },
  { name: 'Month 10', roi: 64 },
  { name: 'Month 11', roi: 128 },
  { name: 'Month 12', roi: 256 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Solutions', 'Industries', 'About Us', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>Kozker Tech</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    scrolled
                      ? 'text-gray-700 hover:text-blue-900'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Feature = ({ title, description, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
  >
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center space-x-4">
        <Icon size={44} className="text-indigo-500 md:text-3xl lg:text-4xl" />
        <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded:", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#02091fff",
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
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
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
            opacity: 0.5,
            width: 1,
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
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
const AssessmentForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    employees: '',
    currentChallenges: '',
    dataUsage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission. We will get back to you shortly with your free assessment.');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Your Free Assessment</DialogTitle>
          <DialogDescription>
            Fill out this short form and get your customized assessment alongside a data strategy tailored to your business.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" value={formData.company} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="industry">Industry</Label>
            <Select name="industry" value={formData.industry} onValueChange={(value) => handleChange({ target: { name: 'industry', value } })}>
              <SelectTrigger>
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="employees">Number of Employees</Label>
            <Select name="employees" value={formData.employees} onValueChange={(value) => handleChange({ target: { name: 'employees', value } })}>
              <SelectTrigger>
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10</SelectItem>
                <SelectItem value="11-50">11-50</SelectItem>
                <SelectItem value="51-200">51-200</SelectItem>
                <SelectItem value="201-1000">201-1000</SelectItem>
                <SelectItem value="1000+">1000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="currentChallenges">Current Business Intelligence Challenges</Label>
            <Textarea id="currentChallenges" name="currentChallenges" value={formData.currentChallenges} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="dataUsage">How do you currently use data in decision making?</Label>
            <Textarea id="dataUsage" name="dataUsage" value={formData.dataUsage} onChange={handleChange} />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const Homepage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);
    
  return (
    <div className="font-sans text-slate-900 relative">
        <ParticleBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-800 bg-opacity-80 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl leading-tight">
                Transform Complex Data into Actionable Intelligence
              </h1>
              <p className="text-xl mb-8 md:text-2xl max-w-3xl mx-auto md:mx-0">
                Boost ROI by 30% with Kozker Tech's cutting-edge AI and advanced analytics. We deliver customized business intelligence solutions that drive smarter decisions and measurable results.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-12 py-6 transition-colors duration-300">
                  Get Started
                </Button>
                <Button className="bg-transparent hover:bg-white hover:text-indigo-900 text-white text-lg px-12 py-6 border border-white transition-colors duration-300">
                  Schedule a Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
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

        {/* Features and Objections */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="text-3xl font-bold mb-12 text-center md:text-4xl">Our Powerful Features</h2>
            <div className="flex flex-wrap -mx-4">
              <Feature
                icon={BarChart2}
                title="AI-Powered Analytics"
                description="Turn raw data into actionable intelligence in minutes, not days. Our AI algorithms process vast amounts of information to identify trends, patterns, and opportunities you might miss."
              />
              <Feature
                icon={Layers}
                title="Customized Solutions"
                description="Whether you're in retail, education, finance, or services, our platform adapts to your specific needs. No one-size-fits-all approach – just tailored insights that drive real results."
              />
              <Feature
                icon={Zap}
                title="Seamless Integration"
                description="Worried about complex implementation? Don't be. Kozker Tech integrates smoothly with your existing systems, requiring minimal IT resources and causing zero disruption to your operations."
              />
              <Feature
                icon={ArrowRight}
                title="Real-Time Decision Support"
                description="Make informed decisions on the fly. Our real-time analytics provide up-to-the-minute insights, allowing you to respond quickly to market changes and emerging opportunities."
              />
              <Feature
                icon={TrendingUp}
                title="Measurable ROI"
                description="We're not just about flashy dashboards. Our solutions are designed to deliver tangible results. Track your ROI directly through our platform and see the impact on your bottom line."
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-8 md:text-3xl text-center">See Your ROI Growth</h3>
              <div className="w-full h-80 md:h-96 items-center">
                <ResponsiveContainer width="95%" height="100%">  
                  <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="roi" stroke="#6366F1" strokeWidth={2} />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Repeat CTA */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 md:text-4xl">Transform your business with data-driven intelligence</h2>
              <Button 
                className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-3 rounded-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => setIsFormOpen(true)}
              >
                Get Started Now
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Solutions</a>
              <a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Industries</a>
              <a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">About Us</a>
              <a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Careers</a>
              <a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Contact</a>
              <a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-gray-400 flex justify-between items-center">
              <span>© 2024 Kozker Tech. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>

        <AssessmentForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </div>
  );
};

export default Homepage;