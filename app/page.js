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

  // التمرير التلقائي كل 4 ثوانٍ بعد فتح المغلف
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

  // حساب العد التنازلي
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
          background-color: #ffffff;
          color: #0a1128; /* لون كحلي للنصوص */
        }

        /* تحريك أرقام العد التنازلي */
        @keyframes pulseNum {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); color: #b8860b; }
        }
        .num-animate {
          animation: pulseNum 2s infinite ease-in-out;
        }

        /* حركة خفيفة للسهم */
        @keyframes floatDown {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        .swipe-hint {
          animation: floatDown 2s infinite ease-in-out;
        }

        /* حاوية النص المباشرة الكحلية مع ظل فاتح لزيادة الوضوح */
        .direct-text-container {
          width: 85%;
          max-width: 420px;
          text-align: center;
          box-sizing: border-box;
          color: #0a1128;
          text-shadow: 0 1px 4px rgba(255, 255, 255, 0.9), 0 0 10px rgba(255, 255, 255, 0.7);
        }

        /* تخصيص مدخلات الـ RSVP باللون الكحلي والحدود الذهبية */
        .rsvp-input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 0.8rem;
          border-radius: 8px;
          border: 1.5px solid #d4af37;
          background: rgba(255, 255, 255, 0.85);
          color: #0a1128;
          font-family: inherit;
          font-size: 0.85rem;
          text-align: center;
          outline: none;
          backdrop-filter: blur(4px);
          font-weight: 700;
        }
      `}</style>

      {/* ================= الصفحة الأولى: المغلف ✉️ ================= */}
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

      {/* ================= التجربة الرئيسية والتمرير ================= */}
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
          direction: 'rtl'
        }}
      >

        {/* الصفحة الأولى بعد المغلف: بطاقة الدعوة الأصلية (wedding-bg.jpg) */}
        <section style={{ 
          height: '100vh', 
          width: '100%', 
          scrollSnapAlign: 'start', 
          scrollSnapStop: 'always', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundImage: 'url(\'/wedding-bg.jpg\')',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative'
        }}>
          <div className="direct-text-container" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <p style={{ fontSize: '0.9rem', color: '#b8860b', letterSpacing: '4px', margin: 0, fontFamily: 'Cinzel', fontWeight: '800' }}>WEDDING INVITATION</p>
            <h1 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#0a1128', margin: '0.8rem 0 0.2rem 0' }}>محمد & منار</h1>
            <p style={{ fontSize: '1.3rem', color: '#b8860b', fontFamily: 'Cinzel', margin: 0, fontWeight: '700' }}>Mohammad & Manar</p>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#d4af37', margin: '1.5rem auto' }}></div>
            <p style={{ fontSize: '1.1rem', color: '#0a1128', fontWeight: '800', margin: 0 }}>الأربعاء ، 05 أغسطس 2026</p>
            <p style={{ fontSize: '0.9rem', color: '#b8860b', fontFamily: 'Cinzel', margin: '0.3rem 0 0 0', fontWeight: '700' }}>Wednesday, August 5, 2026</p>
          </div>
          <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#0a1128', fontSize: '1.2rem', textShadow: '0 1px 3px #fff' }}>↓</div>
        </section>

        {/* باقي الصفحات على صورة (background.jpg) النقية بدون أي تغطية كحلية */}
        <div style={{
          position: 'relative',
          width: '100%',
          backgroundImage: 'url(\'/background.jpg\')',
          backgroundPosition: 'top center',
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% auto'
        }}>

          {/* الصفحة 2: نص الدعوة والأسماء */}
          <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="direct-text-container">
              <p style={{ fontSize: '1rem', color: '#b8860b', letterSpacing: '2px', margin: '0 0 0.8rem 0', fontWeight: '800' }}>بكل الحب يدعوكم</p>
              
              <h3 style={{ fontSize: '1.2rem', color: '#0a1128', margin: '0.4rem 0', fontWeight: '800' }}>السيد يزن الخطبا</h3>
              <p style={{ fontSize: '0.9rem', color: '#b8860b', margin: '0', fontWeight: '700' }}>و</p>
              <h3 style={{ fontSize: '1.2rem', color: '#0a1128', margin: '0.4rem 0 1.2rem 0', fontWeight: '800' }}>السيد خيري نصرالله</h3>

              <p style={{ fontSize: '1rem', color: '#0a1128', margin: '0.8rem 0', fontWeight: '700' }}>لمشاركتنا الاحتفال بزفاف</p>
              <p style={{ fontSize: '0.9rem', color: '#b8860b', margin: '0 0 0.8rem 0', fontWeight: '700' }}>ابنهم وشقيقهم</p>

              <h1 style={{ fontSize: '2.6rem', fontWeight: '800', color: '#0a1128', margin: '0.5rem 0' }}>محمد & منار</h1>
            </div>
            <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#0a1128', fontSize: '1.2rem', textShadow: '0 1px 3px #fff' }}>↓</div>
          </section>

          {/* الصفحة 3: الموعد والزفة */}
          <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="direct-text-container">
              <p style={{ fontSize: '0.9rem', color: '#b8860b', letterSpacing: '3px', margin: 0, fontFamily: 'Cinzel', fontWeight: '800' }}>DATE & TIME</p>
              <h2 style={{ fontSize: '1.4rem', color: '#0a1128', fontWeight: '800', margin: '1rem 0 0.4rem 0' }}>الأربعاء ، 05 أغسطس 2026</h2>
              <p style={{ fontSize: '0.9rem', color: '#b8860b', fontFamily: 'Cinzel', margin: '0 0 1.5rem 0', fontWeight: '700' }}>Wednesday, August 5, 2026</p>
              
              <div style={{ width: '50px', height: '1px', backgroundColor: '#d4af37', margin: '1rem auto' }}></div>
              
              <p style={{ fontSize: '1.1rem', color: '#0a1128', fontWeight: '800', margin: '0.8rem 0' }}>
                🥁 تبدأ الزفة في تمام الساعة <span style={{ color: '#b8860b' }}>7:30</span> مساءً
              </p>
            </div>
            <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#0a1128', fontSize: '1.2rem', textShadow: '0 1px 3px #fff' }}>↓</div>
          </section>

          {/* الصفحة 4: العد التنازلي */}
          <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="direct-text-container">
              <p style={{ fontSize: '1rem', color: '#b8860b', letterSpacing: '4px', fontFamily: 'Cinzel', margin: '0 0 1.5rem 0', fontWeight: '800' }}>COUNTDOWN</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', direction: 'ltr', color: '#0a1128' }}>
                <div>
                  <span className="num-animate" style={{ fontSize: '2.5rem', fontWeight: '800', display: 'block' }}>{timeLeft.days}</span>
                  <p style={{ fontSize: '0.8rem', color: '#b8860b', margin: 0, fontWeight: '800' }}>أيام</p>
                </div>
                <span style={{ fontSize: '1.8rem', color: '#b8860b' }}>:</span>
                <div>
                  <span className="num-animate" style={{ fontSize: '2.5rem', fontWeight: '800', display: 'block' }}>{timeLeft.hours}</span>
                  <p style={{ fontSize: '0.8rem', color: '#b8860b', margin: 0, fontWeight: '800' }}>ساعات</p>
                </div>
                <span style={{ fontSize: '1.8rem', color: '#b8860b' }}>:</span>
                <div>
                  <span className="num-animate" style={{ fontSize: '2.5rem', fontWeight: '800', display: 'block' }}>{timeLeft.minutes}</span>
                  <p style={{ fontSize: '0.8rem', color: '#b8860b', margin: 0, fontWeight: '800' }}>دقائق</p>
                </div>
                <span style={{ fontSize: '1.8rem', color: '#b8860b' }}>:</span>
                <div>
                  <span className="num-animate" style={{ fontSize: '2.5rem', fontWeight: '800', display: 'block' }}>{timeLeft.seconds}</span>
                  <p style={{ fontSize: '0.8rem', color: '#b8860b', margin: 0, fontWeight: '800' }}>ثواني</p>
                </div>
              </div>
            </div>
            <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#0a1128', fontSize: '1.2rem', textShadow: '0 1px 3px #fff' }}>↓</div>
          </section>

          {/* الصفحة 5: المكان وخرائط جوجل */}
          <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="direct-text-container">
              <span style={{ fontSize: '2.2rem' }}>📍</span>
              <p style={{ fontSize: '0.9rem', color: '#b8860b', letterSpacing: '4px', fontFamily: 'Cinzel', margin: '0.6rem 0 0 0', fontWeight: '800' }}>VENUE</p>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0.6rem 0 0.3rem 0', color: '#0a1128' }}>Yildiz Hall</h2>
              <p style={{ fontSize: '0.9rem', color: '#0a1128', fontFamily: 'Cinzel', margin: '0 0 2rem 0', fontWeight: '700' }}>Black Tie Weddings</p>
              
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  padding: '0.8rem 1.8rem',
                  backgroundColor: '#0a1128',
                  border: '2px solid #d4af37',
                  color: '#d4af37',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  fontFamily: 'Cinzel',
                  boxShadow: '0 5px 15px rgba(10,17,40,0.3)',
                  display: 'inline-block'
                }}
              >
                Open in Google Maps 🗺️
              </a>
            </div>
            <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#0a1128', fontSize: '1.2rem', textShadow: '0 1px 3px #fff' }}>↓</div>
          </section>

          {/* الصفحة 6: تأكيد الحضور RSVP */}
          <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="direct-text-container">
              <h2 style={{ fontSize: '1.6rem', fontFamily: 'Cinzel', color: '#0a1128', margin: '0 0 0.8rem 0', fontWeight: '800' }}>RSVP</h2>
              
              <p style={{ fontSize: '0.85rem', color: '#0a1128', margin: '0 0 1.2rem 0', lineHeight: '1.6', fontWeight: '700' }}>
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
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                  </select>

                  <select 
                    className="rsvp-input"
                    value={rsvpData.status}
                    onChange={(e) => setRsvpData({ ...rsvpData, status: e.target.value })}
                  >
                    <option value="yes">Will Attend ✨</option>
                    <option value="no">Apologize 🤍</option>
                  </select>

                  <button 
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      backgroundColor: '#0a1128',
                      color: '#d4af37',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '800',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      marginTop: '0.4rem',
                      boxShadow: '0 5px 15px rgba(10,17,40,0.3)'
                    }}
                  >
                    Confirm Attendance
                  </button>
                </form>
              ) : (
                <div style={{ padding: '0.8rem 0' }}>
                  <span style={{ fontSize: '2rem' }}>🎉</span>
                  <p style={{ fontSize: '1rem', color: '#0a1128', fontWeight: '800', marginTop: '0.5rem' }}>شكراً لك! تم تسجيل حضورك بنجاح.</p>
                </div>
              )}
            </div>
            <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#0a1128', fontSize: '1.2rem', textShadow: '0 1px 3px #fff' }}>↓</div>
          </section>

          {/* الصفحة 7 والأخيرة: ملاحظة الأطفال والخاتمة */}
          <section style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="direct-text-container">
              <span style={{ fontSize: '1.8rem' }}>🌙</span>
              <p style={{ fontSize: '0.9rem', color: '#0a1128', lineHeight: '2', fontWeight: '700', margin: '1rem 0' }}>
                حرصًا على راحة الجميع وأجواء الحفل، نعتذر عن استقبال الأطفال، مع تمنياتنا لهم بليلة هادئة وأحلام سعيدة.
              </p>
              
              <div style={{ width: '50px', height: '1px', backgroundColor: '#d4af37', margin: '1.2rem auto' }}></div>

              <h2 style={{ fontSize: '2rem', fontFamily: 'Cinzel', color: '#0a1128', margin: '0.8rem 0 0.3rem 0', fontWeight: '800' }}>Thank You</h2>
              <p style={{ fontSize: '1rem', color: '#b8860b', fontWeight: '800', margin: 0 }}>
                We Can't Wait To Celebrate With You
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
