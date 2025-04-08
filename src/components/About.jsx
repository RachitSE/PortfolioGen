'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative z-10 py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Left: Image or placeholder */}
        <img
        src="/img..jpg"
        alt="Futuristic Portfolio Builder Illustration"
        className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg hover:blur-none transition-all duration-500"/>
        {/* Right: Text content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 glow-text">
            Why This Portfolio Builder?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Whether you’re applying to colleges, internships, or just want to flex your skills — this platform lets students build stunning portfolios that stand out.
          </p>
          <p className="mt-4 text-md text-gray-400">
            Zero code. Zero effort. Fully customizable.
          </p>
        </div>
      </motion.div>
    </section>
    
  );
}
