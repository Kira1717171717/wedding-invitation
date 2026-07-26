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
    <main style={{ backgroundColor: '#f2eae1', minHeight: '100vh', direction: 'rtl' }}>
      
      {/* القسم الأول: البطاقة كاملة */}
      <section style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 0.5rem',
        boxSizing: 'border-box'
      }}>
        
        {/* حاوية البطاقة بنفس أبعاد الصورة الطولية */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '430px', /* عرض الموبايل المثالي */
          aspectRatio: '9 / 16', /* الحفاظ على أبعاد الصورة الطولية كاملة */
          backgroundImage: "url('/wedding-bg.jpg')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(26, 43, 76, 0.15)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          
          {/* محتوى النص داخل الفراغ القوسي */}
          <div style={{
            marginTop: '8%', /* إزاحة للأسفل ليكون تحت الثريا تماماً */
            marginBottom: '10%', /* الحفاظ على مسافة فوق الطواويس */
            width: '75%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.3rem',
            zIndex: 2
          }}>

            <p style={{
              fontSize: '0.85rem',
              letterSpacing: '2px',
              color: '#2c436e',
              textTransform: 'uppercase',
              margin: '0',
              fontWeight: '600'
            }}>
              Wedding Invitation
            </p>

            <h1 style={{
              fontSize: '2.3rem',
              fontWeight: '700',
              color: '#1a2b4c',
              margin: '0.2rem 0',
              lineHeight: '1.2',
              fontFamily: 'serif'
            }}>
              محمد & منار
            </h1>

            <p style={{
              fontFamily: 'serif',
              fontSize: '1.2rem',
              color: '#2c436e',
              margin: '0',
              fontStyle: 'italic'
            }}>
              Mohammad & Manar
            </p>

            <div style={{
              width: '50px',
              height: '1px',
              backgroundColor: '#c5a059',
              margin: '0.4rem 0'
            }}></div>

            <p style={{
              fontSize: '1.05rem',
              color: '#1a2b4c',
              fontWeight: '700',
              margin: '0'
            }}>
              05 August 2026
            </p>

            <p style={{
              fontSize: '0.85rem',
              color: '#c5a059',
              fontWeight: '600',
              margin: '0',
              textTransform: 'uppercase'
            }}>
              Wednesday
            </p>

            {/* زر الانتقال للأسفل */}
            <a 
              href="#details" 
              style={{
                marginTop: '0.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.45rem 1.2rem',
                border: '1px solid #1a2b4c',
                borderRadius: '50px',
                color: '#1a2b4c',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: '600',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              التفاصيل ↓
            </a>

          </div>

        </div>

      </section>

      {/* القسم الثاني: التفاصيل والعداد التنازلي (تنزل له بالسكرول) */}
      <section id="details" style={{
        padding: '3rem 1.5rem 5rem 1.5rem',
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        
        <h2 style={{
          fontFamily: 'serif',
          fontSize: '1.8rem',
          color: '#1a2b4c',
          marginBottom: '0.8rem'
        }}>
          Our Wedding Day
        </h2>

        <p style={{
          fontSize: '1rem',
          color: '#4b5563',
          lineHeight: '1.7',
          marginBottom: '2rem'
        }}>
          يسعدنا دعوتكم لمشاركتنا فرحتنا في هذا اليوم المميز <br />
          <span style={{ fontSize: '0.85rem', color: '#6b7280', display: 'block', marginTop: '0.3rem' }}>
            We would be honored to celebrate this special day with you
          </span>
        </p>

        {/* العداد التنازلي */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          margin: '2rem 0',
          direction: 'ltr',
          background: '#ffffff',
          padding: '1.2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
          border: '1px solid #f0e6d2'
        }}>
          <div>
            <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.days}</span>
            <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: '0' }}>Days</p>
          </div>
          <div style={{ fontSize: '1.4rem', color: '#c5a059' }}>:</div>
          <div>
            <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.hours}</span>
            <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: '0' }}>Hours</p>
          </div>
          <div style={{ fontSize: '1.4rem', color: '#c5a059' }}>:</div>
          <div>
            <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.minutes}</span>
            <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: '0' }}>Mins</p>
          </div>
          <div style={{ fontSize: '1.4rem', color: '#c5a059' }}>:</div>
          <div>
            <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1a2b4c' }}>{timeLeft.seconds}</span>
            <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: '0' }}>Secs</p>
          </div>
        </div>

        {/* بطاقة الموقع واللبس */}
        <div style={{
          background: '#ffffff',
          padding: '1.8rem',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          border: '1px solid #f0e6d2'
        }}>
          <h3 style={{ color: '#1a2b4c', marginBottom: '0.4rem', fontSize: '1.1rem' }}>📍 المكان والتاريخ</h3>
          <p style={{ fontSize: '1.05rem', fontWeight: '600', color: '#2c436e', margin: '0' }}>Yildiz Hall - قاعة يلدز</p>
          <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '0.2rem' }}>الأربعاء، 05 أغسطس 2026</p>
          
          <div style={{ margin: '1.2rem 0', borderTop: '1px dashed #e5e7eb' }}></div>

          <h3 style={{ color: '#1a2b4c', marginBottom: '0.4rem', fontSize: '1.1rem' }}>👔 Dress Code</h3>
          <p style={{ color: '#c5a059', fontWeight: '600', margin: '0' }}>Black Tie / Formal Navy</p>
        </div>

      </section>

    </main>
  );
}
