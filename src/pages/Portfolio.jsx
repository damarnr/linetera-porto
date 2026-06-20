import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { X, ArrowRight } from 'lucide-react';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling on the body when modal is open
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
      <section className="w-full flex-1 animate-fade-in flex flex-col">
        {/* 1px Horizontal Line Divider */}
        <div className="w-full h-[1px] bg-linetera-navy/20"></div>

        <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="pt-40 pb-12">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-linetera-navy/40 mb-8">Selected Works</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 w-full border-t border-b border-linetera-navy/20 mt-auto">
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className={`p-12 flex flex-col justify-between min-h-[400px] group cursor-pointer hover:bg-linetera-navy/[0.02] transition-colors duration-500
                ${index !== 0 ? 'lg:border-l border-t lg:border-t-0 border-linetera-navy/20' : ''}
              `}
            >
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-4 text-linetera-navy group-hover:text-linetera-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-lg text-linetera-navy/60 leading-relaxed font-light">
                  {project.subtitle}
                </p>
                {project.description && (
                  <p className="text-sm text-linetera-navy/50 mt-4 leading-relaxed line-clamp-3 group-hover:text-linetera-navy/80 transition-colors">
                    {project.description}
                  </p>
                )}
              </div>
              
              <div className="flex justify-between items-end mt-16">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs uppercase tracking-widest font-semibold text-linetera-navy/40">
                      {tag}
                    </span>
                  ))}
                </div>
                <div 
                  className="w-10 h-10 flex items-center justify-center text-linetera-navy/40 group-hover:text-linetera-orange transition-colors duration-300"
                >
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-linetera-navy/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl p-8 md:p-16 border border-gray-100 z-10 animate-fade-in-up">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-3 text-gray-400 hover:text-linetera-orange bg-gray-50 hover:bg-orange-50 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-sm uppercase tracking-widest font-semibold text-linetera-orange mb-6">Project Details</h2>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-linetera-navy mb-6">
              {selectedProject.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-linetera-navy/70 font-light mb-12 leading-snug">
              {selectedProject.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-12 border-y border-gray-100 py-6">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="text-sm uppercase tracking-widest font-semibold text-linetera-navy/60">
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-lg text-gray-600 font-light leading-relaxed mb-16">
              <p>
                {selectedProject.description || "Detailed description for this project is currently being updated. Please check back later or contact us for more information."}
              </p>
            </div>
            
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
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
