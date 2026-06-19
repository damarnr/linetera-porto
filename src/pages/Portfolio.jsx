import React from 'react';
import { projects } from '../data/projects';

function Portfolio() {
  return (
    <section className="w-full flex-1 animate-fade-in flex flex-col">
      {/* 1px Horizontal Line Divider */}
      <div className="w-full h-[1px] bg-linetera-navy/20"></div>

      <div className="px-12 py-12">
        <h2 className="text-sm uppercase tracking-widest font-semibold text-linetera-navy/40 mb-8">Selected Works</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full border-t border-b border-linetera-navy/20 mt-auto">
        {projects.map((project, index) => (
          <article 
            key={project.id} 
            className={`p-12 flex flex-col justify-between min-h-[400px] group hover:bg-linetera-navy/[0.02] transition-colors duration-500
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
            </div>
            
            <div className="flex justify-between items-end mt-16">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs uppercase tracking-widest font-semibold text-linetera-navy/40">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="w-10 h-10 flex items-center justify-center text-linetera-navy/40 group-hover:text-linetera-orange transition-colors duration-300"
                aria-label={`View ${project.title}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
