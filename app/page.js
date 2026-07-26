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
      minHeight: '100vh',
      backgroundImage: "url('/wedding-bg.jpg')",
      backgroundAttachment: 'fixed', /* يجعل الصورة ثابتة وممتدة مع السكرول */
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: '2rem 1rem 4rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem' /* مسافة بين الكروت للتصفح بالسكرول */
    }}>
      
      {/* ================= القسم الأول: الغلاف والأسماء ================= */}
      <section style={{
        minHeight: '85vh',
        width: '100%',
        maxWidth: '430px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'rgba(255, 255, 255, 0.45)',
          backdropFilter: 'blur(4px)',
          padding: '2.5rem 1.5rem',
          borderRadius: '24px',
          border: '1px solid rgba(197, 160, 89, 0.4)',
          boxShadow: '0 8px 32px rgba(26, 43, 76, 0.08)'
        }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>
            WEDDING INVITATION
          </p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1a2b4c', margin: '0.2rem 0', fontFamily: 'serif' }}>
            محمد & منار
          </h1>
          <p style={{ fontFamily: 'serif', fontSize: '1.25rem', color: '#2c436e', margin: 0, fontStyle: 'italic' }}>
            Mohammad & Manar
          </p>
          <div style={{ width: '50px', height: '1px', backgroundColor: '#c5a059', margin: '0.6rem 0' }}></div>
          <p style={{ fontSize: '1.1rem', color: '#1a2b4c', fontWeight: '700', margin: 0 }}>
            05 August 2026
          </p>

          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#1a2b4c', fontWeight: '600' }}>
            اسحب للأسفل لقراءة الدعوة ↓
          </p>
        </div>
      </section>

      {/* ================= القسم الثاني: نص الدعوة الرسمي ================= */}
      <section style={{
        width: '100%',
        maxWidth: '430px'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(10px)',
          padding: '2.5rem 1.5rem',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '1px solid #f0e6d2',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <span style={{ fontSize: '2.2rem', color: '#c5a059' }}>💍</span>
          <h2 style={{ fontFamily: 'serif', fontSize: '1.8rem', color: '#1a2b4c', margin: 0 }}>
            دعوة عقد قران
          </h2>
          <div style={{ width: '50px', height: '1px', backgroundColor: '#c5a059' }}></div>
          <p style={{ fontSize: '1.05rem', color: '#2c436e', lineHeight: '1.8', margin: 0, fontWeight: '600' }}>
            "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
          </p>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
            يسعدنا ويشرفنا دعوتكم لمشاركتنا أثمن لحظات العمر وأجملها في حفل زفافنا. حضوركم يكتمل به فرحنا وتكتمل به مسرتنا.
          </p>
        </div>
      </section>

      {/* ================= القسم الثالث: العداد التنازلي والـ Dress Code ================= */}
      <section style={{
        width: '100%',
        maxWidth: '430px'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(10px)',
          padding: '2.5rem 1.5rem',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
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
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0, fontWeight: '600' }}>أيام</p>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#c5a059' }}>:</div>
            <div style={{ minWidth: '50px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.hours}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0, fontWeight: '600' }}>ساعات</p>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#c5a059' }}>:</div>
            <div style={{ minWidth: '50px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.minutes}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0, fontWeight: '600' }}>دقائق</p>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#c5a059' }}>:</div>
            <div style={{ minWidth: '50px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.seconds}</span>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0, fontWeight: '600' }}>ثواني</p>
            </div>
          </div>

          <div style={{ borderTop: '1px dashed #c5a059', margin: '1.5rem 0' }}></div>

          <h3 style={{ color: '#1a2b4c', fontSize: '1.1rem', marginBottom: '0.3rem' }}>👔 Dress Code</h3>
          <p style={{ color: '#c5a059', fontWeight: '700', fontSize: '1rem', margin: 0 }}>
            Black Tie / Formal Navy
          </p>
        </div>
      </section>

      {/* ================= القسم الرابع: المكان وتأكيد الحضور ================= */}
      <section style={{
        width: '100%',
        maxWidth: '430px'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(10px)',
          padding: '2.5rem 1.5rem',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '1px solid #f0e6d2',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <span style={{ fontSize: '2.2rem' }}>📍</span>
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
              padding: '0.75rem 1.6rem',
              backgroundColor: '#1a2b4c',
              color: '#ffffff',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginTop: '0.5rem',
              boxShadow: '0 4px 15px rgba(26, 43, 76, 0.2)'
            }}
          >
            فتح الموقع على Google Maps 🗺️
          </a>

          <div style={{ borderTop: '1px dashed #c5a059', width: '100%', margin: '0.5rem 0' }}></div>

          <p style={{ fontSize: '0.95rem', color: '#1a2b4c', margin: 0, fontWeight: '600' }}>
            أهلاً وسهلاً بكم، ننتظركم بشوق! ✨
          </p>
        </div>
      </section>

    </main>
  );
}
