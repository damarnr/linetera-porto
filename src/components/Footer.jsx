import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-linetera-navy text-white pt-24 pb-12 border-t border-transparent relative z-10 shadow-[0_-4px_20px_-15px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2 pr-8">
            <Link to="/" className="text-2xl tracking-tight flex items-center mb-6">
              <span className="font-bold text-white">line</span>
              <span className="font-bold text-linetera-orange">tera</span>
              <span className="font-normal text-white">labs</span>
            </Link>
            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-linetera-orange to-amber-400 mb-2">
              A tiny gleam for a giant leap.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed font-light max-w-sm">
              an independent digital laboratory that is home to various projects, experiments, and technological works that I develop.si inovatif dan terstruktur.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li><Link to="/about" className="hover:text-linetera-orange transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-linetera-orange transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-linetera-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li><Link to="/services/website" className="hover:text-linetera-orange transition-colors">Website Development</Link></li>
              <li><Link to="/services/mobile" className="hover:text-linetera-orange transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services/iot" className="hover:text-linetera-orange transition-colors">IoT Solutions</Link></li>
              <li><Link to="/services/uiux" className="hover:text-linetera-orange transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li>
                <a href="mailto:hello@lineteralabs.com" className="hover:text-linetera-orange transition-colors">lineteralabs@gmail.com</a>
              </li>
              <li>
                <a href="tel:+6281234567890" className="hover:text-linetera-orange transition-colors">+62 8964 9286 777</a>
              </li>
              <li className="pt-2 text-gray-400">
                <span>Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
          <p>&copy; {new Date().getFullYear()} lineteralabs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-linetera-orange transition-colors">LinkedIn</a>
            <a href="https://instagram.com/lineteralabs" target="_blank" rel="noopener noreferrer" className="hover:text-linetera-orange transition-colors">Instagram</a>
            <a href="#" className="hover:text-linetera-orange transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
