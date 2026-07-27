'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [rsvpData, setRsvpData] = useState({ name: '', guests: '1', status: 'yes' });
  const [submitted, setSubmitted] = useState(false);

  const audioRef = useRef(null);
  const s2 = useRef(null);
  const s3 = useRef(null);
  const s4 = useRef(null);
  const s5 = useRef(null);
  const s6 = useRef(null);
  const s7 = useRef(null);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    }
  };

  useEffect(() => {
    const targetDate = new Date('2026-08-05T19:00:00').getTime();
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
          background-color: #0b131f;
          color: #ffffff;
        }

        /* صورة خلفية الدعوة الأساسية wedding-bg.jpg لتغطي كامل الصفحة خلف البطاقات */
        .global-wedding-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-image: url('/wedding-bg.jpg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          z-index: 1;
        }

        /* طبقة عزل خفيفة لضمان وضوح النصوص فوق الصورة */
        .bg-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(11, 19, 31, 0.4);
          z-index: 2;
        }

        /* لمسة لمعان ذهبي ناعم يمر على الثريا والإطار كل 8-10 ثواني */
        @keyframes peacockGlow {
          0% {
            background-position: -200% 0;
            opacity: 0.3;
          }
          20% {
            background-position: 200% 0;
            opacity: 0.8;
          }
          100% {
            background-position: 200% 0;
            opacity: 0.3;
          }
        }

        .shimmer-frame {
          position: relative;
          overflow: hidden;
        }

        .shimmer-frame::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            110deg, 
            transparent 30%, 
            rgba(212, 175, 55, 0.4) 50%, 
            transparent 70%
          );
          background-size: 200% 100%;
          animation: peacockGlow 9s infinite ease-in-out;
          pointer-events: none;
          border-radius: inherit;
        }

        /* حركة خفيفة للسهام السفلية لتوجيه المستخدم بالسحب */
        @keyframes floatDown {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        .swipe-hint {
          animation: floatDown 2s infinite ease-in-out;
        }

        /* أنيميشن الأرقام للعد التنازلي */
        @keyframes pulseNum {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); color: #d4af37; }
        }
        .num-animate {
          animation: pulseNum 2s infinite ease-in-out;
        }

        .card-box {
          width: 88%;
          max-width: 360px;
          background: rgba(13, 27, 42, 0.82);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(212, 175, 55, 0.6);
          border-radius: 16px;
          padding: 2rem 1.2rem;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
          z-index: 10;
        }

        /* تخصيص مدخلات الـ RSVP */
        .rsvp-input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 0.8rem;
          border-radius: 8px;
          border: 1px solid rgba(212, 175, 55, 0.4);
          background: rgba(255, 255, 255, 0.07);
          color: #fff;
          font-family: inherit;
          font-size: 0.85rem;
          text-align: center;
          outline: none;
        }
        .rsvp-input:focus {
          border-color: #d4af37;
          background: rgba(255, 255, 255, 0.12);
        }
      `}</style>

      {/* خلفية الصورة العامة wedding-bg.jpg */}
      <div className="global-wedding-bg" />
      <div className="bg-overlay" />

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

      {/* ================= التجربة الرئيسية والتمرير (الصفحات 2 إلى 7) ================= */}
      <main style={{
        position: 'relative',
        zIndex: 5,
        height: '100vh',
        width: '100vw',
        overflowY: isOpened ? 'scroll' : 'hidden',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        direction: 'rtl'
      }}>

        {/* الصفحة الثانية */}
        <section ref={s2} style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div className="card-box shimmer-frame">
            <p style={{ fontSize: '0.8rem', color: '#d4af37', letterSpacing: '3px', margin: 0, fontFamily: 'Cinzel' }}>WEDDING INVITATION</p>
            <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', margin: '0.8rem 0 0.2rem 0' }}>محمد & منار</h1>
            <p style={{ fontSize: '1.1rem', color: '#d4af37', fontFamily: 'Cinzel', margin: 0, fontWeight: '600' }}>Mohammad & Manar</p>
            <div style={{ width: '40px', height: '1.5px', backgroundColor: '#d4af37', margin: '1rem 0' }}></div>
            <p style={{ fontSize: '0.9rem', color: '#e5e7eb', fontWeight: '600', margin: 0 }}>الأربعاء ، 05 أغسطس 2026</p>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'Cinzel', margin: '0.2rem 0 1.5rem 0' }}>Wednesday, August 5, 2026</p>

            <div style={{ padding: '0.6rem 1.4rem', backgroundColor: '#d4af37', color: '#0b131f', borderRadius: '30px', fontWeight: '700', fontSize: '0.85rem', fontFamily: 'Cinzel', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)' }}>
              Open Invitation
            </div>
          </div>
          <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#d4af37', fontSize: '1.2rem', zIndex: 10 }}>↓</div>
        </section>

        {/* الصفحة الثالثة */}
        <section ref={s3} style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div className="card-box shimmer-frame">
            <span style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>✨</span>
            <p style={{ fontSize: '0.9rem', color: '#ffffff', lineHeight: '1.8', fontWeight: '600', margin: 0 }}>
              بكل حب وفرح،<br />
              نتشرف بدعوتكم لمشاركتنا أجمل يوم في حياتنا،<br />
              فوجودكم هو أجمل هدية لنا.
            </p>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#d4af37', margin: '1.2rem 0' }}></div>
            <p style={{ fontSize: '0.8rem', color: '#d4af37', fontFamily: 'Cinzel', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
              With love and joy,<br />
              We warmly invite you to celebrate our wedding day.<br />
              Your presence will make our celebration truly special.
            </p>
          </div>
          <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#d4af37', fontSize: '1.2rem', zIndex: 10 }}>↓</div>
        </section>

        {/* الصفحة الرابعة */}
        <section ref={s4} style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div className="card-box shimmer-frame">
            <p style={{ fontSize: '0.8rem', color: '#d4af37', letterSpacing: '2px', fontFamily: 'Cinzel', margin: '0 0 1rem 0' }}>COUNTDOWN</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', direction: 'ltr' }}>
              <div>
                <span className="num-animate" style={{ fontSize: '1.8rem', fontWeight: '800', display: 'block' }}>{timeLeft.days}</span>
                <p style={{ fontSize: '0.65rem', color: '#d4af37', margin: 0 }}>أيام</p>
              </div>
              <span style={{ fontSize: '1.3rem', color: '#d4af37' }}>:</span>
              <div>
                <span className="num-animate" style={{ fontSize: '1.8rem', fontWeight: '800', display: 'block' }}>{timeLeft.hours}</span>
                <p style={{ fontSize: '0.65rem', color: '#d4af37', margin: 0 }}>ساعات</p>
              </div>
              <span style={{ fontSize: '1.3rem', color: '#d4af37' }}>:</span>
              <div>
                <span className="num-animate" style={{ fontSize: '1.8rem', fontWeight: '800', display: 'block' }}>{timeLeft.minutes}</span>
                <p style={{ fontSize: '0.65rem', color: '#d4af37', margin: 0 }}>دقائق</p>
              </div>
              <span style={{ fontSize: '1.3rem', color: '#d4af37' }}>:</span>
              <div>
                <span className="num-animate" style={{ fontSize: '1.8rem', fontWeight: '800', display: 'block' }}>{timeLeft.seconds}</span>
                <p style={{ fontSize: '0.65rem', color: '#d4af37', margin: 0 }}>ثواني</p>
              </div>
            </div>
          </div>
          <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#d4af37', fontSize: '1.2rem', zIndex: 10 }}>↓</div>
        </section>

        {/* الصفحة الخامسة */}
        <section ref={s5} style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div className="card-box shimmer-frame">
            <span style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>📍</span>
            <p style={{ fontSize: '0.85rem', color: '#d4af37', letterSpacing: '2px', fontFamily: 'Cinzel', margin: 0 }}>VENUE</p>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0.4rem 0 0.2rem 0' }}>Yildiz Hall</h2>
            <p style={{ fontSize: '0.8rem', color: '#9ca3af', fontFamily: 'Cinzel', margin: '0 0 1rem 0' }}>Black Tie Weddings</p>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '0.6rem 1.3rem',
                backgroundColor: 'transparent',
                border: '1.5px solid #d4af37',
                color: '#d4af37',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: '600',
                fontFamily: 'Cinzel',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              Open in Google Maps 🗺️
            </a>
          </div>
          <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#d4af37', fontSize: '1.2rem', zIndex: 10 }}>↓</div>
        </section>

        {/* الصفحة السادسة */}
        <section ref={s6} style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div className="card-box shimmer-frame">
            <h2 style={{ fontSize: '1.3rem', fontFamily: 'Cinzel', color: '#d4af37', margin: '0 0 1rem 0' }}>RSVP</h2>
            
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
                  <option value="1" style={{ background: '#0b131f' }}>1 Guest</option>
                  <option value="2" style={{ background: '#0b131f' }}>2 Guests</option>
                  <option value="3" style={{ background: '#0b131f' }}>3 Guests</option>
                </select>

                <select 
                  className="rsvp-input"
                  value={rsvpData.status}
                  onChange={(e) => setRsvpData({ ...rsvpData, status: e.target.value })}
                >
                  <option value="yes" style={{ background: '#0b131f' }}>Will Attend ✨</option>
                  <option value="no" style={{ background: '#0b131f' }}>Apologize 🤍</option>
                </select>

                <button 
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#d4af37',
                    color: '#0b131f',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    marginTop: '0.4rem',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  Confirm Attendance
                </button>
              </form>
            ) : (
              <div style={{ padding: '1rem 0' }}>
                <span style={{ fontSize: '2rem' }}>🎉</span>
                <p style={{ fontSize: '0.9rem', color: '#d4af37', fontWeight: '700', marginTop: '0.5rem' }}>شكراً لك! تم تسجيل حضورك بنجاح.</p>
              </div>
            )}
          </div>
          <div className="swipe-hint" style={{ position: 'absolute', bottom: '25px', color: '#d4af37', fontSize: '1.2rem', zIndex: 10 }}>↓</div>
        </section>

        {/* الصفحة السابعة */}
        <section ref={s7} style={{ height: '100vh', width: '100%', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div className="card-box shimmer-frame">
            <h2 style={{ fontSize: '1.8rem', fontFamily: 'Cinzel', color: '#d4af37', margin: '0 0 0.5rem 0' }}>Thank You</h2>
            <p style={{ fontSize: '0.95rem', color: '#ffffff', lineHeight: '1.6', fontWeight: '600', margin: 0 }}>
              We Can'Wait To Celebrate With You
            </p>
            <div style={{ width: '40px', height: '1.5px', backgroundColor: '#d4af37', margin: '1.2rem 0' }}></div>
            <p style={{ fontSize: '0.85rem', color: '#9ca3af', fontFamily: 'Cinzel', margin: 0 }}>05 August 2026</p>
          </div>
        </section>

      </main>
    </>
  );
}
