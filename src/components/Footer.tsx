
import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/GecStudent?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
            >
              <Github 
                size={24} 
                className="text-slate-400 group-hover:text-purple-400 transition-colors duration-300" 
              />
              <div className="absolute inset-0 rounded-xl bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </a>
            
            <a
              href="https://www.instagram.com/_nikheel_kumbhani_3?utm_source=qr&igsh=czFxZGduaXk0c3Uz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:scale-110"
            >
              <Instagram 
                size={24} 
                className="text-slate-400 group-hover:text-pink-400 transition-colors duration-300" 
              />
              <div className="absolute inset-0 rounded-xl bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nikheel-kumbhani-499938308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin 
                size={24} 
                className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300" 
              />
              <div className="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-center">
            <p className="text-slate-400 text-sm font-medium">
              © 2024 Nikheel Kumbhani — All rights reserved. Built with{' '}
              <span className="text-purple-400 font-semibold">React & Tailwind CSS</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
