import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  return (
    <main 
      className="w-full flex-1 bg-[#FAFAFA] relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Spotlight Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(24, 34, 54, 0.4), transparent 70%)`
        }}
      />

      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-linetera-orange/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-linetera-navy/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pt-32 pb-40 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Subtle Accent Line */}
          <div className="w-16 h-[3px] bg-linetera-orange mb-12 rounded-full"></div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-8 text-linetera-navy">
            A tiny gleam for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-linetera-orange to-amber-400">a giant leap.</span>
          </h1>

          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="/portfolio"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-linetera-orange text-linetera-orange bg-transparent px-8 py-3.5 font-medium transition-all duration-300 tracking-wide text-sm shadow-[0_0_15px_rgba(245,166,35,0.15)] hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] hover:bg-linetera-orange hover:text-white hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center">
                Explore Our Work
                <ArrowRight className="ml-2 w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Support Message Section */}
      <section className="relative z-10 bg-linetera-orange">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-32 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-linetera-navy mb-8 max-w-4xl leading-tight">
            Thank you for visiting our website
          </h2>
          <p className="text-lg md:text-xl text-linetera-navy/80 font-light leading-relaxed max-w-2xl">
            Please continue to support the developers, and always keep moving forward.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;