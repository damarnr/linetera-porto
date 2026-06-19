import React from 'react';
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <main className="w-full flex-1 bg-[#FAFAFA] relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-linetera-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-linetera-navy/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18223605_1px,transparent_1px),linear-gradient(to_bottom,#18223605_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-32 pb-40 min-h-[75vh] flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Subtle Accent Line */}
          <div className="w-16 h-[3px] bg-linetera-orange mb-12 rounded-full"></div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-8 text-linetera-navy">
            A tiny gleam for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-linetera-orange to-amber-400">a giant leap.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed mb-16 max-w-2xl">
            Secercah cahaya kecil untuk lompatan besar.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <a 
              href="/portfolio" 
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-linetera-orange text-linetera-orange bg-transparent px-8 py-3.5 font-medium transition-all duration-300 tracking-wide text-sm shadow-[0_0_15px_rgba(245,166,35,0.15)] hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] hover:bg-linetera-orange hover:text-white hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center">
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
