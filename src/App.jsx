import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from "@vercel/analytics/react";
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const PageLoader = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAFAFA] text-linetera-navy">
    <div className="w-12 h-12 border-4 border-linetera-navy/10 border-t-linetera-orange rounded-full animate-spin mb-4"></div>
    <p className="text-sm tracking-widest uppercase font-bold text-linetera-navy/40 animate-pulse">Loading</p>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    <Analytics />
    </HelmetProvider>
  );
}

export default App;
