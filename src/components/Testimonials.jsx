'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Class 12 Student',
    feedback:
      'This portfolio builder literally made my college applications stand out. So easy and beautiful!',
  },
  {
    name: 'Ritik Mehra',
    role: 'Internship Seeker',
    feedback:
      "I've tried Canva and Figma — nothing felt this smooth for a quick, futuristic portfolio.",
  },
  {
    name: 'Tanya Dey',
    role: 'Student + Designer',
    feedback:
      'The themes and UI are fire. The drag-and-drop is a lifesaver during exams! ✨',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-pink-10 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          What Students Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-[#111111] p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-pink-500/10 hover:scale-[1.03] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-300 italic">“{t.feedback}”</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
