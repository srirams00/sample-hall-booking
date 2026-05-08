import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Building2, Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'var(--bg-nav)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      transition: 'background-color var(--transition-normal), border-color var(--transition-normal)',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
            padding: '8px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 10px rgba(245, 158, 11, 0.2)',
          }}>
            <Building2 size={22} />
          </div>
          <span style={{
            fontSize: '22px',
            fontWeight: '800',
            letterSpacing: '-0.5px',
            color: 'var(--text-primary)',
            background: 'linear-gradient(135deg, var(--text-primary) 50%, var(--primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            VenueHub
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px',
        }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '32px',
            fontWeight: '500',
            fontSize: '15px',
            color: 'var(--text-secondary)',
          }}>
            <li>
              <NavLink
                to="/"
                end
                style={({ isActive }) => ({
                  color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? '600' : '500',
                  position: 'relative',
                  padding: '8px 0',
                })}
              >
                {({ isActive }) => (
                  <>
                    Home
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px var(--primary)',
                      }} />
                    )}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse-halls"
                style={({ isActive }) => ({
                  color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? '600' : '500',
                  position: 'relative',
                  padding: '8px 0',
                })}
              >
                {({ isActive }) => (
                  <>
                    Browse Halls
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px var(--primary)',
                      }} />
                    )}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? '600' : '500',
                  position: 'relative',
                  padding: '8px 0',
                })}
              >
                {({ isActive }) => (
                  <>
                    About
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px var(--primary)',
                      }} />
                    )}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? '600' : '500',
                  position: 'relative',
                  padding: '8px 0',
                })}
              >
                {({ isActive }) => (
                  <>
                    Contact
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px var(--primary)',
                      }} />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Action Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-light)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Login/Get Started */}
          <div style={{ display: 'none', gap: '12px', alignItems: 'center' }} className="desktop-actions">
            <Link
              to="/login"
              style={{
                color: 'var(--text-secondary)',
                fontWeight: '600',
                fontSize: '15px',
                padding: '10px 18px',
                borderRadius: '8px',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.backgroundColor = 'var(--primary-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Login
            </Link>
            <Link to="/get-started" className="btn-primary" style={{ textDecoration: 'none' }}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '72px',
          left: 0,
          right: 0,
          backgroundColor: 'var(--bg-card)',
          borderBottom: '1px solid var(--border)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 999,
        }}>
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            listStyle: 'none',
            fontWeight: '600',
            fontSize: '16px',
          }}>
            <li>
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--text-primary)' })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse-halls"
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--text-primary)' })}
              >
                Browse Halls
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--text-primary)' })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--text-primary)' })}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <hr style={{ border: 0, borderTop: '1px solid var(--border)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              style={{
                textAlign: 'center',
                color: 'var(--text-primary)',
                fontWeight: '600',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              Login
            </Link>
            <Link
              to="/get-started"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{ justifyContent: 'center', textDecoration: 'none', padding: '12px' }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive styles */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
