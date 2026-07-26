"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const weddingDate = new Date("2026-08-05T19:00:00");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor(
            (distance / (1000 * 60)) % 60
          ),
          seconds: Math.floor(
            (distance / 1000) % 60
          ),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="card"
      >

        <h1>
          محمد & منار
        </h1>

        <h2>
          Mohammad & Manar
        </h2>

        <div className="date">
          05 August 2026
          <br />
          الأربعاء | Wednesday
        </div>

        <div className="countdown">

          <div>
            {time.days}
            <span>Days</span>
          </div>

          <div>
            {time.hours}
            <span>Hours</span>
          </div>

          <div>
            {time.minutes}
            <span>Minutes</span>
          </div>

          <div>
            {time.seconds}
            <span>Seconds</span>
          </div>

        </div>


        <section>
          <h3>
            📍 Yildiz Hall
          </h3>

          <p>
            Black Tie - Weddings
          </p>
        </section>


        <section>
          <h3>
            🎩 Dress Code
          </h3>

          <p>
            Black Tie
          </p>
        </section>


        <button>
          Open Location
        </button>


        <p className="message">
          تشرفنا مشاركتكم فرحتنا
          <br />
          We would be honored to celebrate with you
        </p>


      </motion.div>
    </main>
  );
}
