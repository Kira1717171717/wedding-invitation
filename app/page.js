'use client';

import { useState } from 'react';

import Hero from '../components/Hero';

export default function Home() {

  const [opened, setOpened] = useState(false);

  return (

    <main>

      {!opened ? (

        <Hero onOpen={() => setOpened(true)} />

      ) : (

        <div className="coming-soon">

          <h1>Invitation Coming Next...</h1>

          <p>
            المرحلة القادمة سنضيف الدعوة الكاملة هنا.
          </p>

        </div>

      )}

    </main>

  );

}
