// components/HowItWorks.jsx

export default function HowItWorks() {
    return (
      <section id="how-it-works" className="w-full py-20 px-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-200 glow-text">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Enter Your Details",
                description: "Fill in academic info, achievements, hobbies, and more with our AI helper.",
              },
              {
                step: "2",
                title: "Customize the Design",
                description: "Choose themes, colors, fonts and layout. No code. All drag-n-drop.",
              },
              {
                step: "3",
                title: "Download or Share",
                description: "Instantly download your portfolio or share a futuristic link.",
              },
            ].map(({ step, title, description }) => (
              <div
                key={step}
                className="bg-[#121212] p-6 rounded-2xl border border-pink-500/30 shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
              >
                <div className="text-4xl text-pink-500 font-bold mb-4">{step}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
