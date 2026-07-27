"use client";

import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen bg-[#07182f] flex items-center justify-center overflow-hidden">

      {!opened ? (
        <img
          src="/envelope.jpg"
          alt="Wedding Envelope"
          onClick={() => setOpened(true)}
          className="max-w-full max-h-screen object-contain cursor-pointer"
          style={{
            animation: "fadeIn 0.8s ease",
          }}
        />
      ) : (
        <img
          src="/wedding-bg.jpg"
          alt="Wedding Invitation"
          className="max-w-full max-h-screen object-contain"
          style={{
            animation: "showCard 0.8s ease",
          }}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes showCard {
          from {
            opacity: 0;
            transform: scale(0.98);
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
