import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Menu, X } from 'lucide-react';
import Footer from './Footer';

function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeClass = "text-linetera-navy font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-linetera-navy";
  const inactiveClass = "text-gray-500 hover:text-linetera-navy transition-colors";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-linetera-navy font-sans selection:bg-linetera-orange selection:text-white">
      {/* Header */}
      <header className={`flex justify-center items-center w-full shrink-0 fixed top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'bg-[#FAFAFA]/90 backdrop-blur-md border-gray-200/50 shadow-sm py-4' : 'bg-transparent border-transparent py-8'}`}>
        <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 flex justify-between items-center">
          <NavLink to="/" className="text-2xl tracking-tight flex items-center group">
            <span className="font-bold text-linetera-navy">line</span>
            <span className="font-bold text-linetera-orange">tera</span>
            <span className="font-normal text-linetera-navy">labs</span>
          </NavLink>

          <nav className="hidden md:flex space-x-12 text-sm tracking-wide">
            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              About
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Project
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

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-linetera-navy focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#FAFAFA] border-b border-gray-200/50 shadow-lg md:hidden animate-fade-in flex flex-col py-6 px-8 space-y-6">
            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass + " w-max" : inactiveClass + " w-max"}>
              About
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? activeClass + " w-max" : inactiveClass + " w-max"}>
              Project
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass + " w-max" : inactiveClass + " w-max"}>
              Contact
            </NavLink>
            <Link to="/contact" className="inline-flex justify-center items-center overflow-hidden rounded-full border border-linetera-orange text-linetera-orange bg-transparent px-6 py-3 font-medium transition-all duration-300 hover:bg-linetera-orange hover:text-white w-full text-center">
              Get in Touch
            </Link>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
