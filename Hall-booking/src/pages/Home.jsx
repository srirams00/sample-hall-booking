import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, MapPin, Users, Star, CheckCircle, Calendar, Shield, ArrowRight, Sparkles 
} from 'lucide-react';

import ballroomImg from '../assets/ballroom.png';
import conferenceImg from '../assets/conference.png';
import gardenImg from '../assets/garden.png';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredHalls = [
    {
      id: 1,
      name: 'Grand Ballroom Palace',
      location: 'Downtown City Center',
      capacity: '500 guests',
      rating: 4.8,
      reviews: 124,
      price: '$5000',
      tag: 'Wedding',
      image: ballroomImg,
    },
    {
      id: 2,
      name: 'Crystal Conference Hall',
      location: 'Business District',
      capacity: '300 guests',
      rating: 4.6,
      reviews: 89,
      price: '$3500',
      tag: 'Conference',
      image: conferenceImg,
    },
    {
      id: 3,
      name: 'Garden Vista Pavilion',
      location: 'Suburban Gardens',
      capacity: '250 guests',
      rating: 4.9,
      reviews: 156,
      price: '$4200',
      tag: 'Wedding',
      image: gardenImg,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      stars: 5,
      review: 'Absolutely stunning venue! The staff was incredibly helpful and the facilities exceeded our expectations. Our wedding was perfect!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
    },
    {
      name: 'Michael Chen',
      role: 'Event Coordinator',
      stars: 5,
      review: 'Great conference hall with all modern amenities. The booking process was smooth and professional. Highly recommended for corporate gatherings!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Sweet 16 Host',
      stars: 5,
      review: 'The garden setting was magical! Perfect for our outdoor ceremony and photo sessions. Every guest was amazed by the gorgeous pavilion.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120',
    },
  ];

  return (
    <div className="animate-fade-in-up" style={{ width: '100%' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.08) 0%, rgba(252, 252, 253, 0) 100%)',
        padding: '100px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Subtle decorative background glow circles */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--primary-light)',
            color: 'var(--primary-hover)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '24px',
            border: '1px solid rgba(245, 158, 11, 0.2)',
          }}>
            <Sparkles size={14} /> Simplified Hall Booking
          </div>
          
          <h1 style={{
            fontSize: 'min(52px, 9vw)',
            fontWeight: '800',
            lineHeight: '1.15',
            letterSpacing: '-1.5px',
            marginBottom: '20px',
            color: 'var(--text-primary)',
          }}>
            Find Your <span style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Perfect Venue</span>
          </h1>
          
          <p style={{
            fontSize: 'min(19px, 5vw)',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            fontWeight: '400',
            maxWidth: '600px',
            marginInline: 'auto',
          }}>
            Book stunning halls for weddings, conferences, and celebrations with instant booking confirmations.
          </p>

          {/* Search Bar Container */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '8px',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: 'var(--shadow-lg)',
            maxWidth: '685px',
            margin: '0 auto 48px',
            transition: 'all var(--transition-fast)',
          }}
          onFocusCapture={(e) => {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.boxShadow = '0 0 0 4px var(--primary-light)';
          }}
          onBlurCapture={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }}
          >
            <div style={{ color: 'var(--text-muted)', paddingLeft: '16px', display: 'flex', alignItems: 'center' }}>
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search by location, capacity, or event type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                padding: '12px 16px',
                fontSize: '16px',
                backgroundColor: 'transparent',
                color: 'var(--text-primary)',
                fontFamily: 'inherit',
              }}
            />
            <Link 
              to={`/browse-halls?q=${searchQuery}`}
              className="btn-primary" 
              style={{
                borderRadius: '50px',
                padding: '12px 28px',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              Search
            </Link>
          </div>

          {/* Quick Trust Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px',
            color: 'var(--text-secondary)',
            fontSize: '14px',
            fontWeight: '500',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ color: 'var(--primary)' }}><MapPin size={16} /></div>
              <span>500+ Venues</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ color: 'var(--primary)' }}><Users size={16} /></div>
              <span>20,000+ Happy Clients</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}><Star size={16} fill="var(--primary)" /></div>
              <span>4.8 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Key Value Props */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px 80px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {[
            {
              title: 'Verified Venues',
              description: 'All halls are verified and undergo rigorous quality and safety checks.',
              icon: <CheckCircle size={24} />,
            },
            {
              title: 'Easy Booking',
              description: 'Select your date, pick a customizable package, and book in minutes.',
              icon: <Calendar size={24} />,
            },
            {
              title: 'Secure Payment',
              description: 'Guaranteed safe and secure online payment processing with various options.',
              icon: <Shield size={24} />,
            },
          ].map((prop, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: '32px',
                borderRadius: 'var(--border-radius-md)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-normal)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{
                color: '#ffffff',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                width: '54px',
                height: '54px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 4px 10px var(--primary-light)',
              }}>
                {prop.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>{prop.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>{prop.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Halls Section */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px 80px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '32px',
        }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px' }}>Featured Halls</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Discover our most popular and highest rated venues</p>
          </div>
          <Link 
            to="/browse-halls" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '15px',
              fontWeight: '600',
              color: 'var(--primary)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }}>
          {featuredHalls.map((hall) => (
            <div
              key={hall.id}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-normal)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
                e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* Image & Floating Tag */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={hall.image} 
                  alt={hall.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-normal)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(11, 15, 25, 0.75)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  letterSpacing: '0.5px',
                }}>
                  {hall.tag}
                </span>
              </div>

              {/* Hall Info */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '700', marginBottom: '12px' }}>{hall.name}</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                    <MapPin size={15} style={{ color: 'var(--primary)' }} />
                    <span>{hall.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                    <Users size={15} style={{ color: 'var(--primary)' }} />
                    <span>Capacity: {hall.capacity}</span>
                  </div>
                </div>

                <hr style={{ border: 0, borderTop: '1px solid var(--border)', marginBottom: '16px' }} />

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={16} fill="var(--primary)" color="var(--primary)" />
                    <span style={{ fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)' }}>{hall.rating}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>({hall.reviews})</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary-hover)' }}>{hall.price}</span>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>/day</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(252, 252, 253, 0) 0%, rgba(245, 158, 11, 0.04) 100%)',
        padding: '80px 24px',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px' }}>What Our Customers Say</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Read reviews from our satisfied clients</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--border-radius-md)',
                  padding: '32px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all var(--transition-normal)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div>
                  {/* Rating Stars */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: 'var(--primary)' }}>
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--primary)" />
                    ))}
                  </div>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    marginBottom: '24px',
                  }}>
                    "{t.review}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--primary)',
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>{t.name}</h4>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '88px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          zIndex: 0,
        }} />
        {/* Glowing orange/gold mesh effect inside dark CTA */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-20%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-50%',
          right: '-20%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />

        <div style={{ maxWidth: '650px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: 'min(36px, 7.5vw)',
            fontWeight: '800',
            marginBottom: '16px',
            lineHeight: '1.2',
          }}>
            Ready to Book Your Dream Venue?
          </h2>
          <p style={{
            color: '#cbd5e1',
            fontSize: '16px',
            marginBottom: '40px',
            maxWidth: '520px',
            marginInline: 'auto',
            lineHeight: '1.6',
          }}>
            Join thousands of satisfied customers and make your wedding, corporate meeting, or family celebration truly unforgettable.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <Link 
              to="/browse-halls" 
              className="btn-primary" 
              style={{
                textDecoration: 'none',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '15px',
              }}
            >
              Browse Venues <ArrowRight size={16} />
            </Link>
            <Link 
              to="/get-started" 
              style={{
                textDecoration: 'none',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '15px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontWeight: '600',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
