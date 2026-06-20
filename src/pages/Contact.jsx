import React from 'react';
import { ArrowRight } from 'lucide-react';

function Contact() {
  return (
    <main className="px-8 md:px-16 lg:px-24 pt-40 pb-32 max-w-[1440px] mx-auto w-full flex-1 min-h-screen flex flex-col justify-center animate-fade-in">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 w-full">
        
        {/* Left Side: Contact Info */}
        <div className="max-w-2xl w-full">
          <h2 className="text-sm uppercase tracking-widest font-semibold text-linetera-navy/40 mb-12">Contact</h2>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-16 text-linetera-navy">
            Initiate a Project.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-linetera-navy/40 mb-4">Email Inquiries</h3>
              <a href="mailto:hello@lineteralabs.com" className="text-xl font-medium hover:text-linetera-orange transition-colors">
                lineteralabs@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-linetera-navy/40 mb-4">Location</h3>
              <p className="text-lg font-light leading-relaxed">
                Global Remote<br />
                Digital Laboratory
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Card Fan */}
        <div className="hidden lg:block relative w-[450px] h-[400px]">
          {/* Card 3 (Bottom) */}
          <div className="absolute top-12 right-0 w-[300px] h-[340px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 transform rotate-12 translate-x-12 opacity-80 transition-all duration-500 hover:rotate-6 hover:translate-x-16 hover:-translate-y-4">
            <div className="w-full h-40 bg-gray-100 rounded-xl mb-4 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Project 3" className="w-full h-full object-cover opacity-60" />
            </div>
            <h3 className="font-bold text-linetera-navy text-lg mb-1">Dashboard Analytics</h3>
            <p className="text-xs text-gray-500">Finance Sector</p>
          </div>

          {/* Card 2 (Middle) */}
          <div className="absolute top-6 right-8 w-[300px] h-[340px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 transform rotate-6 translate-x-6 z-10 opacity-90 transition-all duration-500 hover:rotate-3 hover:translate-x-8 hover:-translate-y-4">
            <div className="w-full h-40 bg-gray-100 rounded-xl mb-4 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600" alt="Project 2" className="w-full h-full object-cover opacity-80" />
            </div>
            <h3 className="font-bold text-linetera-navy text-lg mb-1">E-Commerce App</h3>
            <p className="text-xs text-gray-500">Retail & Lifestyle</p>
          </div>

          {/* Card 1 (Top) */}
          <div className="absolute top-0 right-16 w-[300px] h-[340px] bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-4 transform -rotate-2 z-20 transition-all duration-500 hover:rotate-0 hover:-translate-y-6 cursor-pointer">
            <div className="w-full h-40 bg-gray-100 rounded-xl mb-4 overflow-hidden relative group">
               <div className="absolute inset-0 bg-linetera-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" alt="Project 1" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-linetera-navy text-lg leading-tight">Smart Monitoring</h3>
                <p className="text-xs text-linetera-orange font-medium mt-1">IoT Solutions</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-linetera-orange/10 flex items-center justify-center text-linetera-orange">
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed line-clamp-2">
              Sistem monitoring real-time untuk mendeteksi anomali.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Contact;
