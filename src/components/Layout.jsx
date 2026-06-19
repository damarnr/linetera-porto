import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

function Layout() {
  const activeClass = "text-linetera-navy font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-linetera-navy";
  const inactiveClass = "text-gray-500 hover:text-linetera-navy transition-colors";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-linetera-navy font-sans selection:bg-linetera-orange selection:text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 md:px-16 py-8 shrink-0 bg-[#FAFAFA]/80 backdrop-blur-md sticky top-0 z-50 border-b border-transparent transition-all duration-300">
        <NavLink to="/" className="text-2xl tracking-tight flex items-center group">
          <span className="font-bold text-linetera-navy">line</span>
          <span className="font-bold text-linetera-orange">tera</span>
          <span className="font-normal text-linetera-navy">labs</span>
        </NavLink>

        <nav className="hidden md:flex space-x-12 text-sm tracking-wide">
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Contact
          </NavLink>
        </nav>

        <Link to="/contact" className="hidden md:inline-flex group relative items-center justify-center overflow-hidden rounded-full border border-linetera-orange text-linetera-orange bg-transparent px-6 py-2.5 text-sm font-medium transition-all duration-300 shadow-[0_0_10px_rgba(245,166,35,0.1)] hover:shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:bg-linetera-orange hover:text-white hover:-translate-y-0.5">
          <span className="relative z-10 flex items-center">
            Get in Touch
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 opacity-80 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Link>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-gray-100 relative z-10 shadow-[0_-4px_20px_-15px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-2 pr-8">
              <Link to="/" className="text-2xl tracking-tight flex items-center mb-6">
                <span className="font-bold text-linetera-navy">line</span>
                <span className="font-bold text-linetera-orange">tera</span>
                <span className="font-normal text-linetera-navy">labs</span>
              </Link>
              <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-linetera-orange to-amber-400 mb-2">
                A tiny gleam for a giant leap.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-light max-w-sm">
                LineTera Labs adalah mitra teknologi digital yang membantu bisnis berkembang melalui solusi inovatif dan terstruktur.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-gray-600 font-light">
                <li><Link to="/about" className="hover:text-linetera-navy transition-colors">About Us</Link></li>
                <li><Link to="/portfolio" className="hover:text-linetera-navy transition-colors">Portfolio</Link></li>
                <li><Link to="/careers" className="hover:text-linetera-navy transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Services</h3>
              <ul className="space-y-4 text-sm text-gray-600 font-light">
                <li><Link to="/services/website" className="hover:text-linetera-navy transition-colors">Website Development</Link></li>
                <li><Link to="/services/mobile" className="hover:text-linetera-navy transition-colors">Mobile App Development</Link></li>
                <li><Link to="/services/iot" className="hover:text-linetera-navy transition-colors">IoT Solutions</Link></li>
                <li><Link to="/services/uiux" className="hover:text-linetera-navy transition-colors">UI/UX Design</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Contact</h3>
              <ul className="space-y-4 text-sm text-gray-600 font-light">
                <li>
                  <a href="mailto:hello@lineteralabs.com" className="hover:text-linetera-navy transition-colors">hello@lineteralabs.com</a>
                </li>
                <li>
                  <a href="tel:+6281234567890" className="hover:text-linetera-navy transition-colors">+62 812 3456 7890</a>
                </li>
                <li className="pt-2">
                  <span>Indonesia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
            <p>&copy; {new Date().getFullYear()} lineteralabs. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-linetera-navy transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-linetera-navy transition-colors">Instagram</a>
              <a href="#" className="hover:text-linetera-navy transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
