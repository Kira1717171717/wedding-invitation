'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // موعد الزفاف: الأربعاء 05 أغسطس 2026
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
    <main style={{ 
      backgroundColor: '#f8f4ee', 
      direction: 'rtl',
      scrollSnapType: 'y mandatory',
      overflowY: 'scroll',
      height: '100vh'
    }}>
      
      {/* ================= الصفحة الأولى: غلاف البطاقة ================= */}
      <section id="page1" style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '430px',
          height: '92vh',
          backgroundImage: "url('/wedding-bg.jpg')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            marginTop: '5%',
            width: '75%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#2c436e', margin: 0, fontWeight: '600' }}>
              WEDDING INVITATION
            </p>
            <h1 style={{ fontSize: '2.2rem', fontWeight: '700', color: '#1a2b4c', margin: '0.2rem 0', fontFamily: 'serif' }}>
              محمد & منار
            </h1>
            <p style={{ fontFamily: 'serif', fontSize: '1.2rem', color: '#2c436e', margin: 0, fontStyle: 'italic' }}>
              Mohammad & Manar
            </p>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059', margin: '0.4rem 0' }}></div>
            <p style={{ fontSize: '1rem', color: '#1a2b4c', fontWeight: '700', margin: 0 }}>
              05 August 2026
            </p>
            <a 
              href="#page2" 
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1.3rem',
                border: '1px solid #1a2b4c',
                borderRadius: '50px',
                color: '#1a2b4c',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '600',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(4px)'
              }}
            >
              افتح الدعوة ↓
            </a>
          </div>
        </div>
      </section>

      {/* ================= الصفحة الثانية: نص الدعوة الرسمي ================= */}
      <section id="page2" style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1.5rem',
        boxSizing: 'border-box',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '450px',
          width: '100%',
          background: '#ffffff',
          padding: '3rem 2rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(26, 43, 76, 0.08)',
          border: '1px solid #f0e6d2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem'
        }}>
          <span style={{ fontSize: '2rem', color: '#c5a059' }}>💍</span>
          <h2 style={{ fontFamily: 'serif', fontSize: '1.8rem', color: '#1a2b4c', margin: 0 }}>
            دعوة عقد قران
          </h2>
          <div style={{ width: '60px', height: '1px', backgroundColor: '#c5a059' }}></div>
          <p style={{ fontSize: '1.1rem', color: '#2c436e', lineHeight: '1.8', margin: 0 }}>
            "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
          </p>
          <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
            يسعدنا ويشرفنا دعوتكم لمشاركتنا أثمن لحظات العمر وأجملها في حفل زفافنا. حضوركم يكتمل به فرحنا وتكتمل به مسرتنا.
          </p>
          <a 
            href="#page3" 
            style={{
              marginTop: '1rem',
              color: '#c5a059',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}
          >
            التفاصيل والعداد التنازلي ↓
          </a>
        </div>
      </section>

      {/* ================= الصفحة الثالثة: العداد التنازلي والـ Dress Code ================= */}
      <section id="page3" style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1.5rem',
        boxSizing: 'border-box',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '450px',
          width: '100%',
          background: '#ffffff',
          padding: '2.5rem 1.5rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(26, 43, 76, 0.08)',
          border: '1px solid #f0e6d2'
        }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '1.6rem', color: '#1a2b4c', marginBottom: '1.5rem' }}>
            العد التنازلي لليوم الموعود
          </h2>

          {/* العداد */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            direction: 'ltr'
          }}>
            <div style={{ minWidth: '55px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.days}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0 }}>أيام</p>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#c5a059' }}>:</div>
            <div style={{ minWidth: '55px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.hours}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0 }}>ساعات</p>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#c5a059' }}>:</div>
            <div style={{ minWidth: '55px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.minutes}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0 }}>دقائق</p>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#c5a059' }}>:</div>
            <div style={{ minWidth: '55px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.seconds}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0 }}>ثواني</p>
            </div>
          </div>

          <div style={{ borderTop: '1px dashed #e5e7eb', margin: '1.5rem 0' }}></div>

          <h3 style={{ color: '#1a2b4c', fontSize: '1.2rem', marginBottom: '0.5rem' }}>👔 Dress Code</h3>
          <p style={{ color: '#c5a059', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>
            Black Tie / Formal Navy
          </p>

          <a href="#page4" style={{ display: 'inline-block', marginTop: '2rem', color: '#1a2b4c', textDecoration: 'none', fontWeight: '600' }}>
            الموقع وتأكيد الحضور ↓
          </a>
        </div>
      </section>

      {/* ================= الصفحة الرابعة: المكان وتأكيد الحضور ================= */}
      <section id="page4" style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1.5rem',
        boxSizing: 'border-box',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '450px',
          width: '100%',
          background: '#ffffff',
          padding: '2.5rem 1.5rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(26, 43, 76, 0.08)',
          border: '1px solid #f0e6d2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem'
        }}>
          <span style={{ fontSize: '2rem' }}>📍</span>
          <h2 style={{ fontFamily: 'serif', fontSize: '1.6rem', color: '#1a2b4c', margin: 0 }}>
            المكان والزمان
          </h2>
          <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2c436e', margin: 0 }}>
            Yildiz Hall - قاعة يلدز
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', margin: 0 }}>
            الأربعاء، 05 أغسطس 2026 الساعة 7:00 مساءً
          </p>

          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '0.6rem 1.5rem',
              backgroundColor: '#1a2b4c',
              color: '#ffffff',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginTop: '0.5rem'
            }}
          >
            فتح الموقع على خريطة Google Maps 🗺️
          </a>

          <div style={{ borderTop: '1px dashed #e5e7eb', width: '100%', margin: '0.5rem 0' }}></div>

          <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: 0 }}>
            أهلاً وسهلاً بكم، ننتظركم بشوق! ✨
          </p>
        </div>
      </section>

    </main>
  );
}
