'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const audioRef = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const sections = [section1, section2, section3, section4];

  const handleOpenInvitation = () => {
    setIsOpened(true);
    
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log("Audio play failed", error));
    }
  };

  useEffect(() => {
    if (!isOpened) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % sections.length;
        sections[nextIndex].current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isOpened]);

  useEffect(() => {
    const targetDate = new Date('2026-08-05T19:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = (index) => {
    const nextIndex = (index + 1) % sections.length;
    setCurrentIndex(nextIndex);
    sections[nextIndex].current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <audio ref={audioRef} src="/song.mp3" loop />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700;800&display=swap');
        
        body, main {
          font-family: 'Noto Kufi Arabic', sans-serif;
          margin: 0;
          padding: 0;
          overflow-y: ${isOpened ? 'scroll' : 'hidden'};
          overflow-x: hidden;
          background-color: #1a1612;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-3px); }
        }
        .scroll-btn {
          animation: bounce 2s infinite;
        }

        @keyframes sealGlow {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.8); }
          70% { box-shadow: 0 0 0 20px rgba(212, 175, 55, 0); }
          100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
        .wax-seal-container {
          animation: sealGlow 2s infinite;
          border-radius: 50%;
        }

        @keyframes tapMove {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(6px) scale(0.95); }
        }
        .tap-icon {
          animation: tapMove 1.5s infinite ease-in-out;
        }
      `}</style>

      {/* ================= شاشة المغلف بخلفية ذهبية فاخرة ================= */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#1a1612',
        backgroundImage: 'radial-gradient(circle, #3d3122 0%, #1a1612 100%)',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isOpened ? 0 : 1,
        visibility: isOpened ? 'hidden' : 'visible',
        transition: 'opacity 0.8s ease, visibility 0.8s ease',
        pointerEvents: isOpened ? 'none' : 'auto'
      }}>
        <div style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(\'/envelope.jpg\')',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <button 
            onClick={handleOpenInvitation}
            className="wax-seal-container"
            title="اضغط لفتح الدعوة"
            style={{
              position: 'absolute',
              width: '105px',
              height: '105px',
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: '2px solid rgba(212, 175, 55, 0.7)',
              cursor: 'pointer',
              outline: 'none',
              top: '52%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <span className="tap-icon" style={{ fontSize: '1.8rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
              👆
            </span>
          </button>
        </div>
      </div>

      {/* ================= الشاشة الرئيسية للدعوة (بخلفية ذهبية ملكية وبطاقة بيضاء واضحة) ================= */}
      <main style={{ 
        direction: 'rtl',
        height: '100vh',
        overflowY: isOpened ? 'scroll' : 'hidden',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        position: 'relative',
        backgroundColor: '#1a1612'
      }}>
        
        {/* الخلفية الذهبية الفخمة المتناسقة مع الختم والمغلف */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#1a1612',
          backgroundImage: 'radial-gradient(circle, #3d3122 0%, #1a1612 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

          {/* القسم الأول */}
          <section ref={section1} style={{ height: '100vh', width: '100%', maxWidth: '380px', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '38vh', boxSizing: 'border-box', textAlign: 'center' }}>
            <div style={{ width: '85%', backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '1.5rem 1rem', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#1a1612', margin: 0, fontWeight: '700' }}>WEDDING INVITATION</p>
              <p style={{ fontSize: '0.85rem', color: '#b89742', margin: 0, fontWeight: '700' }}>دعـوة زفــاف</p>
              <h1 style={{ fontSize: '2.1rem', fontWeight: '800', color: '#1a1612', margin: '0.2rem 0' }}>محمد & منار</h1>
              <p style={{ fontSize: '1.1rem', color: '#3d3122', margin: 0, fontWeight: '600' }}>Mohammad & Manar</p>
              <div style={{ width: '40px', height: '1.5px', backgroundColor: '#b89742', margin: '0.5rem 0' }}></div>
              <p style={{ fontSize: '0.9rem', color: '#1a1612', fontWeight: '700', margin: 0 }}>الأربعاء ، 05 أغسطس 2026</p>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: 0, fontWeight: '600' }}>Wednesday, August 5, 2026</p>
              <button onClick={() => scrollToNext(0)} className="scroll-btn" style={{ marginTop: '1.2rem', background: 'transparent', border: '1.5px solid #b89742', borderRadius: '20px', padding: '0.3rem 1rem', color: '#1a1612', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}>التالي ↓ Next</button>
            </div>
          </section>

          {/* القسم الثاني */}
          <section ref={section2} style={{ height: '100vh', width: '100%', maxWidth: '380px', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '38vh', boxSizing: 'border-box', textAlign: 'center' }}>
            <div style={{ width: '85%', backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '1.5rem 1rem', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>💍</span>
              <h2 style={{ fontSize: '1.3rem', color: '#1a1612', margin: 0, fontWeight: '700' }}>دعوة عقد قران</h2>
              <p style={{ fontSize: '0.75rem', color: '#b89742', margin: 0, fontWeight: '600' }}>OFFICIAL INVITATION</p>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#b89742', margin: '0.3rem 0' }}></div>
              <p style={{ fontSize: '0.85rem', color: '#3d3122', lineHeight: '1.7', margin: 0, fontWeight: '600' }}>"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"</p>
              <p style={{ fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.6', margin: '0.3rem 0 0 0' }}>يسعدنا ويشرفنا دعوتكم لمشاركتنا أثمن لحظات العمر وأجملها في حفل زفافنا.</p>
              <button onClick={() => scrollToNext(1)} className="scroll-btn" style={{ marginTop: '1rem', background: 'transparent', border: '1.5px solid #b89742', borderRadius: '20px', padding: '0.3rem 1rem', color: '#1a1612', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}>التالي ↓ Next</button>
            </div>
          </section>

          {/* القسم الثالث */}
          <section ref={section3} style={{ height: '100vh', width: '100%', maxWidth: '380px', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '38vh', boxSizing: 'border-box', textAlign: 'center' }}>
            <div style={{ width: '85%', backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '1.5rem 1rem', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <h2 style={{ fontSize: '1.2rem', color: '#1a1612', margin: 0, fontWeight: '700' }}>العد التنازلي</h2>
              <p style={{ fontSize: '0.7rem', color: '#b89742', margin: 0, fontWeight: '600' }}>COUNTDOWN</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: '0.5rem 0', direction: 'ltr' }}>
                <div style={{ minWidth: '40px' }}><span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1a1612' }}>{timeLeft.days}</span><p style={{ fontSize: '0.6rem', color: '#b89742', margin: 0, fontWeight: '700' }}>أيام</p></div>
                <div style={{ fontSize: '1.1rem', color: '#b89742' }}>:</div>
                <div style={{ minWidth: '40px' }}><span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1a1612' }}>{timeLeft.hours}</span><p style={{ fontSize: '0.6rem', color: '#b89742', margin: 0, fontWeight: '700' }}>ساعات</p></div>
                <div style={{ fontSize: '1.1rem', color: '#b89742' }}>:</div>
                <div style={{ minWidth: '40px' }}><span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1a1612' }}>{timeLeft.minutes}</span><p style={{ fontSize: '0.6rem', color: '#b89742', margin: 0, fontWeight: '700' }}>دقائق</p></div>
                <div style={{ fontSize: '1.1rem', color: '#b89742' }}>:</div>
                <div style={{ minWidth: '40px' }}><span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1a1612' }}>{timeLeft.seconds}</span><p style={{ fontSize: '0.6rem', color: '#b89742', margin: 0, fontWeight: '700' }}>ثواني</p></div>
              </div>
              <div style={{ width: '35px', height: '1px', backgroundColor: '#b89742', margin: '0.3rem 0' }}></div>
              <h3 style={{ color: '#1a1612', fontSize: '0.9rem', margin: 0, fontWeight: '700' }}>👔 الزي المعتمد / Dress Code</h3>
              <p style={{ color: '#b89742', fontWeight: '700', fontSize: '0.8rem', margin: 0 }}>بدلة رسمية / Black Tie & Navy</p>
              <button onClick={() => scrollToNext(2)} className="scroll-btn" style={{ marginTop: '1.0rem', background: 'transparent', border: '1.5px solid #b89742', borderRadius: '20px', padding: '0.3rem 1rem', color: '#1a1612', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}>التالي ↓ Next</button>
            </div>
          </section>

          {/* القسم الرابع */}
          <section ref={section4} style={{ height: '100vh', width: '100%', maxWidth: '380px', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '38vh', boxSizing: 'border-box', textAlign: 'center' }}>
            <div style={{ width: '85%', backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '1.5rem 1rem', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📍</span>
              <h2 style={{ fontSize: '1.3rem', color: '#1a1612', margin: 0, fontWeight: '700' }}>المكان والزمان</h2>
              <p style={{ fontSize: '0.7rem', color: '#b89742', margin: 0, fontWeight: '600' }}>LOCATION & TIME</p>
              <p style={{ fontSize: '0.95rem', fontWeight: '800', color: '#3d3122', margin: '0.3rem 0 0 0' }}>Yildiz Hall - قاعة يلدز</p>
              <p style={{ color: '#4b5563', fontSize: '0.8rem', margin: 0, fontWeight: '600' }}>الأربعاء، 05 أغسطس 2026 - 7:00 مساءً</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 1.2rem', backgroundColor: '#1a1612', color: '#ffffff', borderRadius: '50px', textDecoration: 'none', fontSize: '0.78rem', fontWeight: '600', marginTop: '0.6rem', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)', textShadow: 'none' }}>موقع القاعة 🗺️ Google Maps</a>
              <div style={{ width: '35px', height: '1px', backgroundColor: '#b89742', margin: '0.5rem 0' }}></div>
              <p style={{ fontSize: '0.82rem', color: '#1a1612', margin: 0, fontWeight: '700' }}>أهلاً وسهلاً بكم، ننتظركم بشوق! ✨</p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
