'use client';

import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 relative overflow-hidden">
      {/* Floating glow ball */}
      <div className="absolute w-64 h-64 bg-pink-500 opacity-20 blur-3xl rounded-full top-[-80px] left-[-80px] animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 relative z-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
            PortForge
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Build futuristic student portfolios in minutes.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <a href="#" className="text-sm text-white hover:text-pink-400 transition-all">Home</a>
          <a href="#" className="text-sm text-white hover:text-pink-400 transition-all">Builder</a>
          <a href="#" className="text-sm text-white hover:text-pink-400 transition-all">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex space-x-4 items-start">
          <a href="#" className="text-white hover:text-pink-400 transition-all">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-pink-400 transition-all">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-pink-400 transition-all">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Shooting stars animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-1 h-16 bg-white opacity-10 animate-shooting-star" style={{ top: '10%', left: '60%' }}></div>
        <div className="absolute w-1 h-20 bg-white opacity-10 animate-shooting-star" style={{ top: '40%', left: '80%' }}></div>
        <div className="absolute w-1 h-12 bg-white opacity-10 animate-shooting-star" style={{ top: '70%', left: '30%' }}></div>
      </div>

      <style jsx>{`
        @keyframes shooting-star {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100px) translateX(-300px);
            opacity: 0;
          }
        }

        .animate-shooting-star {
          animation: shooting-star 5s linear infinite;
        }
      `}</style>
    </footer>
  );
}
