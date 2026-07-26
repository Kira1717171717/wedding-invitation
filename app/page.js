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
      position: 'relative',
      backgroundColor: '#f6f3ed' /* لون كريمي دافئ مكمل لأطراف الصورة */
    }}>

      {/* خلفية الصورة الثابتة بالأبعاد الكاملة بدون أي زوم */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/wedding-bg.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain', /* تضمن ظهور الصورة كاملة 100% دون تشويه */
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* طبقة المحتوى التي تتحرك بالسكرول فوق الصورة */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 1rem',
        gap: '8vh' /* مسافة مريحة بين الأقسام أثناء السكرول */
      }}>

        {/* ================= القسم الأول: الغلاف والأسماء ================= */}
        <section style={{
          minHeight: '80vh',
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(8px)',
            padding: '2.5rem 1.5rem',
            borderRadius: '20px',
            border: '1px solid rgba(197, 160, 89, 0.5)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>
              WEDDING INVITATION
            </p>
            <h1 style={{ fontSize: '2.4rem', fontWeight: '700', color: '#1a2b4c', margin: '0.3rem 0', fontFamily: 'serif' }}>
              محمد & منار
            </h1>
            <p style={{ fontFamily: 'serif', fontSize: '1.1rem', color: '#2c436e', margin: 0, fontStyle: 'italic' }}>
              Mohammad & Manar
            </p>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059', margin: '0.8rem auto' }}></div>
            <p style={{ fontSize: '1rem', color: '#1a2b4c', fontWeight: '700', margin: 0 }}>
              05 August 2026
            </p>
            <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#c5a059', fontWeight: '700' }}>
              اسحب للأسفل لقراءة الدعوة ↓
            </p>
          </div>
        </section>

        {/* ================= القسم الثاني: نص الدعوة الرسمي ================= */}
        <section style={{
          minHeight: '60vh',
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(10px)',
            padding: '2.5rem 1.5rem',
            borderRadius: '20px',
            border: '1px solid #f0e6d2',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
          }}>
            <span style={{ fontSize: '2rem', color: '#c5a059' }}>💍</span>
            <h2 style={{ fontFamily: 'serif', fontSize: '1.6rem', color: '#1a2b4c', margin: '0.5rem 0' }}>
              دعوة عقد قران
            </h2>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059', margin: '0.5rem auto 1rem auto' }}></div>
            <p style={{ fontSize: '0.95rem', color: '#2c436e', lineHeight: '1.8', margin: '0 0 1rem 0', fontWeight: '600' }}>
              "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
            </p>
            <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
              يسعدنا ويشرفنا دعوتكم لمشاركتنا أثمن لحظات العمر وأجملها في حفل زفافنا. حضوركم يكتمل به فرحنا.
            </p>
          </div>
        </section>

        {/* ================= القسم الثالث: العداد التنازلي والـ Dress Code ================= */}
        <section style={{
          minHeight: '60vh',
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(10px)',
            padding: '2.5rem 1.5rem',
            borderRadius: '20px',
            border: '1px solid #f0e6d2',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
          }}>
            <h2 style={{ fontFamily: 'serif', fontSize: '1.5rem', color: '#1a2b4c', marginBottom: '1.2rem' }}>
              العد التنازلي لليوم الموعود
            </h2>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.8rem',
              marginBottom: '1.5rem',
              direction: 'ltr'
            }}>
              <div style={{ minWidth: '45px' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.days}</span>
                <p style={{ fontSize: '0.7rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>أيام</p>
              </div>
              <div style={{ fontSize: '1.3rem', color: '#c5a059' }}>:</div>
              <div style={{ minWidth: '45px' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.hours}</span>
                <p style={{ fontSize: '0.7rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>ساعات</p>
              </div>
              <div style={{ fontSize: '1.3rem', color: '#c5a059' }}>:</div>
              <div style={{ minWidth: '45px' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.minutes}</span>
                <p style={{ fontSize: '0.7rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>دقائق</p>
              </div>
              <div style={{ fontSize: '1.3rem', color: '#c5a059' }}>:</div>
              <div style={{ minWidth: '45px' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.seconds}</span>
                <p style={{ fontSize: '0.7rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>ثواني</p>
              </div>
            </div>

            <div style={{ borderTop: '1px dashed #c5a059', margin: '1.2rem 0' }}></div>

            <h3 style={{ color: '#1a2b4c', fontSize: '1rem', marginBottom: '0.3rem' }}>👔 Dress Code</h3>
            <p style={{ color: '#c5a059', fontWeight: '700', fontSize: '0.95rem', margin: 0 }}>
              Black Tie / Formal Navy
            </p>
          </div>
        </section>

        {/* ================= القسم الرابع: المكان وتأكيد الحضور ================= */}
        <section style={{
          minHeight: '60vh',
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(10px)',
            padding: '2.5rem 1.5rem',
            borderRadius: '20px',
            border: '1px solid #f0e6d2',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.8rem'
          }}>
            <span style={{ fontSize: '2rem' }}>📍</span>
            <h2 style={{ fontFamily: 'serif', fontSize: '1.5rem', color: '#1a2b4c', margin: 0 }}>
              المكان والزمان
            </h2>
            <p style={{ fontSize: '1rem', fontWeight: '700', color: '#2c436e', margin: 0 }}>
              Yildiz Hall - قاعة يلدز
            </p>
            <p style={{ color: '#4b5563', fontSize: '0.85rem', margin: 0 }}>
              الأربعاء، 05 أغسطس 2026 الساعة 7:00 مساءً
            </p>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '0.7rem 1.4rem',
                backgroundColor: '#1a2b4c',
                color: '#ffffff',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginTop: '0.4rem',
                boxShadow: '0 4px 15px rgba(26, 43, 76, 0.2)'
              }}
            >
              فتح الموقع على Google Maps 🗺️
            </a>

            <div style={{ borderTop: '1px dashed #c5a059', width: '100%', margin: '0.5rem 0' }}></div>

            <p style={{ fontSize: '0.9rem', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>
              أهلاً وسهلاً بكم، ننتظركم بشوق! ✨
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
