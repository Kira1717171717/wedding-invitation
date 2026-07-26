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
      backgroundColor: '#f8f4ee'
    }}>

      {/* استدعاء الخط الكوفي الناعم والفاخر من Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700;800&display=swap');
        
        body, main {
          font-family: 'Noto Kufi Arabic', sans-serif;
        }
      `}</style>

      {/* خلفية الصورة الثابتة - ممتدة ومتناسقة مع أبعاد الموبايل */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/wedding-bg.jpg')",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', /* تغطي كافة الشاشة بدون أطراف فرغة */
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* طبقة المحتوى الشفافة المتركزة بالفراغ والمتحركة بالسكرول */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 1rem'
      }}>

        {/* ================= القسم الأول: غلاف الدعوة والأسماء ================= */}
        <section style={{
          height: '100vh',
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            textShadow: '0 1px 2px rgba(255,255,255,0.8)' /* ظلال خفيفة لسهولة القراءة مباشرة فوق الخلفية */
          }}>
            <p style={{ fontSize: '0.75rem', letterSpacing: '2.5px', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>
              WEDDING INVITATION
            </p>
            <p style={{ fontSize: '0.85rem', color: '#c5a059', margin: 0, fontWeight: '600' }}>
              دعـوة زفــاف
            </p>
            <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1a2b4c', margin: '0.4rem 0' }}>
              محمد & منار
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#2c436e', margin: 0, fontWeight: '600', letterSpacing: '1px' }}>
              Mohammad & Manar
            </p>
            <div style={{ width: '45px', height: '1.5px', backgroundColor: '#c5a059', margin: '0.6rem auto' }}></div>
            <p style={{ fontSize: '0.95rem', color: '#1a2b4c', fontWeight: '700', margin: 0 }}>
              الأربعاء ، 05 أغسطس 2026
            </p>
            <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: 0, fontWeight: '600' }}>
              Wednesday, August 5, 2026
            </p>

            <p style={{ marginTop: '2.5rem', fontSize: '0.75rem', color: '#c5a059', fontWeight: '700' }}>
              اسحب للأسفل ↓ Scroll Down
            </p>
          </div>
        </section>

        {/* ================= القسم الثاني: نص الدعوة الرسمي باللغتين ================= */}
        <section style={{
          height: '100vh',
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: '82%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.7rem',
            textShadow: '0 1px 2px rgba(255,255,255,0.8)'
          }}>
            <span style={{ fontSize: '1.8rem' }}>💍</span>
            <h2 style={{ fontSize: '1.5rem', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>
              دعوة عقد قران
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#c5a059', margin: 0, fontWeight: '600', letterSpacing: '1px' }}>
              OFFICIAL INVITATION
            </p>

            <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059', margin: '0.3rem 0' }}></div>

            <p style={{ fontSize: '0.88rem', color: '#2c436e', lineHeight: '1.8', margin: 0, fontWeight: '600' }}>
              "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
            </p>

            <p style={{ fontSize: '0.82rem', color: '#4b5563', lineHeight: '1.7', margin: '0.5rem 0 0 0' }}>
              يسعدنا ويشرفنا دعوتكم لمشاركتنا أثمن لحظات العمر وأجملها في حفل زفافنا. حضوركم يكتمل به فرحنا.
            </p>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.5', margin: 0, fontStyle: 'italic' }}>
              We cordially invite you to celebrate our special day with us. Your presence will honor us.
            </p>
          </div>
        </section>

        {/* ================= القسم الثالث: العداد التنازلي والـ Dress Code ================= */}
        <section style={{
          height: '100vh',
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: '82%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem',
            textShadow: '0 1px 2px rgba(255,255,255,0.8)'
          }}>
            <h2 style={{ fontSize: '1.35rem', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>
              العد التنازلي لليوم الموعود
            </h2>
            <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0, fontWeight: '600', letterSpacing: '1px' }}>
              COUNTDOWN TO THE BIG DAY
            </p>

            {/* أرقام العد التنازلي */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.8rem',
              margin: '0.8rem 0',
              direction: 'ltr'
            }}>
              <div style={{ minWidth: '42px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1a2b4c' }}>{timeLeft.days}</span>
                <p style={{ fontSize: '0.65rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>أيام / Days</p>
              </div>
              <div style={{ fontSize: '1.2rem', color: '#c5a059' }}>:</div>
              <div style={{ minWidth: '42px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1a2b4c' }}>{timeLeft.hours}</span>
                <p style={{ fontSize: '0.65rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>ساعات / Hrs</p>
              </div>
              <div style={{ fontSize: '1.2rem', color: '#c5a059' }}>:</div>
              <div style={{ minWidth: '42px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1a2b4c' }}>{timeLeft.minutes}</span>
                <p style={{ fontSize: '0.65rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>دقائق / Min</p>
              </div>
              <div style={{ fontSize: '1.2rem', color: '#c5a059' }}>:</div>
              <div style={{ minWidth: '42px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1a2b4c' }}>{timeLeft.seconds}</span>
                <p style={{ fontSize: '0.65rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>ثواني / Sec</p>
              </div>
            </div>

            <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059', margin: '0.4rem 0' }}></div>

            <h3 style={{ color: '#1a2b4c', fontSize: '0.95rem', margin: 0, fontWeight: '700' }}>
              👔 الزي المعتمد / Dress Code
            </h3>
            <p style={{ color: '#c5a059', fontWeight: '700', fontSize: '0.85rem', margin: 0 }}>
              بدلة رسمية / Black Tie & Formal Navy
            </p>
          </div>
        </section>

        {/* ================= القسم الرابع: المكان والتأكيد ================= */}
        <section style={{
          height: '100vh',
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: '82%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.7rem',
            textShadow: '0 1px 2px rgba(255,255,255,0.8)'
          }}>
            <span style={{ fontSize: '1.8rem' }}>📍</span>
            <h2 style={{ fontSize: '1.4rem', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>
              المكان والزمان
            </h2>
            <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0, fontWeight: '600', letterSpacing: '1px' }}>
              LOCATION & TIME
            </p>

            <p style={{ fontSize: '1rem', fontWeight: '800', color: '#2c436e', margin: '0.3rem 0 0 0' }}>
              Yildiz Hall - قاعة يلدز
            </p>
            <p style={{ color: '#4b5563', fontSize: '0.82rem', margin: 0, fontWeight: '600' }}>
              الأربعاء، 05 أغسطس 2026 - الساعة 7:00 مساءً
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.75rem', margin: 0 }}>
              Wednesday, Aug 5, 2026 at 7:00 PM
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
                fontSize: '0.8rem',
                fontWeight: '600',
                marginTop: '0.5rem',
                boxShadow: '0 4px 15px rgba(26, 43, 76, 0.3)'
              }}
            >
              موقع القاعة 🗺️ Google Maps
            </a>

            <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059', margin: '0.5rem 0' }}></div>

            <p style={{ fontSize: '0.85rem', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>
              أهلاً وسهلاً بكم، ننتظركم بشوق! ✨
            </p>
            <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0, fontWeight: '600' }}>
              We Look Forward to Celebrating With You!
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
