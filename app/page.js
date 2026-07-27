'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // للتحكم بأنيميشن الفتح
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const audioRef = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const sections = [section1, section2, section3, section4];

  // دالة الفتح الملكي
  const handleOpenInvitation = () => {
    // 1. ابدأ حركة انقسام المغلف
    setIsClosing(true);
    
    // 2. شغل الأغنية فوراً
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log("Audio play failed", error));
    }

    // 3. بعد انتهاء حركة الانقسام (ثانية واحدة)، قم بتغيير الحالة لإظهار الدعوة
    setTimeout(() => {
      setIsOpened(true);
    }, 1000); 
  };

  // نظام النزول التلقائي (كل 5 ثواني)
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
    }, 5000);

    return () => clearInterval(timer);
  }, [isOpened]);

  // العداد التنازلي
  useEffect(() => {
    const targetDate = new Date('2026-08-05T19:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 / 60) % 60),
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
          overflow: ${isOpened ? 'auto' : 'hidden'};
          background-color: #1a2b4c;
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
          0% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.8); }
          70% { box-shadow: 0 0 0 20px rgba(197, 160, 89, 0); }
          100% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0); }
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

        /* ================= حركـة الإنقسام الملكي ================= */
        .envelope-half {
          position: fixed;
          left: 0;
          width: 100%;
          height: 50vh;
          background-image: url('/envelope.jpg');
          background-size: 200vw auto; /* ضعف العرض عشان يغطي الشاشة كاملة بانسيابية */
          background-repeat: no-repeat;
          transition: transform 1s cubic-bezier(0.7, 0, 0.3, 1);
          z-index: 60;
        }

        /* الجزء العلوي من المغلف */
        .envelope-top {
          top: 0;
          background-position: center top;
          transform: translateY(${isClosing ? '-100%' : '0'});
        }

        /* الجزء السفلي من المغلف */
        .envelope-bottom {
          bottom: 0;
          background-position: center bottom;
          transform: translateY(${isClosing ? '100%' : '0'});
        }
        
        /* إخفاء الختم والزر أثناء الفتح */
        .closure-elements {
            opacity: ${isClosing ? '0' : '1'};
            transition: opacity 0.3s ease;
        }
      `}</style>

      {/* ================= واجهة المغلف الأساسية (التي ستنقسم) ================= */}
      {!isOpened && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#1a2b4c',
          // هنا بنشيل الـ background-image من الحاوية الرئيسية عشان ما تتحركش مع الأجزاء
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          
          {/* الأجزاء المتحركة (الخلفية للمغلف) */}
          <div className="envelope-half envelope-top" />
          <div className="envelope-half envelope-bottom" />

          {/* الختم والزر التفاعلي (يختفيان عند الكبس) */}
          <div className='closure-elements' style={{ zIndex: 65, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
             <button 
                onClick={handleOpenInvitation}
                className="wax-seal-container"
                title="اضغط لفتح الدعوة"
                style={{
                    width: '105px',
                    height: '105px',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    border: '2px solid rgba(197, 160, 89, 0.5)',
                    cursor: 'pointer',
                    outline: 'none',
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
      )}

      {/* ================= المحتوى الرئيسي للدعوة (يظهر خلف المغلف المنقسم) ================= */}
      <main style={{ 
        direction: 'rtl',
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        position: 'relative',
        backgroundColor: '#f8f4ee',
        display: isOpened ? 'block' : 'none' // لا يظهر المحتوى إلا بعد اكتمال حركة الفتح
      }}>
        
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundImage: "url('/wedding-bg.jpg')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
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
            <div style={{ width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', textShadow: '0 1px 2px rgba(255,255,255,0.85)' }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>WEDDING INVITATION</p>
              <p style={{ fontSize: '0.85rem', color: '#c5a059', margin: 0, fontWeight: '700' }}>دعـوة زفــاف</p>
              <h1 style={{ fontSize: '2.1rem', fontWeight: '800', color: '#1a2b4c', margin: '0.2rem 0' }}>محمد & منار</h1>
              <p style={{ fontSize: '1.1rem', color: '#2c436e', margin: 0, fontWeight: '600' }}>Mohammad & Manar</p>
              <div style={{ width: '40px', height: '1.5px', backgroundColor: '#c5a059', margin: '0.5rem 0' }}></div>
              <p style={{ fontSize: '0.9rem', color: '#1a2b4c', fontWeight: '700', margin: 0 }}>الأربعاء ، 05 أغسطس 2026</p>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: 0, fontWeight: '600' }}>Wednesday, August 5, 2026</p>
              <button onClick={() => scrollToNext(0)} className="scroll-btn" style={{ marginTop: '1.2rem', background: 'transparent', border: '1.5px solid #c5a059', borderRadius: '20px', padding: '0.3rem 1rem', color: '#1a2b4c', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}>التالي ↓ Next</button>
            </div>
          </section>

          {/* القسم الثاني */}
          <section ref={section2} style={{ height: '100vh', width: '100%', maxWidth: '380px', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '38vh', boxSizing: 'border-box', textAlign: 'center' }}>
            <div style={{ width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textShadow: '0 1px 2px rgba(255,255,255,0.85)' }}>
              <span style={{ fontSize: '1.5rem' }}>💍</span>
              <h2 style={{ fontSize: '1.3rem', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>دعوة عقد قران</h2>
              <p style={{ fontSize: '0.75rem', color: '#c5a059', margin: 0, fontWeight: '600' }}>OFFICIAL INVITATION</p>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#c5a059', margin: '0.3rem 0' }}></div>
              <p style={{ fontSize: '0.85rem', color: '#2c436e', lineHeight: '1.7', margin: 0, fontWeight: '600' }}>"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"</p>
              <p style={{ fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.6', margin: '0.3rem 0 0 0' }}>يسعدنا ويشرفنا دعوتكم لمشاركتنا أثمن لحظات العمر وأجملها في حفل زفافنا.</p>
              <button onClick={() => scrollToNext(1)} className="scroll-btn" style={{ marginTop: '1rem', background: 'transparent', border: '1.5px solid #c5a059', borderRadius: '20px', padding: '0.3rem 1rem', color: '#1a2b4c', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}>التالي ↓ Next</button>
            </div>
          </section>

          {/* القسم الثالث */}
          <section ref={section3} style={{ height: '100vh', width: '100%', maxWidth: '380px', scrollSnapAlign: 'start', scrollSnapStop: 'always', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '38vh', boxSizing: 'border-box', textAlign: 'center' }}>
            <div style={{ width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textShadow: '0 1px 2px rgba(255,255,255,0.85)' }}>
              <h2 style={{ fontSize: '1.2rem', color: '#1a2b4c', margin: 0, fontWeight: '700' }}>العد التنازلي</h2>
              <p
