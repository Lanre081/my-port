import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white flex flex-col font-sans">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* Main One-Page Content */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Skills */}
        <Skills />

        {/* 5. Selected Projects */}
        <Projects />

        {/* 6. Contact */}
        <Contact onShowToast={showToast} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
