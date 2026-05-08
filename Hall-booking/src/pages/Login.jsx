import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, KeyRound, Building2 } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
  };

  return (
    <div className="animate-fade-in-up" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 150px)',
      padding: '48px 24px',
      width: '100%',
    }}>
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--border-radius-md)',
        width: '100%',
        maxWidth: '440px',
        padding: '40px 32px',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Top subtle decorative gradient line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
        }} />

        {/* Brand/Heading */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
            padding: '10px',
            borderRadius: '12px',
            color: '#ffffff',
            marginBottom: '16px',
            boxShadow: '0 4px 10px var(--primary-light)',
          }}>
            <Building2 size={24} />
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)' }}>Welcome Back</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Log in to manage bookings and explore saved halls.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Email Address</label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '12px 14px',
              backgroundColor: 'var(--bg-main)',
            }}>
              <Mail size={16} style={{ color: 'var(--text-muted)', marginRight: '10px' }} />
              <input
                type="email"
                required
                placeholder="yourname@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                }}
              />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600' }}>Password</label>
              <a href="#" style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}>
                Forgot Password?
              </a>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '12px 14px',
              backgroundColor: 'var(--bg-main)',
            }}>
              <Lock size={16} style={{ color: 'var(--text-muted)', marginRight: '10px' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
            <input type="checkbox" id="remember" style={{ accentColor: 'var(--primary)', cursor: 'pointer' }} />
            <label htmlFor="remember" style={{ fontSize: '13px', color: 'var(--text-secondary)', cursor: 'pointer', userSelect: 'none' }}>
              Remember me on this device
            </label>
          </div>

          <button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '14px', borderRadius: '8px', marginTop: '8px' }}>
            <KeyRound size={16} /> Log In
          </button>
        </form>

        <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '24px 0' }} />

        <div style={{ textAlign: 'center', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Don't have an account?{' '}
          <Link to="/get-started" style={{ fontWeight: '700', color: 'var(--primary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
