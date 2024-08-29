import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const KozkerTechLandingPage = () => {
  const [showCaseStudyAlert, setShowCaseStudyAlert] = useState(false);
  const [showContactAlert, setShowContactAlert] = useState(false);

  const handleCaseStudySubmit = (e) => {
    e.preventDefault();
    setShowCaseStudyAlert(true);
    setTimeout(() => setShowCaseStudyAlert(false), 3000);
    e.target.reset();
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowContactAlert(true);
    setTimeout(() => setShowContactAlert(false), 3000);
    e.target.reset();
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-5 py-3 flex justify-between items-center">
          <a href="#" className="text-xl font-bold">Kozker Tech</a>
          <ul className="hidden md:flex space-x-4">
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#case-study" className="hover:text-gray-300">Case Study</a></li>
            <li><a href="#faq" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-purple-600 via-purple-900 to-blue-600 text-white py-20">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unleash Your Business Potential with Custom Tech Solutions</h1>
          <p className="text-xl mb-8">Empower Your Enterprise with Tailored BI, AI, and Automation</p>
          <a href="#contact" className="bg-white text-purple-700 px-6 py-3 rounded hover:bg-gray-100 transition duration-300">Schedule Your Free Consultation</a>
        </div>
      </header>

      {/* Problem & Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Facing These Business Challenges?</h2>
              <ul className="space-y-4">
                <li className="flex items-center"><i className="fas fa-times-circle text-red-500 mr-2"></i>Struggling to extract actionable insights from your data?</li>
                <li className="flex items-center"><i className="fas fa-times-circle text-red-500 mr-2"></i>Customer service overwhelmed by increasing demand?</li>
                <li className="flex items-center"><i className="fas fa-times-circle text-red-500 mr-2"></i>Inefficient processes hindering your growth?</li>
                <li className="flex items-center"><i className="fas fa-times-circle text-red-500 mr-2"></i>Difficulty integrating new technologies with existing systems?</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solutions</h2>
              <ul className="space-y-4">
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i>Turn complex data into clear, actionable insights</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i>Enhance customer satisfaction with AI-powered support</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i>Streamline operations with intelligent automation</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i>Seamlessly integrate cutting-edge tech with your current infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services: Customized for Your Business Needs</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'fa-chart-line', title: 'Custom BI Solutions', description: 'Gain comprehensive business insights and make data-driven decisions with confidence.' },
              { icon: 'fa-robot', title: 'AI-Powered Chatbots', description: 'Provide instant, 24/7 customer support and boost satisfaction.' },
              { icon: 'fa-database', title: 'Data Engineering & Analytics', description: 'Build robust, scalable data infrastructures and unlock the power of predictive analytics.' },
              { icon: 'fa-cogs', title: 'Workflow Automation', description: 'Identify and eliminate operational bottlenecks, reducing errors and cutting costs.' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
                <i className={`fas ${service.icon} text-4xl text-purple-600 mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-lg">On average, our clients see a 30% increase in operational efficiency and a 25% boost in customer satisfaction within the first year of implementation.</p>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore our Demo Report</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              title="CS Recruitment Dashboard"
              src="https://app.powerbi.com/reportEmbed?reportId=5e9e6e01-7fad-4080-98df-98aaf895ad7a&autoAuth=true&ctid=bd70ece0-d69f-40d8-9e1f-7410193eab57"
              className="w-full h-full"
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="bg-gradient-to-b from-purple-600 via-purple-900 to-blue-600 text-white py-16">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Discover How Data Transformed a Fortune 500 Company</h2>
            <p className="text-xl">Learn how our custom solutions drove unprecedented growth and efficiency.</p>
          </div>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleCaseStudySubmit}>
              <div className="mb-4">
                <input className="w-full p-2 rounded" id="email" type="email" placeholder="Email address" required />
              </div>
              <div className="mb-4">
                <select className="w-full p-2 rounded text-gray-800" id="industry" required>
                  <option value="">Select your industry</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button className="w-full bg-white text-purple-700 py-2 rounded hover:bg-gray-100 transition duration-300" type="submit">Get Your Free Case Study</button>
            </form>
            {showCaseStudyAlert && (
              <Alert className="mt-4">
                <AlertDescription>
                  Thank you! Your case study will be sent to your email shortly.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-100 py-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { 
                question: 'How do you ensure your solutions fit our specific business needs?',
                answer: 'We begin every engagement with a comprehensive analysis of your business processes, challenges, and goals. This allows us to tailor our solutions to your unique requirements.'
              },
              {
                question: 'Can your solutions integrate with our existing systems?',
                answer: 'Absolutely. Our team specializes in creating solutions that seamlessly integrate with your current technology stack, ensuring a smooth transition and minimal disruption.'
              },
              {
                question: 'How do you address data security and compliance concerns?',
                answer: 'Data security is paramount in all our solutions. We adhere to industry-leading security practices and ensure compliance with relevant regulations such as GDPR, HIPAA, and more.'
              },
              {
                question: 'What kind of ROI can we expect from implementing your solutions?',
                answer: 'While ROI can vary based on the specific solution and your business context, our clients typically see returns within 6-12 months. We work closely with you to establish clear KPIs and track progress.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-5">
          <div className="bg-gray-100 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Ready to Revolutionize Your Business?</h2>
              <p className="text-xl">Schedule your free consultation today!</p>
            </div>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <input className="w-full p-2 rounded" id="name" type="text" placeholder="Full name" required />
              </div>
              <div className="mb-4">
                <input className="w-full p-2 rounded" id="contactEmail" type="email" placeholder="Email address" required />
              </div>
              <div className="mb-4">
                <input className="w-full p-2 rounded" id="phone" type="tel" placeholder="Phone number" />
              </div>
              <div className="mb-4">
                <textarea className="w-full p-2 rounded" id="message" placeholder="Enter your message here..." rows="4" required></textarea>
              </div>
              <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300" type="submit">Submit</button>
            </form>
            {showContactAlert && (
              <Alert className="mt-4">
                <AlertDescription>
                  Thank you for your message. We will get back to you soon!
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-5 text-center">
          <p>&copy; 2023 Kozker Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default KozkerTechLandingPage;