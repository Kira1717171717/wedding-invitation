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
          className="max-w-full max-h-screen object-contain cursor-pointer"
          style={{
            transition: "transform 0.9s ease, opacity 0.9s ease",
            transform: opening ? "scale(1.05)" : "scale(1)",
            opacity: opening ? 0 : 1,
          }}
        />
      )}

      {opened && (
        <img
          src="/wedding-bg.jpg"
          alt="Wedding Invitation"
          className="max-w-full max-h-screen object-contain"
        />
      )}

    </main>
  );
}
