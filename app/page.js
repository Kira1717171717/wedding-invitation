"use client";

import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [invitationOpen, setInvitationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07182f] flex items-center justify-center overflow-hidden">

      {!opened ? (
        <img
          src="/envelope.jpg"
          alt="Wedding Envelope"
          onClick={() => setOpened(true)}
          className="max-w-full max-h-screen object-contain cursor-pointer"
        />
      ) : (
        <div className="relative w-full h-screen flex items-center justify-center">

          <img
            src="/wedding-bg.jpg"
            alt="Wedding Invitation"
            className="max-w-full max-h-screen object-contain"
          />

          {!invitationOpen && (
            <button
              onClick={() => setInvitationOpen(true)}
              className="
              absolute
              bottom-20
              px-10
              py-4
              rounded-full
              bg-[#c9a45c]
              text-[#07182f]
              font-semibold
              tracking-widest
              shadow-lg
              "
            >
              Open Invitation
            </button>
          )}

          {invitationOpen && (
            <div
              className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              text-center
              "
            >
              <h1 className="text-4xl text-[#c9a45c] font-serif">
                Mohammed & Manar
              </h1>

              <p className="mt-6 text-white text-xl">
                05 August 2026
              </p>

              <p className="mt-4 text-white text-lg">
                Yildiz Hall
              </p>

              <p className="text-white">
                Black Tie - Weddings
              </p>
            </div>
          )}

        </div>
      )}

    </main>
  );
}
