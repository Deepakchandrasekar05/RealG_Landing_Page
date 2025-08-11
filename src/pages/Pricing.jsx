import React from 'react';
import PricingCard from '../components/PricingCard';
import { HardHat, Shield } from 'lucide-react';

const Pricing = () => {
  const liteFeatures = [
    { text: 'Up to 25 worker accounts', included: true },
    { text: 'Basic geofencing (5 zones)', included: true },
    { text: 'Emergency alerts', included: true },
    { text: 'Mobile app access', included: true },
    { text: 'Email notifications', included: true },
    { text: 'Basic reporting', included: true },
    { text: 'Advanced analytics', included: false },
    { text: 'Custom safety protocols', included: false },
    { text: 'API access', included: false },
    { text: 'Priority support', included: false }
  ];
  
  const proFeatures = [
    { text: 'Unlimited worker accounts', included: true },
    { text: 'Advanced geofencing (unlimited zones)', included: true },
    { text: 'Emergency alerts with SMS', included: true },
    { text: 'Mobile app access', included: true },
    { text: 'Real-time notifications', included: true },
    { text: 'Advanced reporting & analytics', included: true },
    { text: 'Custom safety protocols', included: true },
    { text: 'API access', included: true },
    { text: 'Priority 24/7 support', included: true },
    { text: 'Safety compliance certification', included: true }
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 page-transition">
          <h1 className="section-heading">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            Choose the plan that fits your construction site safety needs. All plans include our core safety features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative">
            <PricingCard
              plan="Lite"
              price="299"
              features={liteFeatures}
              isPopular={false}
              ctaText="Get Started"
            />
            <div className="absolute top-6 left-6 text-[#A0A0A0]">
              <HardHat size={24} />
            </div>
          </div>
          
          <div className="relative">
            <PricingCard
              plan="Pro"
              price="599"
              features={proFeatures}
              isPopular={true}
              ctaText="Get Started"
            />
            <div className="absolute top-6 left-6 text-[#FF3A3A]">
              <Shield size={24} />
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-[#1E1E1E] border border-[#333333] rounded-xl p-8 max-w-4xl mx-auto page-transition">
          <h3 className="text-2xl font-bold mb-4 text-center">Need a Custom Solution?</h3>
          <p className="text-[#A0A0A0] text-center mb-6">
            We offer tailored enterprise solutions for larger construction companies with specific requirements.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="btn btn-outline">
              Contact for Enterprise Pricing
            </a>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqItem 
              question="How does the geofencing feature work?" 
              answer="Our geofencing technology allows you to define specific safety zones on your construction site. When workers enter or exit these zones, the system generates alerts based on your configured rules."
            />
            <FaqItem 
              question="Can I upgrade or downgrade my plan?" 
              answer="Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle."
            />
            <FaqItem 
              question="Is there a setup fee?" 
              answer="No, there are no setup fees. You only pay the monthly subscription fee for your chosen plan."
            />
            <FaqItem 
              question="Do you offer a free trial?" 
              answer="Yes, we offer a 14-day free trial for both our Lite and Pro plans, allowing you to test all features before committing."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  return (
    <div className="bg-[#1E1E1E] border border-[#333333] rounded-lg p-6 hover:border-[#FF3A3A] transition-all duration-300">
      <h4 className="text-lg font-bold mb-3">{question}</h4>
      <p className="text-[#A0A0A0]">{answer}</p>
    </div>
  );
};

export default Pricing;