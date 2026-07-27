export default function Hero({ onOpen }) {
  return (
    <section className="hero">

      <div className="hero-card">

        <p className="hero-top">
          WEDDING INVITATION
        </p>

        <h1 className="hero-name-ar">
          محمد & منار
        </h1>

        <h2 className="hero-name-en">
          Mohammad & Manar
        </h2>

        <div className="hero-divider"></div>

        <p className="hero-date">
          الأربعاء
        </p>

        <p className="hero-date-number">
          05 August 2026
        </p>

        <button
          className="hero-button"
          onClick={onOpen}
        >
          Open Invitation
        </button>

      </div>

    </section>
  );
}
