
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Graphics Design',
      description: 'Develop the Visual Identity of Your Business'
    },
    {
      icon: '💻',
      title: 'Web Design',
      description: 'Connect With Your Users, Not Just Your Business.'
    },
    {
      icon: '⚙️',
      title: 'Development',
      description: 'We Develop the Visual Identity of Your Business.'
    },
    {
      icon: '📈',
      title: 'Seo Friendly',
      description: 'Taking your site at the top of Google\'s ranking.'
    }
  ];

  return (
    <section id="service" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 text-center hover:bg-slate-750 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
