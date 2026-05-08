import React from 'react';
import { Award, Target, Users2, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '500+', label: 'Stunning Venues' },
    { value: '10K+', label: 'Successful Events' },
    { value: '4.8★', label: 'Average Customer Rating' },
    { value: '24/7', label: 'Dedicated Support' },
  ];

  const values = [
    {
      title: 'Our Mission',
      description: 'To simplify event planning by offering an open, transparent, and seamless booking experience for clients and venue owners worldwide.',
      icon: <Target size={24} />,
    },
    {
      title: 'Quality Assurance',
      description: 'Every venue hosted on our platform is handpicked and quality-checked to meet our high standards of hospitality and comfort.',
      icon: <Award size={24} />,
    },
    {
      title: 'Absolute Trust',
      description: 'We guarantee transparent pricing with zero hidden fees and robust data protection systems to keep transactions fully secure.',
      icon: <ShieldCheck size={24} />,
    },
  ];

  return (
    <div className="animate-fade-in-up" style={{ width: '100%' }}>
      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.08) 0%, rgba(252, 252, 253, 0) 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px', color: 'var(--text-primary)' }}>About HallBooking</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', maxWidth: '600px', marginInline: 'auto' }}>
            We are passionate about bringing people together. Our state-of-the-art platform enables seamless, worry-free booking for beautiful event venues.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {values.map((v, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--border-radius-md)',
                padding: '36px 32px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-normal)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{
                color: 'var(--primary)',
                backgroundColor: 'var(--primary-light)',
                width: '50px',
                height: '50px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                {v.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>{v.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '64px 24px',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
        }}>
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div style={{
                fontSize: '40px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '8px',
              }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: '600' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Introduction Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px' }}>Meet Our Core Team</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>The passionate individuals building the future of event hosting</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '32px',
        }}>
          {[
            { name: 'Alex Thompson', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150' },
            { name: 'Nathalie Dupont', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150' },
            { name: 'Marcus Sterling', role: 'Lead Architect', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150' },
          ].map((member, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--border-radius-md)',
                padding: '32px 24px',
                textAlign: 'center',
                transition: 'all var(--transition-normal)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '16px',
                  border: '3px solid var(--primary-light)',
                }}
              />
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)' }}>{member.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
