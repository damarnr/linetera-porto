import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { X, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <>
      <Helmet>
        <title>Portfolio | lineteralabs</title>
        <meta name="description" content="Explore the selected works and projects created by lineteralabs." />
      </Helmet>
      <section className="w-full flex-1 animate-fade-in flex flex-col">
        {/* 1px Horizontal Line Divider */}
        <div className="w-full h-[1px] bg-linetera-navy/20"></div>

        <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="pt-40 pb-12">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-linetera-navy/40 mb-8">Selected Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-auto mb-24">
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="relative flex flex-col justify-end min-h-[420px] group cursor-pointer bg-linetera-navy rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Background Image or Fallback */}
              {project.image ? (
                <>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-linetera-navy to-linetera-navy/80"></div>
              )}

              {/* Content Overlay */}
              <div className="relative z-10 p-6 sm:p-8 w-full translate-y-14 group-hover:-translate-y-2 transition-transform duration-500">
                <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-linetera-orange mb-1">
                  {project.subtitle}
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2 leading-snug">
                  {project.title}
                </h3>
                
                {/* Tags appear on hover */}
                <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] sm:text-xs px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-linetera-navy/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content Split Layout */}
          <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row transform transition-all duration-500 scale-100">
            
            {/* Left Column: Visual/Image */}
            <div className="w-full lg:w-2/5 h-48 lg:h-auto relative bg-linetera-navy flex-shrink-0 border-r border-gray-100">
              {selectedProject.image ? (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-linetera-navy to-linetera-navy/80 p-8 text-center">
                  <div className="w-24 h-24 mb-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <span className="text-3xl font-bold text-white/40">{selectedProject.title.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white/30 tracking-wider uppercase">{selectedProject.title}</h3>
                </div>
              )}
            </div>

            {/* Right Column: Details & Tech Stack */}
            <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 overflow-y-auto max-h-[90vh] relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 lg:top-8 lg:right-8 p-3 text-gray-400 hover:text-linetera-orange bg-gray-50 hover:bg-orange-50 rounded-full transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="max-w-2xl">
                <h2 className="text-sm uppercase tracking-widest font-semibold text-linetera-orange mb-4">Project Overview</h2>
                
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-linetera-navy mb-4 leading-tight">
                  {selectedProject.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-linetera-navy/70 font-light mb-8 leading-snug">
                  {selectedProject.subtitle}
                </p>
                
                {selectedProject.caseStudy ? (
                  <div className="mb-12 space-y-8">
                    <div>
                      <h3 className="text-sm uppercase tracking-widest font-bold text-linetera-navy/40 mb-3">Tantangan (The Problem)</h3>
                      <p className="text-lg text-gray-600 font-light leading-relaxed whitespace-pre-line">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest font-bold text-linetera-navy/40 mb-3">Solusi (The Solution)</h3>
                      <p className="text-lg text-gray-600 font-light leading-relaxed whitespace-pre-line">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-lg text-gray-600 font-light leading-relaxed mb-12 whitespace-pre-line">
                    {selectedProject.description || "Detailed description for this project is currently being updated. Please check back later or contact us for more information."}
                  </div>
                )}

                {/* Structured Tech Stack Grid */}
                {selectedProject.techDetails && selectedProject.techDetails.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-sm uppercase tracking-widest font-bold text-linetera-navy/40 mb-6">Technologies & Architecture</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.techDetails.map((tech, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-linetera-orange/30 hover:bg-orange-50/30 transition-colors flex flex-col group">
                          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-linetera-navy/40 group-hover:text-linetera-orange/80 font-bold mb-2 transition-colors">
                            {tech.category}
                          </span>
                          <span className="text-sm sm:text-base text-linetera-navy font-semibold">
                            {tech.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                  <a 
                    href={selectedProject.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center overflow-hidden rounded-full bg-linetera-navy text-white px-8 py-4 font-medium transition-all duration-300 shadow-lg hover:bg-linetera-orange hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] hover:-translate-y-1"
                  >
                    <span className="flex items-center">
                      Visit Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </a>
                  
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center justify-center rounded-full bg-transparent border border-gray-200 text-gray-600 px-8 py-4 font-medium transition-all duration-300 hover:bg-gray-50 hover:text-linetera-navy"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
