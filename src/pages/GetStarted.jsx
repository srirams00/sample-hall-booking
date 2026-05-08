import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Building2, ShieldCheck, CheckSquare } from 'lucide-react';

export default function GetStarted() {
  const [role, setRole] = useState('Client'); // Client vs Venue Owner
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Account created successfully for ${formData.name} as a ${role}! Welcome to HallBooking.`);
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
        maxWidth: '520px',
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
          <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)' }}>Create Your Account</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Join the premium venue booking community.</p>
        </div>

        {/* Client vs Venue Owner Role Toggle */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginBottom: '28px',
          backgroundColor: 'var(--bg-main)',
          padding: '6px',
          borderRadius: '10px',
          border: '1px solid var(--border)',
        }}>
          <button
            type="button"
            onClick={() => setRole('Client')}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: role === 'Client' ? 'var(--bg-card)' : 'transparent',
              color: role === 'Client' ? 'var(--primary-hover)' : 'var(--text-secondary)',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              boxShadow: role === 'Client' ? 'var(--shadow-sm)' : 'none',
            }}
          >
            I want to book halls
          </button>
          <button
            type="button"
            onClick={() => setRole('Owner')}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: role === 'Owner' ? 'var(--bg-card)' : 'transparent',
              color: role === 'Owner' ? 'var(--primary-hover)' : 'var(--text-secondary)',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              boxShadow: role === 'Owner' ? 'var(--shadow-sm)' : 'none',
            }}
          >
            I want to host venues
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Full Name</label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '12px 14px',
              backgroundColor: 'var(--bg-main)',
            }}>
              <User size={16} style={{ color: 'var(--text-muted)', marginRight: '10px' }} />
              <input
                type="text"
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                placeholder="janedoe@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>Password</label>
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
                type="password"
                required
                placeholder="Create strong password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '4px' }}>
            <input type="checkbox" id="terms" required style={{ accentColor: 'var(--primary)', cursor: 'pointer', marginTop: '3px' }} />
            <label htmlFor="terms" style={{ fontSize: '13px', color: 'var(--text-secondary)', cursor: 'pointer', lineHeight: '1.4' }}>
              I agree to the{' '}
              <a href="#" style={{ fontWeight: '600', color: 'var(--primary)' }}>Terms of Service</a> and{' '}
              <a href="#" style={{ fontWeight: '600', color: 'var(--primary)' }}>Privacy Policy</a>.
            </label>
          </div>

          <button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '14px', borderRadius: '8px', marginTop: '8px' }}>
            <ShieldCheck size={16} /> Register as {role}
          </button>
        </form>

        <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '24px 0' }} />

        <div style={{ textAlign: 'center', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ fontWeight: '700', color: 'var(--primary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
