import React from 'react';

function About() {
  return (
    <main className="px-12 pt-32 pb-32 max-w-screen-2xl mx-auto w-full flex-1 animate-fade-in">
      <div className="max-w-3xl">
        <h2 className="text-sm uppercase tracking-widest font-semibold text-linetera-navy/40 mb-12">Profile</h2>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-12 text-linetera-navy">
          We architect digital experiences driven by strict logic and uncompromised precision.
        </h1>

        <div className="space-y-8 text-lg font-light text-linetera-navy/70 leading-relaxed">
          <p>
            LineTera Labs is an independent digital laboratory specializing in robust architectures for real-time monitoring, web platforms, and data-driven applications.
          </p>
        </div>

        <div className="mt-20 pt-12 border-t border-linetera-navy/20">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-linetera-navy/40 mb-6">Core Competencies</h3>
          <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
            <li>System Architecture</li>
            <li>Full-stack Web Development</li>
            <li>Real-time IoT Dashboards</li>
            <li>UI/UX Engineering</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default About;
