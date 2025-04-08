'use client';
import { motion } from 'framer-motion';

export default function DashboardPreview() {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Sneak Peek of Your Dashboard
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get a taste of the sleek, AI-powered interface where you’ll build your ultimate student portfolio with zero code.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="/hhh.jpg" // Replace with real dashboard preview later
            alt="Dashboard Preview"
            className="w-full rounded-2xl shadow-2xl border border-black-500/30 hover:scale-105 transition-all duration-500"
          />

          <div className="bg-[#121212] rounded-2xl p-6 border border-fuchsia-500/30 shadow-lg backdrop-blur-md bg-opacity-60">
            <ul className="text-left space-y-4 text-pink-200 font-medium">
              <li>✅ Live Preview As You Build</li>
              <li>🎨 Fully Custom Themes</li>
              <li>🧠 AI Assistant for Content</li>
              <li>📎 Instant Export or Share Link</li>
              <li>🕶️ Styled for Impact</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Floating Glow Element */}
      <div className="absolute w-96 h-96 bg-pink-500 blur-[200px] opacity-20 rounded-full top-10 right-10 z-0" />
    </section>
  );
}
