import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Helmet } from 'react-helmet-async';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | lineteralabs</title>
        <meta name="description" content="Get in touch with lineteralabs to initiate a project. Contact us via email or find our location." />
      </Helmet>
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
          {projects[2] && (
          <div className="absolute top-12 right-0 w-[300px] h-[340px] bg-linetera-navy rounded-3xl shadow-xl overflow-hidden transform rotate-12 translate-x-12 opacity-80 transition-all duration-500 hover:rotate-6 hover:translate-x-16 hover:-translate-y-4 group cursor-pointer border border-white/10">
            {projects[2].image && <img src={projects[2].image} alt={projects[2].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-end translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[10px] uppercase tracking-widest font-bold text-linetera-orange mb-1">{projects[2].subtitle}</p>
              <h3 className="text-xl font-bold tracking-tight text-white leading-snug">{projects[2].title}</h3>
            </div>
          </div>
          )}

          {/* Card 2 (Middle) */}
          {projects[1] && (
          <div className="absolute top-6 right-8 w-[300px] h-[340px] bg-linetera-navy rounded-3xl shadow-2xl overflow-hidden transform rotate-6 translate-x-6 z-10 opacity-90 transition-all duration-500 hover:rotate-3 hover:translate-x-8 hover:-translate-y-4 group cursor-pointer border border-white/10">
            {projects[1].image && <img src={projects[1].image} alt={projects[1].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-end translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[10px] uppercase tracking-widest font-bold text-linetera-orange mb-1">{projects[1].subtitle}</p>
              <h3 className="text-xl font-bold tracking-tight text-white leading-snug">{projects[1].title}</h3>
            </div>
          </div>
          )}

          {/* Card 1 (Top) */}
          {projects[0] && (
          <div className="absolute top-0 right-16 w-[300px] h-[340px] bg-linetera-navy rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] overflow-hidden transform -rotate-2 z-20 transition-all duration-500 hover:rotate-0 hover:-translate-y-6 group cursor-pointer border border-white/20">
            {projects[0].image && <img src={projects[0].image} alt={projects[0].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-end translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[10px] uppercase tracking-widest font-bold text-linetera-orange mb-1">{projects[0].subtitle}</p>
              <h3 className="text-xl font-bold tracking-tight text-white leading-snug">{projects[0].title}</h3>
            </div>
          </div>
          )}
        </div>

      </div>
    </main>
    </>
  );
}

export default Contact;
