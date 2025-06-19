
import React from 'react';

const Experience = () => {
  const education = [
    {
      title: 'Bachelor of Engineering (Computer Engineering)',
      subtitle: 'CGPA: 8.13',
      period: '2022 - 2026',
      description: 'Currently pursuing Computer Engineering at Government Engineering College, Bhavnagar. Focusing on Cloud Computing, DevOps automation, and Full-Stack Development with strong academic performance and practical project experience.'
    },
    {
      title: 'Higher Secondary Certificate (HSC)',
      subtitle: 'Percentage: 72.15%',
      period: '2022',
      description: 'Completed 12th Standard from Saixanik Sankul Mandavad, Junagadh. Built strong foundation in Mathematics, Physics, and Computer Science, developing analytical and problem-solving skills essential for engineering studies.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-coral">Education</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 relative">
                <div className="text-sm text-slate-400 mb-2">{item.period}</div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">
                  {item.title} <span className="text-slate-300">{item.subtitle}</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
