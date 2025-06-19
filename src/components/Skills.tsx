
import React from 'react';

const Skills = () => {
  const skills = [
    { 
      name: 'AWS CLOUD', 
      icon: '☁️', 
      color: 'from-orange-500 to-orange-600',
      description: 'EC2, S3, Lambda, Route53, VPC, IAM'
    },
    { 
      name: 'KUBERNETES', 
      icon: '⚓', 
      color: 'from-blue-500 to-blue-600',
      description: 'EKS, k3s, Container Orchestration'
    },
    { 
      name: 'DOCKER', 
      icon: '🐳', 
      color: 'from-cyan-500 to-cyan-600',
      description: 'Containerization & Microservices'
    },
    { 
      name: 'TERRAFORM', 
      icon: '🏗️', 
      color: 'from-purple-500 to-purple-600',
      description: 'Infrastructure as Code (IaC)'
    },
    { 
      name: 'NODE.JS', 
      icon: '🟢', 
      color: 'from-green-500 to-green-600',
      description: 'Backend APIs & Express.js'
    },
    { 
      name: 'REACT.JS', 
      icon: '⚛️', 
      color: 'from-cyan-400 to-blue-500',
      description: 'Frontend Development & TypeScript'
    },
    { 
      name: 'PYTHON', 
      icon: '🐍', 
      color: 'from-yellow-500 to-blue-600',
      description: 'Automation & Scripting'
    },
    { 
      name: 'DEVOPS', 
      icon: '🔄', 
      color: 'from-red-500 to-purple-600',
      description: 'CI/CD Pipelines & GitHub Actions'
    },
    { 
      name: 'LINUX', 
      icon: '🐧', 
      color: 'from-gray-500 to-gray-600',
      description: 'Server Administration & Management'
    },
    { 
      name: 'BASH SCRIPTING', 
      icon: '📜', 
      color: 'from-green-600 to-gray-700',
      description: 'Shell Automation & Scripts'
    },
    { 
      name: 'MYSQL', 
      icon: '🐬', 
      color: 'from-blue-600 to-orange-500',
      description: 'Relational Database Management'
    },
    { 
      name: 'MONGODB', 
      icon: '🍃', 
      color: 'from-green-400 to-green-600',
      description: 'NoSQL Document Database'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800" >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-coral">Technologies</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-coral/10 cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wider">
                    {skill.name}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
                
                {/* Subtle glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
