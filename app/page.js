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
      direction: 'rtl',
      scrollSnapType: 'y mandatory',
      overflowY: 'scroll',
      height: '100vh',
      backgroundImage: "url('/wedding-bg.jpg')",
      backgroundAttachment: 'fixed', /* تثبيت الصورة لتكون امتداد لكل الصفحات */
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      
      {/* ================= الصفحة الأولى: الغلاف الأساسي ================= */}
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
          maxWidth: '400px',
          width: '90%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(3px)',
          padding: '2rem 1rem',
          borderRadius: '20px',
          border: '1px solid rgba(197, 160, 89, 0.3)'
        }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>
            WEDDING INVITATION
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: '700', color: '#1a2b4c', margin: '0.2rem 0', fontFamily: 'serif' }}>
            محمد & منار
          </h1>
          <p style={{ fontFamily: 'serif', fontSize: '1.2rem', color: '#2c436e', margin: 0, fontStyle: 'italic' }}>
            Mohammad & Manar
          </p>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059', margin: '0.5rem 0' }}></div>
          <p style={{ fontSize: '1.1rem', color: '#1a2b4c', fontWeight: '700', margin: 0 }}>
            05 August 2026
          </p>
          <a 
            href="#page2" 
            style={{
              marginTop: '1.2rem',
              padding: '0.5rem 1.4rem',
              backgroundColor: '#1a2b4c',
              color: '#ffffff',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            افتح الدعوة ↓
          </a>
        </div>
      </section>

      {/* ================= الصفحة الثانية: نص الدعوة الرسمي ================= */}
      <section id="page2" style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '420px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(8px)',
          padding: '2.5rem 1.5rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid #f0e6d2',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <span style={{ fontSize: '2rem', color: '#c5a059' }}>💍</span>
          <h2 style={{ fontFamily: 'serif', fontSize: '1.8rem', color: '#1a2b4c', margin: 0 }}>
            دعوة عقد قران
          </h2>
          <div style={{ width: '50px', height: '1px', backgroundColor: '#c5a059' }}></div>
          <p style={{ fontSize: '1rem', color: '#2c436e', lineHeight: '1.8', margin: 0 }}>
            "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
          </p>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
            يسعدنا ويشرفنا دعوتكم لمشاركتنا أثمن لحظات العمر وأجملها في حفل زفافنا. حضوركم يكتمل به فرحنا وتكتمل به مسرتنا.
          </p>
          <a href="#page3" style={{ marginTop: '0.8rem', color: '#c5a059', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem' }}>
            العداد التنازلي ↓
          </a>
        </div>
      </section>

      {/* ================= الصفحة الثالثة: العداد التنازلي والـ Dress Code ================= */}
      <section id="page3" style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '420px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(8px)',
          padding: '2.5rem 1.5rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid #f0e6d2',
          textAlign: 'center'
        }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '1.6rem', color: '#1a2b4c', marginBottom: '1.5rem' }}>
            العد التنازلي لليوم الموعود
          </h2>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            direction: 'ltr'
          }}>
            <div style={{ minWidth: '50px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.days}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0 }}>أيام</p>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#c5a059' }}>:</div>
            <div style={{ minWidth: '50px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.hours}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0 }}>ساعات</p>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#c5a059' }}>:</div>
            <div style={{ minWidth: '50px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.minutes}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0 }}>دقائق</p>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#c5a059' }}>:</div>
            <div style={{ minWidth: '50px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.seconds}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0 }}>ثواني</p>
            </div>
          </div>

          <div style={{ borderTop: '1px dashed #c5a059', margin: '1.5rem 0' }}></div>

          <h3 style={{ color: '#1a2b4c', fontSize: '1.1rem', marginBottom: '0.3rem' }}>👔 Dress Code</h3>
          <p style={{ color: '#c5a059', fontWeight: '700', fontSize: '1rem', margin: 0 }}>
            Black Tie / Formal Navy
          </p>

          <a href="#page4" style={{ display: 'inline-block', marginTop: '1.5rem', color: '#1a2b4c', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem' }}>
            الموقع والخريطة ↓
          </a>
        </div>
      </section>

      {/* ================= الصفحة الرابعة: المكان والزمان ================= */}
      <section id="page4" style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '420px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(8px)',
          padding: '2.5rem 1.5rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid #f0e6d2',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <span style={{ fontSize: '2rem' }}>📍</span>
          <h2 style={{ fontFamily: 'serif', fontSize: '1.6rem', color: '#1a2b4c', margin: 0 }}>
            المكان والزمان
          </h2>
          <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2c436e', margin: 0 }}>
            Yildiz Hall - قاعة يلدز
          </p>
          <p style={{ color: '#4b5563', fontSize: '0.9rem', margin: 0 }}>
            الأربعاء، 05 أغسطس 2026 الساعة 7:00 مساءً
          </p>

          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '0.6rem 1.4rem',
              backgroundColor: '#1a2b4c',
              color: '#ffffff',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginTop: '0.5rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            فتح الموقع على Google Maps 🗺️
          </a>

          <div style={{ borderTop: '1px dashed #c5a059', width: '100%', margin: '0.5rem 0' }}></div>

          <p style={{ fontSize: '0.9rem', color: '#1a2b4c', margin: 0, fontWeight: '600' }}>
            أهلاً وسهلاً بكم، ننتظركم بشوق! ✨
          </p>
        </div>
      </section>

    </main>
  );
}
