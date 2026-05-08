import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      padding: '64px 24px 32px',
      color: 'var(--text-secondary)',
      transition: 'all var(--transition-normal)',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px',
        marginBottom: '48px',
      }}>
        {/* Brand Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
              padding: '8px',
              borderRadius: '8px',
              color: '#ffffff',
            }}>
              <Building2 size={20} />
            </div>
            <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)' }}>
              HallBooking
            </span>
          </div>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Your trusted platform for booking the perfect venue for every occasion. Weddings, corporate conferences, and celebrations made unforgettable.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              {
                icon: (
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                ),
                url: 'https://facebook.com',
              },
              {
                icon: (
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                url: 'https://twitter.com',
              },
              {
                icon: (
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.051 1.96.23 2.673.914.706.707.89 1.49.946 2.727.04.944.051 1.246.051 3.66 0 2.414-.012 2.747-.05 3.69-.056 1.237-.24 2.02-.947 2.746-.707.706-1.49.89-2.727.946-.943.04-1.245.05-3.66.05-2.414 0-2.747-.012-3.69-.05-1.237-.056-2.02-.24-2.746-.947-.706-.707-.89-1.49-.946-2.727-.04-.943-.05-1.245-.05-3.66 0-2.414.012-2.747.05-3.69.056-1.237.24-2.02.947-2.746.707-.706 1.49-.89 2.727-.946.944-.04 1.246-.05 3.66-.05zm0 1.636c-2.396 0-2.687.01-3.63.054-.925.042-1.425.195-1.76.325-.443.172-.759.378-1.092.711-.333.333-.539.648-.711 1.092-.13.334-.283.834-.325 1.76-.044.942-.054 1.233-.054 3.629 0 2.396.01 2.687.054 3.63.042.925.195 1.425.325 1.76.172.443.378.759.711 1.092.333.333.648.539 1.092.711.334.13.834.283 1.76.325.942.044 1.233.054 3.629.054 2.396 0 2.687-.01 3.63-.054.925-.042 1.425-.195 1.76-.325.443-.172.759-.378 1.092-.711.333-.333.539-.648.711-1.092.13-.334.283-.834.325-1.76.044-.942.054-1.233.054-3.629 0-2.396-.01-2.687-.054-3.63-.042-.925-.195-1.425-.325-1.76-.172-.443-.378-.759-.711-1.092-.333-.333-.648-.539-1.092-.711-.334-.13-.834-.283-1.76-.325-.943-.044-1.234-.054-3.63-.054zM12 7.727a4.273 4.273 0 100 8.546 4.273 4.273 0 000-8.546zm0 1.636a2.636 2.636 0 110 5.272 2.636 2.636 0 010-5.272zm4.337-1.123a1.055 1.055 0 112.11 0 1.055 1.055 0 01-2.11 0z" clipRule="evenodd" />
                  </svg>
                ),
                url: 'https://instagram.com',
              },
              {
                icon: (
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                ),
                url: 'https://linkedin.com',
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '0.5px' }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
            <li>
              <Link to="/browse-halls" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                Browse Halls
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '0.5px' }}>
            Support
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
            <li><a href="#" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Help Center</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Terms of Service</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Privacy Policy</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>FAQs</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '0.5px' }}>
            Contact Us
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--primary)' }}><Phone size={16} /></div>
              <span>+1 (555) 123-4567</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--primary)' }}><Mail size={16} /></div>
              <span>info@hallbooking.com</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ color: 'var(--primary)', marginTop: '2px' }}><MapPin size={16} /></div>
              <span style={{ lineHeight: '1.4' }}>123 Business Ave, Suite 100,<br />New York, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>

      <hr style={{ border: 0, borderTop: '1px solid var(--border)', marginBottom: '24px' }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '13px',
        gap: '12px',
      }}>
        <span>&copy; {new Date().getFullYear()} HallBooking Inc. All rights reserved.</span>
        <span>Designed with &hearts; in gold & orange templates.</span>
      </div>
    </footer>
  );
}
