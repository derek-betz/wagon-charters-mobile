import { useMemo, useState } from 'react';
import { faqs, featuredRides, steps, trustPoints } from './content';

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
        <div>
          <p className="eyebrow">Wagon Charters</p>
          <h1>Charter rides that are easier to book on a phone than most apps are on a laptop.</h1>
        </div>
        <a className="ghost-link" href="#quote">
          Get a quote
        </a>
      </header>

      <main>
        <section className="hero card">
          <p className="hero-kicker">Mobile-first rebuild</p>
          <p className="hero-copy">
            A cleaner, faster way to book Red Rocks runs, Booze Cruise trips, and custom rides without the old-site
            scavenger hunt.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#rides">
              View rides
            </a>
            <a className="button secondary" href={`mailto:?subject=${quoteSubject}&body=${quoteBody}`}>
              Start quote
            </a>
          </div>

          <div className="stats">
            <div>
              <strong>2</strong>
              <span>signature rides</span>
            </div>
            <div>
              <strong>1</strong>
              <span>simple quote flow</span>
            </div>
            <div>
              <strong>0</strong>
              <span>desktop clutter for now</span>
            </div>
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
            <h2>The two offers are now obvious instead of buried.</h2>
          </div>

          <div className="ride-list">
            {featuredRides.map((ride) => {
              const isActive = ride.id === selectedRide;

              return (
                <article className={`ride-card ${isActive ? 'is-active' : ''}`} key={ride.id}>
                  <button className="ride-select" onClick={() => setSelectedRide(ride.id)} type="button">
                    <span className="ride-badge">{ride.badge}</span>
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

        <section className="section">
          <div className="section-head">
            <p className="section-label">How it works</p>
            <h2>Three taps, one clean path to a booking.</h2>
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

        <section className="section" id="quote">
          <div className="section-head">
            <p className="section-label">Request a quote</p>
            <h2>Keep it short and let the form do the work.</h2>
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

        <section className="section">
          <div className="section-head">
            <p className="section-label">Questions people ask</p>
            <h2>Remove uncertainty before it becomes friction.</h2>
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
        <span>Built for mobile first, desktop later.</span>
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
