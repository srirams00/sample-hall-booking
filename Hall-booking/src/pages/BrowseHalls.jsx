import React, { useState } from 'react';
import { Search, MapPin, Users, Star, Filter, SlidersHorizontal, Calendar, CreditCard } from 'lucide-react';

import ballroomImg from '../assets/ballroom.png';
import conferenceImg from '../assets/conference.png';
import gardenImg from '../assets/garden.png';

export default function BrowseHalls() {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCapacity, setSelectedCapacity] = useState('All');

  const halls = [
    {
      id: 1,
      name: 'Grand Ballroom Palace',
      location: 'Downtown City Center',
      capacity: 500,
      rating: 4.8,
      reviews: 124,
      price: 5000,
      type: 'Wedding',
      image: ballroomImg,
      description: 'An exquisite luxury hall featuring majestic crystal chandeliers, high ceilings, and full banquet facilities.',
    },
    {
      id: 2,
      name: 'Crystal Conference Hall',
      location: 'Business District',
      capacity: 300,
      rating: 4.6,
      reviews: 89,
      price: 3500,
      type: 'Conference',
      image: conferenceImg,
      description: 'Sleek, high-tech venue equipped with premium audio-visual systems, high-speed fiber internet, and modular seating.',
    },
    {
      id: 3,
      name: 'Garden Vista Pavilion',
      location: 'Suburban Gardens',
      capacity: 250,
      rating: 4.9,
      reviews: 156,
      price: 4200,
      type: 'Wedding',
      image: gardenImg,
      description: 'A breathtaking outdoor pavilion nestled in lush botanical gardens, illuminated by charming sunset lighting.',
    },

    {
      id: 4,
      name: 'Royal Banquet Suite',
      location: 'Uptown Heights',
      capacity: 150,
      rating: 4.7,
      reviews: 64,
      price: 2500,
      type: 'Party',
      image: ballroomImg,
      description: 'Intimate, lavishly decorated venue ideal for birthdays, anniversaries, and custom-themed private celebrations.',
    },
    {
      id: 5,
      name: 'Executive Boardroom',
      location: 'Financial Plaza',
      capacity: 50,
      rating: 4.5,
      reviews: 32,
      price: 1200,
      type: 'Conference',
      image: conferenceImg,
      description: 'Premium, secure boardroom crafted for private leadership meetings, corporate seminars, and client pitches.',
    },
        {
      id: 6,
      name: 'tony masilan wedding hall',
      location: 'Financial Plaza',
      capacity: 500,
      rating: 5,
      reviews: 32000,
      price: 120000,
      type: 'Wedding hall',
      image: conferenceImg,
      description: 'Premium, secure boardroom crafted for private leadership meetings, corporate seminars, and client pitches.',
    },
    
  ];

  // Filtering Logic
  const filteredHalls = halls.filter((hall) => {
    const matchesSearch = hall.name.toLowerCase().includes(search.toLowerCase()) || 
                          hall.location.toLowerCase().includes(search.toLowerCase());
    const matchesType = selectedType === 'All' || hall.type === selectedType;
    
    let matchesCapacity = true;
    if (selectedCapacity === 'Small') matchesCapacity = hall.capacity <= 100;
    else if (selectedCapacity === 'Medium') matchesCapacity = hall.capacity > 100 && hall.capacity <= 300;
    else if (selectedCapacity === 'Large') matchesCapacity = hall.capacity > 300;

    return matchesSearch && matchesType && matchesCapacity;
  });

  return (
    <div className="animate-fade-in-up" style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '48px 24px 80px',
      width: '100%',
    }}>
      {/* Header Banner */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Explore Venues</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Find and reserve premium halls matching your exact capacity and event specifications.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px',
        alignItems: 'start',
      }} className="browse-layout">
        
        {/* Left Side Filters Sidebar */}
        <aside style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--border-radius-md)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          position: 'sticky',
          top: '96px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--text-primary)' }}>
            <SlidersHorizontal size={18} style={{ color: 'var(--primary)' }} />
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Filters</h3>
          </div>

          {/* Search Input inside Filters */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>Search By Name</label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '8px 12px',
              backgroundColor: 'var(--bg-main)',
            }}>
              <Search size={16} style={{ color: 'var(--text-muted)', marginRight: '8px' }} />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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

          {/* Type Filter */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>Event Type</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['All', 'Wedding', 'Conference', 'Party'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid transparent',
                    backgroundColor: selectedType === type ? 'var(--primary-light)' : 'transparent',
                    color: selectedType === type ? 'var(--primary-hover)' : 'var(--text-secondary)',
                    fontWeight: selectedType === type ? '600' : '500',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedType !== type) e.currentTarget.style.backgroundColor = 'var(--primary-light)';
                  }}
                  onMouseLeave={(e) => {
                    if (selectedType !== type) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Capacity Filter */}
          <div style={{ marginBottom: '8px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>Hall Capacity</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'All Capacities', value: 'All' },
                { label: 'Small (≤ 100 guests)', value: 'Small' },
                { label: 'Medium (100 - 300 guests)', value: 'Medium' },
                { label: 'Large (> 300 guests)', value: 'Large' },
              ].map((cap) => (
                <button
                  key={cap.value}
                  onClick={() => setSelectedCapacity(cap.value)}
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid transparent',
                    backgroundColor: selectedCapacity === cap.value ? 'var(--primary-light)' : 'transparent',
                    color: selectedCapacity === cap.value ? 'var(--primary-hover)' : 'var(--text-secondary)',
                    fontWeight: selectedCapacity === cap.value ? '600' : '500',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCapacity !== cap.value) e.currentTarget.style.backgroundColor = 'var(--primary-light)';
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCapacity !== cap.value) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {cap.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Side Venue Grid Results */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '500' }}>
            Showing {filteredHalls.length} out of {halls.length} available venues
          </div>

          {filteredHalls.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '64px 24px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--border-radius-md)',
              color: 'var(--text-secondary)',
            }}>
              <SlidersHorizontal size={40} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>No Venues Found</h3>
              <p style={{ fontSize: '14px' }}>Try adjusting your filters or search term to discover more stunning halls.</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}>
              {filteredHalls.map((hall) => (
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
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div style={{ position: 'relative', height: '200px' }}>
                    <img src={hall.image} alt={hall.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(11, 15, 25, 0.8)',
                      backdropFilter: 'blur(4px)',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '4px 10px',
                      borderRadius: '20px',
                    }}>
                      {hall.type}
                    </span>
                  </div>

                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>{hall.name}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}>{hall.description}</p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                        <MapPin size={14} style={{ color: 'var(--primary)' }} />
                        <span>{hall.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                        <Users size={14} style={{ color: 'var(--primary)' }} />
                        <span>Capacity: {hall.capacity} guests</span>
                      </div>
                    </div>

                    <hr style={{ border: 0, borderTop: '1px solid var(--border)', marginBottom: '14px' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Star size={15} fill="var(--primary)" color="var(--primary)" />
                        <span style={{ fontWeight: '700', fontSize: '13px' }}>{hall.rating}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>({hall.reviews})</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-hover)' }}>${hall.price}</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>/day</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => alert(`Redirecting to Booking Wizard for ${hall.name}...`)}
                      className="btn-primary" 
                      style={{ width: '100%', justifyContent: 'center', marginTop: '16px', borderRadius: '8px', fontSize: '14px', padding: '12px' }}
                    >
                      <Calendar size={15} /> Book Venue
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .browse-layout {
            grid-template-columns: 280px 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
