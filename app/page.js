'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [rsvpData, setRsvpData] = useState({ name: '', guests: '1', status: 'yes' });
  const [submitted, setSubmitted] = useState(false);

  const audioRef = useRef(null);
  const mainRef = useRef(null);

  // فتح الدعوة وتشغيل الصوت
  const handleOpenInvitation = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    }
  };

  // التمرير التلقائي كل 4 ثوانٍ
  useEffect(() => {
    if (!isOpened) return;

    const autoScrollInterval = setInterval(() => {
      if (mainRef.current) {
        const currentScroll = mainRef.current.scrollTop;
        const pageHeight = window.innerHeight;
        const maxScroll = mainRef.current.scrollHeight - pageHeight;

        if (currentScroll >= maxScroll - 10) {
          mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          mainRef.current.scrollTo({ top: currentScroll + pageHeight, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(autoScrollInterval);
  }, [isOpened]);

  // العد التنازلي
  useEffect(() => {
    const targetDate = new Date('2026-08-05T19:30:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <audio ref={audioRef} src="/song.mp3" loop />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700;800&family=Cinzel:wght@500;700;800&display=swap');
        
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          font-family: 'Noto Kufi Arabic', sans-serif;
          background-color: #0a1128; /* Navy Blue */
          color: #ffffff;
        }

        @keyframes pulseNum {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); color: #d4af37; }
        }
        .num-animate {
          animation: pulseNum 2s infinite ease-in-out;
        }

        @keyframes floatDown {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        .swipe-hint {
          animation: floatDown 2s infinite ease-in-out;
        }

        /* حاوية النص بين الأعمدة وتحت الثريا بالزبط */
        .center-column-container {
          width: 75%;
          max-width: 380px;
          text-align: center;
          box-sizing: border-box;
          margin-top: 5vh;
          text-shadow: 0 2px 8px rgba(10, 17, 40, 0.9), 0 0 15px rgba(0, 0, 0, 0.7);
        }

        .rsvp-input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 0.8rem;
          border-radius: 8px;
          border: 1.5px solid rgba(212, 175, 55, 0.8);
          background: rgba(10, 17, 40, 0.75);
          color: #fff;
          font-family: inherit;
          font-size: 0.85rem;
          text-align: center;
          outline: none;
          backdrop-filter: blur(4px);
        }
      `}</style>

      {/* ================= المغلف ✉️ ================= */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(\'/envelope.jpg\')',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isOpened ? 0 : 1,
        visibility: isOpened ? 'hidden' : 'visible',
        transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.9s',
        pointerEvents: isOpened ? 'none' : 'auto'
      }}>
        <button 
          onClick={handleOpenInvitation}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'transparent',
            border: '2px solid #c39fa3',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 20px rgba(195, 159, 163, 0.4)'
          }}
        >
          <svg 
            width="38" 
            height="38" 
            viewBox="0 0 24 24" 
            fill="#c39fa3" 
            className="swipe-hint"
          >
            <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74 0-2.48-2.02-4.5-4.5-4.5S7 5.02 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.32-.16-.68-.25-1.05-.25H12V7.5c0-.83-.67-1.5-1.5-1.5S9 6.67 9 7.5v10.74l-3.44-.72c-.38-.08-.78.04-1.06.31l-.75.75 5.03 5.03c.51.51 1.2.8 1.92.8h6.58c1.27 0 2.37-.88 2.65-2.12l1.09-4.88c.18-.81-.19-1.63-.93-2.02z"/>
          </svg>
        </button>
      </div>

      {/* ================= الحاوية الرئيسية مع خلفية ممتدة مُمَيَّزة ================= */}
      <main 
        ref={mainRef}
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100vh',
          width: '100vw',
          overflowY: isOpened ? 'scroll' : 'hidden',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          direction: 'rtl',
          /* جعل خلفية الصورة كحلية وممتدة بشكل متكرر ونظيف على كامل طول الصفحات */
          backgroundImage: 'linear-gradient(rgba(10, 17, 40, 0.25), rgba(10, 17, 40, 0.25)), url(\'/wedding-bg.jpg\')',
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100vw auto',
          backgroundPosition: 'top center'
        }}
      >

        {/* الصفحة 1: المقدمة */}
        <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="center-column-container">
            <span style={{ fontSize: '1.8rem' }}>✨</span>
            <p style={{ fontSize: '1.15rem', color: '#ffffff', lineHeight: '2', fontWeight: '700', margin: '1rem 0' }}>
              "اخترنا أن نبدأ فصلنا القادم بين من كان لهم مكانٌ في حكايتنا..."
            </p>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#d4af37', margin: '1rem auto' }}></div>
          </div>
        </section>

        {/* الصفحة 2: الدعوة الرسمية والأسماء */}
        <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="center-column-container">
            <p style={{ fontSize: '0.9rem', color: '#d4af37', letterSpacing: '2px', margin: '0 0 0.5rem 0', fontWeight: '700' }}>بكل الحب يدعوكم</p>
            
            <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0.3rem 0', fontWeight: '700' }}>السيد يزن الخطبا</h3>
            <p style={{ fontSize: '0.85rem', color: '#d4af37', margin: '0' }}>و</p>
            <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0.3rem 0 1rem 0', fontWeight: '700' }}>السيد خيري نصرالله</h3>

            <p style={{ fontSize: '0.9rem', color: '#e5e7eb', margin: '0.5rem 0' }}>لمشاركتنا الاحتفال بزفاف</p>
            <p style={{ fontSize: '0.85rem', color: '#d4af37', margin: '0 0 0.5rem 0' }}>ابنهم وشقيقهم</p>

            <h1 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#ffffff', margin: '0.5rem 0' }}>محمد & منار</h1>
            <p style={{ fontSize: '1.1rem', color: '#d4af37', fontFamily: 'Cinzel', margin: 0, fontWeight: '700' }}>Mohammad & Manar</p>
          </div>
        </section>

        {/* الصفحة 3: الموعد والزفة */}
        <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="center-column-container">
            <p style={{ fontSize: '0.85rem', color: '#d4af37', letterSpacing: '3px', margin: 0, fontFamily: 'Cinzel', fontWeight: '700' }}>DATE & TIME</p>
            <h2 style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: '800', margin: '0.8rem 0 0.3rem 0' }}>الأربعاء ، 05 أغسطس 2026</h2>
            <p style={{ fontSize: '0.85rem', color: '#d4af37', fontFamily: 'Cinzel', margin: '0 0 1.2rem 0', fontWeight: '600' }}>Wednesday, August 5, 2026</p>
            
            <div style={{ width: '40px', height: '1px', backgroundColor: '#d4af37', margin: '0.8rem auto' }}></div>
            
            <p style={{ fontSize: '1rem', color: '#ffffff', fontWeight: '700', margin: '0.5rem 0' }}>
              🥁 تبدأ الزفة في تمام الساعة <span style={{ color: '#d4af37' }}>7:30</span> مساءً
            </p>
          </div>
        </section>

        {/* الصفحة 4: العد التنازلي */}
        <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="center-column-container">
            <p style={{ fontSize: '0.9rem', color: '#d4af37', letterSpacing: '3px', fontFamily: 'Cinzel', margin: '0 0 1.2rem 0', fontWeight: '700' }}>COUNTDOWN</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', direction: 'ltr' }}>
              <div>
                <span className="num-animate" style={{ fontSize: '2rem', fontWeight: '800', display: 'block' }}>{timeLeft.days}</span>
                <p style={{ fontSize: '0.75rem', color: '#d4af37', margin: 0, fontWeight: '700' }}>أيام</p>
              </div>
              <span style={{ fontSize: '1.5rem', color: '#d4af37' }}>:</span>
              <div>
                <span className="num-animate" style={{ fontSize: '2rem', fontWeight: '800', display: 'block' }}>{timeLeft.hours}</span>
                <p style={{ fontSize: '0.75rem', color: '#d4af37', margin: 0, fontWeight: '700' }}>ساعات</p>
              </div>
              <span style={{ fontSize: '1.5rem', color: '#d4af37' }}>:</span>
              <div>
                <span className="num-animate" style={{ fontSize: '2rem', fontWeight: '800', display: 'block' }}>{timeLeft.minutes}</span>
                <p style={{ fontSize: '0.75rem', color: '#d4af37', margin: 0, fontWeight: '700' }}>دقائق</p>
              </div>
              <span style={{ fontSize: '1.5rem', color: '#d4af37' }}>:</span>
              <div>
                <span className="num-animate" style={{ fontSize: '2rem', fontWeight: '800', display: 'block' }}>{timeLeft.seconds}</span>
                <p style={{ fontSize: '0.75rem', color: '#d4af37', margin: 0, fontWeight: '700' }}>ثواني</p>
              </div>
            </div>
          </div>
        </section>

        {/* الصفحة 5: المكان وخرائط جوجل */}
        <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="center-column-container">
            <span style={{ fontSize: '1.8rem' }}>📍</span>
            <p style={{ fontSize: '0.85rem', color: '#d4af37', letterSpacing: '3px', fontFamily: 'Cinzel', margin: '0.4rem 0 0 0', fontWeight: '700' }}>VENUE</p>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', margin: '0.4rem 0 0.2rem 0' }}>Yildiz Hall</h2>
            <p style={{ fontSize: '0.85rem', color: '#e5e7eb', fontFamily: 'Cinzel', margin: '0 0 1.5rem 0', fontWeight: '600' }}>Black Tie Weddings</p>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '0.7rem 1.5rem',
                backgroundColor: 'rgba(10, 17, 40, 0.85)',
                border: '1.5px solid #d4af37',
                color: '#d4af37',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '700',
                fontFamily: 'Cinzel',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                display: 'inline-block'
              }}
            >
              Open in Google Maps 🗺️
            </a>
          </div>
        </section>

        {/* الصفحة 6: تأكيد الحضور والملاحظات */}
        <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="center-column-container">
            <h2 style={{ fontSize: '1.4rem', fontFamily: 'Cinzel', color: '#d4af37', margin: '0 0 0.5rem 0', fontWeight: '800' }}>RSVP</h2>
            
            <p style={{ fontSize: '0.75rem', color: '#e5e7eb', margin: '0 0 1rem 0', lineHeight: '1.5' }}>
              نظرًا لمحدودية المقاعد، نرجو التكرم بتأكيد حضوركم مسبقًا.
            </p>

            {!submitted ? (
              <form onSubmit={handleRsvpSubmit} style={{ width: '100%' }}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  className="rsvp-input"
                  value={rsvpData.name}
                  onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                />
                
                <select 
                  className="rsvp-input"
                  value={rsvpData.guests}
                  onChange={(e) => setRsvpData({ ...rsvpData, guests: e.target.value })}
                >
                  <option value="1" style={{ background: '#0a1128' }}>1 Guest</option>
                  <option value="2" style={{ background: '#0a1128' }}>2 Guests</option>
                  <option value="3" style={{ background: '#0a1128' }}>3 Guests</option>
                </select>

                <select 
                  className="rsvp-input"
                  value={rsvpData.status}
                  onChange={(e) => setRsvpData({ ...rsvpData, status: e.target.value })}
                >
                  <option value="yes" style={{ background: '#0a1128' }}>Will Attend ✨</option>
                  <option value="no" style={{ background: '#0a1128' }}>Apologize 🤍</option>
                </select>

                <button 
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#d4af37',
                    color: '#0a1128',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    marginTop: '0.2rem',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
                  }}
                >
                  Confirm Attendance
                </button>
              </form>
            ) : (
              <div style={{ padding: '0.5rem 0' }}>
                <span style={{ fontSize: '1.8rem' }}>🎉</span>
                <p style={{ fontSize: '0.9rem', color: '#d4af37', fontWeight: '800', marginTop: '0.3rem' }}>شكراً لك! تم تسجيل حضورك بنجاح.</p>
              </div>
            )}
          </div>
        </section>

        {/* الصفحة 7: ملاحظة الأطفال والخاتمة */}
        <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="center-column-container">
            <span style={{ fontSize: '1.5rem' }}>🌙</span>
            <p style={{ fontSize: '0.8rem', color: '#ffffff', lineHeight: '1.8', fontWeight: '600', margin: '0.8rem 0' }}>
              حرصًا على راحة الجميع وأجواء الحفل، نعتذر عن استقبال الأطفال، مع تمنياتنا لهم بليلة هادئة وأحلام سعيدة.
            </p>
            
            <div style={{ width: '40px', height: '1px', backgroundColor: '#d4af37', margin: '1rem auto' }}></div>

            <h2 style={{ fontSize: '1.6rem', fontFamily: 'Cinzel', color: '#d4af37', margin: '0.5rem 0 0.2rem 0', fontWeight: '800' }}>Thank You</h2>
            <p style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: '700', margin: 0 }}>
              We Can't Wait To Celebrate With You
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
