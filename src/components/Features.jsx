'use client';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, LayoutDashboard, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Rocket size={36} className="text-pink-500" />,
    title: "AI-Powered Portfolio",
    desc: "Generate stunning portfolios in seconds with built-in AI tools.",
  },
  {
    icon: <LayoutDashboard size={36} className="text-purple-500" />,
    title: "Futuristic Themes",
    desc: "Choose from slick, modern designs with glowing effects and glass UI.",
  },
  {
    icon: <Sparkles size={36} className="text-indigo-500" />,
    title: "Effortless Customization",
    desc: "Edit content, colors, and layout without touching code.",
  },
  {
    icon: <Smartphone size={36} className="text-blue-500" />,
    title: "Mobile Optimized",
    desc: "Responsive design that works flawlessly on every screen size.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white mb-12 glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-pink-500/20 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
