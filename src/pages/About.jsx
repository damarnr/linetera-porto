import React from 'react';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>About | lineteralabs</title>
        <meta name="description" content="Learn more about lineteralabs, an independent digital laboratory serving as a home for projects, experiments, and technology-driven creations." />
      </Helmet>
      <main className="px-8 md:px-16 lg:px-24 pt-40 pb-32 max-w-[1440px] mx-auto w-full flex-1 min-h-screen animate-fade-in">
      <div className="max-w-3xl">
        <h2 className="text-sm uppercase tracking-widest font-semibold text-linetera-navy/40 mb-12">Profile</h2>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-12 text-linetera-navy">
          A tiny gleam for a giant leap.
        </h1>

        <div className="space-y-8 text-lg font-light text-linetera-navy/70 leading-relaxed">
          <p>
            LineTera Labs is an independent digital laboratory that serves as a home for projects, experiments, and technology-driven creations. Inspired by the philosophy of a lantern as a symbol of guidance and illumination, this platform was built to explore ideas, create digital solutions, and document a journey of innovation in technology.
            Here, you will find projects focused on web development, applications, real-time monitoring systems, and data-driven solutions. Each project is crafted with attention to detail, performance, and user experience to deliver solutions that are not only functional, but also meaningful and sustainable.
          </p>
        </div>

        <div className="mt-20 pt-12 border-t border-linetera-navy/20">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-linetera-navy/40 mb-6">Core Competencies</h3>
          <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
            <li>Full-stack Web Development</li>
            <li>Real-time IoT Dashboards</li>
            <li>UI/UX Engineering</li>
          </ul>
        </div>
      </div>
    </main>
    </>
  );
}

export default About;
