"use client";

import { useState } from "react";

export default function Home() {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpening(true);

    setTimeout(() => {
      setOpened(true);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#07182f] flex items-center justify-center overflow-hidden">

      {!opened && (
        <img
          src="/envelope.jpg"
          alt="Wedding Envelope"
          onClick={handleOpen}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "contain",
            cursor: "pointer",
            transition: "all 0.8s ease",
            transform: opening ? "scale(1.15)" : "scale(1)",
            opacity: opening ? 0 : 1,
          }}
        />
      )}

      {opened && (
        <img
          src="/wedding-bg.jpg"
          alt="Wedding Invitation"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "contain",
            animation: "fadeIn 1s ease",
          }}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

    </main>
  );
}
