import React from 'react';

function Contact() {
  return (
    <main className="px-12 pt-32 pb-32 max-w-screen-2xl mx-auto w-full flex-1 animate-fade-in">
      <div className="max-w-2xl">
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
    </main>
  );
}

export default Contact;
