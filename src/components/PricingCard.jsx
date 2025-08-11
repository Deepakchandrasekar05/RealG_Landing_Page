import React from 'react';
import { Check, X } from 'lucide-react';

const PricingCard = ({ plan, features, price, isPopular, ctaText }) => {
  return (
    <div className={`pricing-card ${isPopular ? 'pricing-card-highlight' : 'pricing-card-normal'} page-transition`}>
      {isPopular && (
        <div className="bg-[#FF3A3A] text-white text-sm font-bold py-1 px-4 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2">
          MOST POPULAR
        </div>
      )}
      
      <div className="relative">
        <h3 className="text-2xl font-bold mb-2">{plan}</h3>
        <div className="mb-6">
          <span className="text-4xl font-extrabold">${price}</span>
          <span className="text-[#A0A0A0]">/month</span>
        </div>
        
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.included ? (
                <Check size={18} className="text-[#FF3A3A] mr-3 mt-0.5 flex-shrink-0" />
              ) : (
                <X size={18} className="text-[#A0A0A0] mr-3 mt-0.5 flex-shrink-0" />
              )}
              <p className={feature.included ? "text-white" : "text-[#A0A0A0]"}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        
        <button className={`w-full btn ${isPopular ? 'btn-primary' : 'btn-outline'}`}>
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;