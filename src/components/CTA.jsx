// components/CTA.jsx

export default function CTA() {
    return (
        
      <section id="cta" className="w-full py-20 bg-gradient-to-br from-pink-600 to-fuchsia-700 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 px-6 z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Ready to Build Your Dream Portfolio?
          </h2>
          <p className="text-lg text-white/80">
            One click. One experience. Your future, now.
          </p>
          <a
            href="/builder"
            className="inline-block px-8 py-3 bg-black/90 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 hover:bg-black transition-all duration-300"
          >
            🚀 Build My Portfolio
          </a>
        </div>
  
        {/* Floating glow effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-72 h-72 bg-pink-400 blur-3xl opacity-30 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute w-52 h-52 bg-fuchsia-500 blur-2xl opacity-20 rounded-full bottom-0 left-10 animate-ping" />
          <div className="absolute w-32 h-32 bg-white blur-xl opacity-10 rounded-full top-20 right-10 animate-bounce" />
        </div>
      </section>
    );
  }
  