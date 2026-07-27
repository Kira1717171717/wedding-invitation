"use client";

import { useState } from "react";

export default function Home() {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  const openEnvelope = () => {
    setOpening(true);

    setTimeout(() => {
      setOpened(true);
    }, 900);
  };

  return (
    <main className="min-h-screen bg-[#07182f] flex items-center justify-center overflow-hidden">

      {!opened && (
        <img
          src="/envelope.jpg"
          alt="Envelope"
          onClick={openEnvelope}
          className="w-full h-screen object-contain cursor-pointer"
          style={{
            transition: "all 0.9s ease",
            transform: opening ? "scale(1.08)" : "scale(1)",
            opacity: opening ? 0 : 1,
          }}
        />
      )}

      {opened && (
        <div className="relative w-full h-screen flex items-center justify-center">

          <img
            src="/wedding-bg.jpg"
            alt="Wedding Invitation"
            className="w-full h-screen object-contain"
            style={{
              animation: "cardOpen 1s ease",
            }}
          />

          <button
            className="absolute bottom-20 px-10 py-4 rounded-full bg-[#c9a45c] text-[#07182f] font-semibold tracking-wide shadow-lg"
          >
            Open Invitation
          </button>

        </div>
      )}

      <style jsx>{`
        @keyframes cardOpen {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }

          60% {
            opacity: 1;
            transform: scale(1.05);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

    </main>
  );
}
