'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  // العداد التنازلي لموعد الزفاف
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // تاريخ الزفاف: 5 أغسطس 2026
    const targetDate = new Date('2026-08-05T19:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* القسم الأول - الهيرو وبطاقة الدعوة مع إدراج الصورة مباشرة */}
      <section 
        className="hero-container"
        style={{
          backgroundImage: "url('/wedding-bg.jpg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="hero-content">
          <h1 className="names-arabic">محمد & منار</h1>
          <p className="names-english">Mohammad & Manar</p>
          
          <div className="divider"></div>

          <p className="wedding-date">05 August 2026</p>
          <p className="wedding-day">Wednesday</p>

          <a href="#details" className="open-btn">
            Open Invitation ↓
          </a>
        </div>
      </section>

      {/* القسم الثاني - التفاصيل والدعوة */}
      <section id="details" className="section">
        <h2 className="section-title">Our Wedding Day</h2>
        
        <p className="section-subtitle">
          يسعدنا دعوتكم لمشاركتنا فرحتنا في هذا اليوم المميز <br />
          <span style={{ fontSize: '0.95rem', color: '#6b7280', display: 'block', marginTop: '0.5rem' }}>
            We would be honored to celebrate this special day with you
          </span>
        </p>

        {/* قسم العداد التنازلي */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          margin: '2.5rem 0',
          direction: 'ltr'
        }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--navy-primary)' }}>{timeLeft.days}</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--gold-accent)' }}>Days</p>
          </div>
          <div style={{ fontSize: '1.8rem', color: 'var(--gold-accent)' }}>:</div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--navy-primary)' }}>{timeLeft.hours}</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--gold-accent)' }}>Hours</p>
          </div>
          <div style={{ fontSize: '1.8rem', color: 'var(--gold-accent)' }}>:</div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--navy-primary)' }}>{timeLeft.minutes}</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--gold-accent)' }}>Mins</p>
          </div>
          <div style={{ fontSize: '1.8rem', color: 'var(--gold-accent)' }}>:</div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--navy-primary)' }}>{timeLeft.seconds}</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--gold-accent)' }}>Secs</p>
          </div>
        </div>

        {/* تفاصيل الموقع واللبس */}
        <div style={{
          background: '#ffffff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          margin: '2rem 0',
          border: '1px solid #f0e6d2'
        }}>
          <h3 style={{ color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>📍 Venue & Location</h3>
          <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--navy-light)' }}>Yildiz Hall</p>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem' }}>Wednesday, 05 August 2026</p>
          
          <div style={{ margin: '1.5rem 0', borderTop: '1px dashed #e5e7eb' }}></div>

          <h3 style={{ color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>👔 Dress Code</h3>
          <p style={{ color: 'var(--gold-accent)', fontWeight: '600' }}>Black Tie / Formal Navy</p>
        </div>
      </section>
    </main>
  );
}
