'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glowing Blob */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
        <div className="w-[700px] h-[700px] bg-fuchsia-600 opacity-30 rounded-full blur-[200px] animate-pulse" />
      </div>

      {/* Animated Content */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Build Your Dream Portfolio
      </motion.h1>

      <motion.p
        className="mt-4 text-lg sm:text-xl text-white z-10 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        A futuristic portfolio builder for students. Easy. Stylish. Free.
      </motion.p>

      <motion.button
        onClick={() => {
          const ctaSection = document.getElementById("cta");
          if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg z-10 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Start Building
      </motion.button>
    </section>
  );
}
