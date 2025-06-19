import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'CloudMetrics - SaaS Monitoring Platform',
      category: 'CLOUD NATIVE',
      tags: 'AWS | Kubernetes | Terraform',
      description: 'Designed full AWS infrastructure using Terraform (IaC) and Kubernetes (EKS/k3s). Implemented CI/CD pipelines using GitHub Actions for Node.js backend & React frontend. Integrated monitoring with Prometheus, Grafana, and centralized logging with ELK Stack.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      date: '2024',
      client: 'Personal Project',
      tech: 'AWS, Kubernetes, Terraform, Node.js',
      type: 'Cloud Infrastructure',
      url: 'https://github.com/GecStudent'
    },
    {
      title: 'Auction Hub - Real-Time Platform',
      category: 'FULL STACK',
      tags: 'React.js | Node.js | MongoDB',
      description: 'Developed full-stack application with React.js frontend and Node.js + Express.js backend. Managed user authentication, real-time bidding system, and auction management. Integrated MongoDB with live bid updates and countdown timers.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop',
      date: '2024',
      client: 'Academic Project',
      tech: 'React, Node.js, MongoDB, Express',
      type: 'Web Application',
      url: 'https://github.com/GecStudent'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            My <span className="text-coral">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-600 hover:border-slate-500 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 gap-5 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-wrap">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-coral text-white px-3 py-1.5 md:px-6 md:py-2 rounded-lg font-medium text-sm md:text-base"
                  >
                    Source Code
                  </a>
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-coral text-white px-3 py-1.5 md:px-6 md:py-2 rounded-lg font-medium text-sm md:text-base"
                  >
                    View Project
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <div className="text-slate-400 text-sm mb-4">{project.tags}</div>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400">Date: {project.date}</div>
                    <div className="text-slate-400">Client: {project.client}</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Tech: {project.tech}</div>
                    <div className="text-slate-400">Type: {project.type}</div>
                  </div>
                </div>
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
