
import React from 'react';

const Stats = () => {
  const stats = [
    { number: '156+', label: 'Clients', color: 'text-slate-300' },
    { number: '394+', label: 'Projects', color: 'text-slate-300' },
    { number: '37+', label: 'Countries', color: 'text-coral' },
    { number: '21+', label: 'Awards', color: 'text-slate-300' }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
