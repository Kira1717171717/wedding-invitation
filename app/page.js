"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function Home() {

  const weddingDate = new Date("2026-08-05T19:00:00");

  const [time, setTime] = useState({
    days:0,
    hours:0,
    minutes:0,
    seconds:0
  });


  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date();
      const distance = weddingDate - now;


      if(distance > 0){

        setTime({
          days: Math.floor(distance/(1000*60*60*24)),
          hours: Math.floor((distance/(1000*60*60))%24),
          minutes: Math.floor((distance/(1000*60))%60),
          seconds: Math.floor((distance/1000)%60)
        });

      }

    },1000);


    return ()=>clearInterval(timer);

  },[]);



  return (

    <main>


      {/* HERO */}

      <section className="hero">


        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
        >


          <p className="small">
            Together with our families
          </p>


          <h1>
            محمد & منار
          </h1>


          <h2>
            Mohammad & Manar
          </h2>


          <div className="date">
            05 August 2026
            <br/>
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


          <p className="scroll">
            Scroll Down ↓
          </p>


        </motion.div>


      </section>




      {/* INVITATION */}


      <motion.section
        className="section"
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
        viewport={{once:true}}
      >


        <h3>
          Our Special Day
        </h3>


        <p>
          يسعدنا دعوتكم لمشاركتنا أجمل لحظات حياتنا
        </p>


        <p>
          We would be honored to celebrate
          this special day with you
        </p>


      </motion.section>





      {/* DETAILS */}


      <motion.section
        className="section"
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
        viewport={{once:true}}
      >


        <h3>
          Wedding Details
        </h3>


        <p>
          📍 Yildiz Hall
        </p>


        <p>
          Black Tie - Weddings
        </p>


        <a
          className="location-btn"
          href="https://www.google.com/maps/dir//Yildiz+Hall+-+Black+Tie-+Weddings,+QWM6%2BXQ,+Amman/@31.9614981,35.9068476,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x151ca9dbee45f169:0x618aa9a93506d572!2m2!1d35.9119597!2d31.7848898?hl=en-JO&entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          Open Location
        </a>


      </motion.section>





      {/* DRESS CODE */}


      <motion.section
        className="section"
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
        viewport={{once:true}}
      >


        <h3>
          🎩 Dress Code
        </h3>


        <p>
          Black Tie
        </p>


        <p>
          Elegant Evening Attire
        </p>


      </motion.section>





      {/* TIMELINE */}


      <motion.section
        className="section"
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
        viewport={{once:true}}
      >


        <h3>
          Wedding Timeline
        </h3>


        <p>
          7:00 PM
          <br/>
          Guest Arrival
        </p>


        <p>
          8:00 PM
          <br/>
          Wedding Celebration
        </p>


        <p>
          10:00 PM
          <br/>
          Dinner & Dance
        </p>


      </motion.section>





      {/* RSVP */}


      <motion.section
        className="section"
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
        viewport={{once:true}}
      >


        <h3>
          RSVP
        </h3>


        <p>
          Will you join us?
        </p>


        <button>
          Yes, I will attend
        </button>


      </motion.section>





      {/* END */}


      <section className="section end">


        <h1>
          محمد & منار
        </h1>


        <p>
          Thank you for being part of our story ❤️
        </p>


      </section>



    </main>

  );

}
