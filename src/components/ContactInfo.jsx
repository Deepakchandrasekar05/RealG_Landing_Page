import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin size={24} />,
      title: 'Office Address',
      details: '1234 Construction Ave, Building 5, New York, NY 10001'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+1 (555) 123-4567'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'info@realg-safety.com'
    },
    {
      icon: <Globe size={24} />,
      title: 'Website',
      details: 'realg-website.web.app'
    }
  ];
  
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
        <p className="text-[#A0A0A0]">
          Have questions about RealG? Contact our team for more information or to schedule a demo.
        </p>
      </div>
      
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="bg-[#333333] p-3 rounded-lg mr-4 text-[#FF3A3A]">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-white">{item.title}</h4>
              <p className="text-[#A0A0A0]">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4">
        <h4 className="font-bold text-white mb-3">Development Team</h4>
        <p className="text-[#A0A0A0] mb-2">
          RealG is developed by a team of safety experts and software engineers dedicated to improving construction site safety.
        </p>
        <p className="text-[#A0A0A0]">
          Our team is available Monday through Friday, 9am-5pm EST.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;