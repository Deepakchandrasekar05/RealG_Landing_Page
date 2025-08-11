import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 page-transition">
          <h1 className="section-heading">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            Have questions about RealG? Our team is ready to help you implement the perfect safety solution for your construction site.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="order-2 md:order-1 page-transition">
            <ContactInfo />
          </div>
          
          <div className="order-1 md:order-2">
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto page-transition">
          <div className="bg-[#1E1E1E] border border-[#333333] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Want to See RealG in Action?</h3>
            <p className="text-[#A0A0A0] mb-6">
              Schedule a live demo to see how our platform can enhance safety on your construction sites.
            </p>
            <a 
              href="https://realg-website.web.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary inline-block"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;