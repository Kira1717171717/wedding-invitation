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
      height: '100vh',
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
      scrollBehavior: 'smooth',
      backgroundColor: '#f8f4ee'
    }}>

      {/* إضافة الأنيمايشن للنصوص عبر CSS inline */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animated-content {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* ================= الصفحة الأولى: غلاف البطاقة ================= */}
      <section style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
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
          {/* محتوى داخل الفراغ المخصص */}
          <div className="animated-content" style={{
            marginTop: '2%',
            width: '70%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>
              WEDDING INVITATION
            </p>
            <h1 style={{ fontSize: '2.2rem', fontWeight: '700', color: '#1a2b4c', margin: '0.2rem 0', fontFamily: 'serif' }}>
              محمد & منار
            </h1>
            <p style={{ fontFamily: 'serif', fontSize: '1.2rem', color: '#2c436e', margin: 0, fontStyle: 'italic' }}>
              Mohammad & Manar
            </p>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059', margin: '0.5rem 0' }}></div>
            <p style={{ fontSize: '1rem', color: '#1a2b4c', fontWeight: '700', margin: 0 }}>
              05 August 2026
            </p>
            <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#c5a059', fontWeight: '700' }}>
              اسحب للأسفل ↓
            </p>
          </div>
        </div>
      </section>

      {/* ================= الصفحة الثانية: نص الدعوة الرسمي ================= */}
      <section style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
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
          {/* محتوى داخل الفراغ المخصص */}
          <div className="animated-content" style={{
            marginTop: '2%',
            width: '70%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.8rem'
          }}>
            <span style={{ fontSize: '1.8rem', color: '#c5a059' }}>💍</span>
            <h2 style={{ fontFamily: 'serif', fontSize: '1.6rem', color: '#1a2b4c', margin: 0 }}>
              دعوة عقد قران
            </h2>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></div>
            <p style={{ fontSize: '0.9rem', color: '#2c436e', lineHeight: '1.7', margin: 0, fontWeight: '600' }}>
              "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
            </p>
            <p style={{ fontSize: '0.82rem', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
              يسعدنا ويشرفنا دعوتكم لمشاركتنا أثمن لحظات العمر وأجملها في حفل زفافنا.
            </p>
          </div>
        </div>
      </section>

      {/* ================= الصفحة الثالثة: العداد التنازلي والـ Dress Code ================= */}
      <section style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
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
          {/* محتوى داخل الفراغ المخصص */}
          <div className="animated-content" style={{
            marginTop: '2%',
            width: '72%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem'
          }}>
            <h2 style={{ fontFamily: 'serif', fontSize: '1.4rem', color: '#1a2b4c', margin: 0 }}>
              العد التنازلي
            </h2>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.6rem',
              margin: '0.5rem 0',
              direction: 'ltr'
            }}>
              <div style={{ minWidth: '40px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.days}</span>
                <p style={{ fontSize: '0.65rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>أيام</p>
              </div>
              <div style={{ fontSize: '1.2rem', color: '#c5a059' }}>:</div>
              <div style={{ minWidth: '40px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.hours}</span>
                <p style={{ fontSize: '0.65rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>ساعات</p>
              </div>
              <div style={{ fontSize: '1.2rem', color: '#c5a059' }}>:</div>
              <div style={{ minWidth: '40px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.minutes}</span>
                <p style={{ fontSize: '0.65rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>دقائق</p>
              </div>
              <div style={{ fontSize: '1.2rem', color: '#c5a059' }}>:</div>
              <div style={{ minWidth: '40px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.seconds}</span>
                <p style={{ fontSize: '0.65rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>ثواني</p>
              </div>
            </div>

            <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059', margin: '0.2rem 0' }}></div>

            <h3 style={{ color: '#1a2b4c', fontSize: '0.95rem', margin: 0 }}>👔 Dress Code</h3>
            <p style={{ color: '#c5a059', fontWeight: '700', fontSize: '0.9rem', margin: 0 }}>
              Black Tie / Formal Navy
            </p>
          </div>
        </div>
      </section>

      {/* ================= الصفحة الرابعة: المكان وتأكيد الحضور ================= */}
      <section style={{
        height: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
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
          {/* محتوى داخل الفراغ المخصص */}
          <div className="animated-content" style={{
            marginTop: '2%',
            width: '72%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem'
          }}>
            <span style={{ fontSize: '1.8rem' }}>📍</span>
            <h2 style={{ fontFamily: 'serif', fontSize: '1.4rem', color: '#1a2b4c', margin: 0 }}>
              المكان والزمان
            </h2>
            <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#2c436e', margin: 0 }}>
              Yildiz Hall - قاعة يلدز
            </p>
            <p style={{ color: '#4b5563', fontSize: '0.8rem', margin: 0 }}>
              الأربعاء، 05 أغسطس 2026
            </p>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '0.5rem 1.2rem',
                backgroundColor: '#1a2b4c',
                color: '#ffffff',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: '600',
                marginTop: '0.4rem',
                boxShadow: '0 4px 12px rgba(26, 43, 76, 0.2)'
              }}
            >
              موقع القاعة 🗺️
            </a>

            <p style={{ fontSize: '0.85rem', color: '#1a2b4c', marginTop: '0.5rem', fontWeight: '700' }}>
              ننتظركم بشوق! ✨
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
