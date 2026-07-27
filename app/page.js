"use client";

import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main
      className="min-h-screen bg-[#07182f] flex items-center justify-center overflow-hidden"
      onClick={() => setOpened(true)}
    >
      {!opened ? (
        <img
          src="/envelope.jpg"
          alt="Wedding Envelope"
          className="w-full h-screen object-contain cursor-pointer transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <div className="text-white text-center">
          Open Invitation
        </div>
      )}
    </main>
  );
}
