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
            transition: "0.9s ease",
            transform: opening ? "scale(1.1)" : "scale(1)",
            opacity: opening ? 0 : 1,
          }}
        />
      )}

      {opened && (
        <div
          className="w-full h-screen flex items-center justify-center"
          style={{
            animation: "fadeIn 1s ease",
          }}
        >
          <img
            src="/wedding-bg.jpg"
            alt="Wedding Invitation"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.85);
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
