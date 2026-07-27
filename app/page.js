"use client";

import { useState } from "react";

export default function Home() {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpening(true);

    setTimeout(() => {
      setOpened(true);
    }, 700);
  };

  return (
    <main className="min-h-screen bg-[#07182f] flex items-center justify-center overflow-hidden">

      {!opened ? (
        <img
          src="/envelope.jpg"
          alt="Wedding Envelope"
          onClick={handleOpen}
          className={`w-full h-screen object-contain cursor-pointer transition-all duration-700 ${
            opening
              ? "scale-110 opacity-0"
              : "scale-100 opacity-100"
          }`}
        />
      ) : (
        <img
          src="/wedding-bg.jpg"
          alt="Wedding Invitation"
          className="w-full h-screen object-contain animate-in fade-in duration-1000"
        />
      )}

    </main>
  );
}
