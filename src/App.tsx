import { useMemo, useState } from 'react';
import { faqs, featuredRides, highlights, metrics, steps, trustPoints } from './content';

type RideId = (typeof featuredRides)[number]['id'];

const initialRide = featuredRides[0].id;

export default function App() {
  const [selectedRide, setSelectedRide] = useState<RideId>(initialRide);
  const [preferredDate, setPreferredDate] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [pickup, setPickup] = useState('');

  const activeRide = useMemo(
    () => featuredRides.find((ride) => ride.id === selectedRide) ?? featuredRides[0],
    [selectedRide],
  );

  const quoteSubject = encodeURIComponent(`Quote request: ${activeRide.name}`);
  const quoteBody = encodeURIComponent(
    [
      `Ride: ${activeRide.name}`,
      preferredDate ? `Date: ${preferredDate}` : 'Date: ',
      groupSize ? `Group size: ${groupSize}` : 'Group size: ',
      pickup ? `Pickup: ${pickup}` : 'Pickup: ',
      '',
      'Tell me what you need and I will handle the rest.',
    ].join('\n'),
  );

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            WC
          </span>
          <div>
            <p className="eyebrow">Wagon Charters</p>
            <p className="topline">Mobile-first charter experiences</p>
          </div>
        </div>
        <a className="ghost-link" href="#quote">
          Get a quote
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy-wrap">
            <p className="hero-kicker">Red Rocks. Booze Cruise. Custom rides.</p>
            <h1>Charter booking with main-character energy.</h1>
            <p className="hero-copy">
              A bold mobile-first rebuild that makes Wagon Charters feel premium, cinematic, and easier to trust at
              a glance.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#rides">
                Explore rides
              </a>
              <a className="button secondary" href={`mailto:?subject=${quoteSubject}&body=${quoteBody}`}>
                Start quote
              </a>
            </div>

            <div className="highlight-row" aria-label="Highlights">
              {highlights.map((item) => (
                <span className="highlight-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-scene" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="scene-surface">
              <div className="scene-topline">
                <span className="scene-live">Live route</span>
                <span>{activeRide.accent}</span>
              </div>
              <div className="scene-route">
                <span>DENVER</span>
                <span>+</span>
                <span>RED ROCKS</span>
              </div>
              <div className="scene-card">
                <p>{activeRide.name}</p>
                <strong>{activeRide.badge}</strong>
                <span>{activeRide.route}</span>
              </div>
            </div>
          </div>

          <div className="metrics-grid" aria-label="Quick facts">
            {metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="trust-strip">
          {trustPoints.map((point) => (
            <div className="trust-chip" key={point}>
              {point}
            </div>
          ))}
        </section>

        <section className="section" id="rides">
          <div className="section-head">
            <p className="section-label">Choose your ride</p>
            <h2>Two offers, now presented like hero products instead of admin items.</h2>
          </div>

          <div className="ride-list">
            {featuredRides.map((ride) => {
              const isActive = ride.id === selectedRide;

              return (
                <article className={`ride-card ${isActive ? 'is-active' : ''}`} key={ride.id}>
                  <button className="ride-select" onClick={() => setSelectedRide(ride.id)} type="button">
                    <div className="ride-head">
                      <span className="ride-badge">{ride.badge}</span>
                      <span className="ride-accent">{ride.accent}</span>
                    </div>
                    <h3>{ride.name}</h3>
                    <p>{ride.blurb}</p>
                    <ul>
                      {ride.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className="ride-footer">
                      <span>{ride.route}</span>
                      <span>{isActive ? 'Selected' : 'Tap to select'}</span>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section split-section">
          <div className="section-head">
            <p className="section-label">How it works</p>
            <h2>Three taps, no drama.</h2>
          </div>

          <div className="step-list">
            {steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span className="step-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section quote-section" id="quote">
          <div className="quote-banner">
            <div>
              <p className="section-label">Request a quote</p>
              <h2>Short form. Strong outcome.</h2>
            </div>
            <p>
              This block is intentionally punchy: enough to sell the trip, not enough to bore people to death.
            </p>
          </div>

          <form className="quote-card card">
            <label>
              Ride
              <select value={selectedRide} onChange={(event) => setSelectedRide(event.target.value as RideId)}>
                {featuredRides.map((ride) => (
                  <option key={ride.id} value={ride.id}>
                    {ride.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Date
              <input value={preferredDate} onChange={(event) => setPreferredDate(event.target.value)} placeholder="Friday, Aug 16" />
            </label>

            <label>
              Group size
              <input value={groupSize} onChange={(event) => setGroupSize(event.target.value)} placeholder="12 people" />
            </label>

            <label>
              Pickup spot
              <input value={pickup} onChange={(event) => setPickup(event.target.value)} placeholder="Denver or nearby" />
            </label>

            <div className="quote-actions">
              <a className="button primary" href={`mailto:?subject=${quoteSubject}&body=${quoteBody}`}>
                Email quote details
              </a>
              <a className="button secondary" href={`sms:?body=${quoteBody}`}>
                Text the request
              </a>
            </div>
          </form>
        </section>

        <section className="section faq-section">
          <div className="section-head">
            <p className="section-label">Questions people ask</p>
            <h2>Clear answers sell the trip harder than hype does.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-card" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{activeRide.name}</p>
        <span>Built for mobile first, then dressed like a million bucks.</span>
      </footer>

      <nav className="sticky-cta" aria-label="Quick actions">
        <a className="button primary" href="#quote">
          Quote
        </a>
        <a className="button secondary" href="#rides">
          Rides
        </a>
      </nav>
    </div>
  );
}
