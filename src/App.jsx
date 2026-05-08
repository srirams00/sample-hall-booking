import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import BrowseHalls from './pages/BrowseHalls';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import GetStarted from './pages/GetStarted';

// Helper component to scroll page to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // Check local storage or preference for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  // Apply dark-mode class to body element when state changes
  useEffect(() => {
    const bodyClass = document.body.classList;
    if (darkMode) {
      bodyClass.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      bodyClass.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ScrollToTop />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-primary)',
        transition: 'background-color var(--transition-normal), color var(--transition-normal)',
      }}>
        {/* Sticky Header Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Routed Content Area */}
        <main style={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse-halls" element={<BrowseHalls />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </main>

        {/* Detailed Footer */}
        <Footer />
      </div>
    </Router>
  );
}
