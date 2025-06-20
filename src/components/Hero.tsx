import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Nikheel Kumbhani
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 font-medium">
            Cloud & DevOps Enthusiast | Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Computer Engineering student passionate about building scalable cloud infrastructure, 
            automating development workflows, and creating innovative solutions that bridge development and operations.
          </p>

          {/* CTA Button */}
          <a
            href="/cv.pdf"
            download
            className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-purple-900/25 hover:shadow-xl hover:shadow-purple-900/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 inline-block"
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
