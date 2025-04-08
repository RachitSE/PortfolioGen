"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // lucide-react for icons

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-lg z-50 fixed top-0">
        <h1
          onClick={() => handleScroll("home")}
          className="text-2xl md:text-3xl font-bold tracking-wide font-mono glow-text cursor-pointer bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          PortForge<span className="text-pink-400">.</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
          <li
            className="hover:text-pink-400 transition cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className="hover:text-pink-400 transition cursor-pointer"
            onClick={() => setShowComingSoon(true)}
          >
            Templates
          </li>
          <li
            className="hover:text-pink-400 transition cursor-pointer"
            onClick={() => handleScroll("how-it-works")}
          >
            About
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-16 right-4 w-48 bg-[#1e1e2f] border border-pink-400 rounded-xl shadow-xl p-4 flex flex-col gap-4 text-sm z-40 animate-fadeIn">
          <button
            onClick={() => handleScroll("home")}
            className="text-white hover:text-pink-400 text-left transition"
          >
            Home
          </button>
          <button
            onClick={() => {
              setShowComingSoon(true);
              setMobileOpen(false);
            }}
            className="text-white hover:text-pink-400 text-left transition"
          >
            Templates
          </button>
          <button
            onClick={() => handleScroll("how-it-works")}
            className="text-white hover:text-pink-400 text-left transition"
          >
            About
          </button>
        </div>
      )}

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#1f1f1f] border border-pink-500 rounded-2xl p-8 text-center max-w-sm shadow-2xl animate-fadeIn">
            <h2 className="text-2xl text-pink-400 font-bold mb-4">🚧 Coming Soon!</h2>
            <p className="text-white mb-6">We're crafting epic templates. Stay tuned!</p>
            <button
              onClick={() => setShowComingSoon(false)}
              className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Animation Class */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .glow-text {
          text-shadow: 0 0 8px #ff69b4, 0 0 14px #b983ff;
        }
      `}</style>
    </>
  );
}
