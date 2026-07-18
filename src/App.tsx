import { type CSSProperties, type FormEvent, type ImgHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';
import {
  BusFront,
  CircleCheck,
  Mountain,
  Route,
  Send,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import {
  faqs,
  featuredRides,
  heroImages,
  originalShots,
  pageBackdrop,
  steps,
} from './content';

type RideId = (typeof featuredRides)[number]['id'];
type SelectedRideId = RideId | 'custom' | '';
type LayoutSeat = {
  id: string;
  x: number;
  y: number;
  facing: 'front' | 'rear';
  group?: 'rear-bench' | 'coach-seat' | 'coach-back';
  label?: string;
};
type QuoteStatus = {
  kind: 'hint' | 'success';
  message: string;
};

const quoteEmail = 'wagoncharters@gmail.com';
const revealDelay = (index: number): CSSProperties => ({ '--reveal-delay': `${index * 70}ms` } as CSSProperties);
const stepIcons = [Route, Send, BusFront] as const;
const trustProofs: { text: string; Icon: LucideIcon }[] = [
  { text: 'Private whole-bus bookings for groups of up to 57.', Icon: BusFront },
  { text: 'Handicap accessible with neon lights and sound.', Icon: Mountain },
  { text: 'Custom routes and special events welcome.', Icon: ShieldCheck },
];
const heroProofs = [
  { label: 'Booking', value: 'Private bus' },
  { label: 'Capacity', value: 'Up to 57' },
  { label: 'Route', value: 'Your plan' },
] as const;
const routeManifest: { eyebrow: string; title: string; text: string; Icon: LucideIcon }[] = [
  {
    eyebrow: 'Show run',
    title: 'Red Rocks without the parking scramble',
    text: 'Keep the group together from pickup through the encore.',
    Icon: Mountain,
  },
  {
    eyebrow: 'Day or night',
    title: 'Mountain days and Denver mimosa tours',
    text: 'Build the route around your group instead of splitting cars.',
    Icon: Route,
  },
  {
    eyebrow: 'Private charter',
    title: 'If it moves a group, send the idea',
    text: 'Custom shuttles and special events are welcome too.',
    Icon: ShieldCheck,
  },
] as const;
const redRocksLayoutSeats: LayoutSeat[] = [
  { id: 'front-1', x: 24, y: 18, facing: 'rear' },
  { id: 'front-2', x: 39, y: 18, facing: 'rear' },
  { id: 'front-3', x: 24, y: 26, facing: 'front' },
  { id: 'front-4', x: 39, y: 26, facing: 'front' },
  { id: 'front-5', x: 24, y: 34, facing: 'rear' },
  { id: 'front-6', x: 39, y: 34, facing: 'rear' },
  { id: 'entry-1', x: 78, y: 39, facing: 'rear' },
  { id: 'entry-2', x: 78, y: 49, facing: 'front' },
  { id: 'salon-left-1', x: 26, y: 73, facing: 'front' },
  { id: 'salon-left-2', x: 40, y: 73, facing: 'front' },
  { id: 'salon-left-3', x: 26, y: 80, facing: 'rear' },
  { id: 'salon-left-4', x: 40, y: 80, facing: 'rear' },
  { id: 'salon-right-1', x: 68, y: 73, facing: 'front' },
  { id: 'salon-right-2', x: 82, y: 73, facing: 'front' },
  { id: 'salon-right-3', x: 68, y: 80, facing: 'rear' },
  { id: 'salon-right-4', x: 82, y: 80, facing: 'rear' },
  { id: 'rear-1', x: 24, y: 91, facing: 'front', group: 'rear-bench' },
  { id: 'rear-2', x: 37, y: 91, facing: 'front', group: 'rear-bench' },
  { id: 'rear-3', x: 50, y: 91, facing: 'front', group: 'rear-bench' },
  { id: 'rear-4', x: 63, y: 91, facing: 'front', group: 'rear-bench' },
  { id: 'rear-5', x: 76, y: 91, facing: 'front', group: 'rear-bench' },
];
const mountainShuttleLayoutSeats: LayoutSeat[] = [
  ...Array.from({ length: 13 }, (_, rowIndex) =>
    [22, 35, 65, 78].map((x, seatIndex) => {
      const seatNumber = rowIndex * 4 + seatIndex + 1;

      return {
        id: `coach-${seatNumber}`,
        x,
        y: 19 + rowIndex * 5.4,
        facing: 'front' as const,
        group: 'coach-seat' as const,
        label: String(seatNumber),
      };
    }),
  ).flat(),
  ...[18, 34, 50, 66, 82].map((x, index) => ({
    id: `coach-${index + 53}`,
    x,
    y: 91,
    facing: 'front' as const,
    group: 'coach-back' as const,
    label: String(index + 53),
  })),
];

function PolishedImage({ className = '', decoding, loading, onLoad, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const resolvedDecoding = decoding ?? (loading === 'lazy' ? 'async' : undefined);

  useEffect(() => {
    const image = imageRef.current;

    if (image?.complete && image.naturalWidth > 0) {
      setIsLoaded(true);
      image.parentElement?.classList.add('has-loaded-image');
    }
  }, []);

  return (
    <img
      {...props}
      ref={imageRef}
      decoding={resolvedDecoding}
      loading={loading}
      className={`image-fade ${isLoaded ? 'is-loaded' : ''} ${className}`.trim()}
      onLoad={(event) => {
        setIsLoaded(true);
        event.currentTarget.parentElement?.classList.add('has-loaded-image');
        onLoad?.(event);
      }}
    />
  );
}

export default function App() {
  const [selectedRide, setSelectedRide] = useState<SelectedRideId>('');
  const [customerName, setCustomerName] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [pickup, setPickup] = useState('');
  const [quoteStatus, setQuoteStatus] = useState<QuoteStatus | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const rideDetailRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLElement>(null);

  const activeRide = useMemo(
    () => featuredRides.find((ride) => ride.id === selectedRide) ?? null,
    [selectedRide],
  );
  const minQuoteDate = useMemo(() => {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000);

    return localToday.toISOString().slice(0, 10);
  }, []);

  const canSubmitQuote = Boolean(
    selectedRide && customerName.trim() && customerContact.trim() && preferredDate.trim() && groupSize.trim() && pickup.trim(),
  );
  const maxGroupSize = selectedRide === 'mountain-shuttle' ? 57 : 33;
  const selectedRideName = selectedRide === 'custom' ? 'Custom route or special event' : activeRide?.name;

  const quoteSubject = encodeURIComponent(`Quote request: ${selectedRideName ?? 'Wagon Charters'}`);
  const quoteBody = encodeURIComponent(
    [
      `Ride: ${selectedRideName ?? 'Not selected'}`,
      customerName ? `Name: ${customerName}` : 'Name: ',
      customerContact ? `Contact: ${customerContact}` : 'Contact: ',
      preferredDate ? `Date: ${preferredDate}` : 'Date: ',
      groupSize ? `Group size: ${groupSize}` : 'Group size: ',
      pickup ? `Pickup: ${pickup}` : 'Pickup: ',
      '',
      'Tell me what you need and I will handle the rest.',
    ].filter(Boolean).join('\n'),
  );
  const quoteMailto = `mailto:${quoteEmail}?subject=${quoteSubject}&body=${quoteBody}`;

  function scrollToElement(element: HTMLElement | null, block: ScrollLogicalPosition = 'start') {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        element?.scrollIntoView({ behavior: 'smooth', block });
      });
    });
  }

  function scrollToSelector(selector: string, block: ScrollLogicalPosition = 'start') {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.querySelector<HTMLElement>(selector)?.scrollIntoView({ behavior: 'smooth', block });
      });
    });
  }

  function openRideDetails(rideId: RideId) {
    setSelectedRide(rideId);
    setQuoteStatus(null);
    scrollToSelector('#ride-detail');
  }

  function returnToRideChoices() {
    setSelectedRide('');
    setQuoteStatus(null);
    scrollToSelector('.ride-list');
  }

  function startRideQuote(rideId: RideId) {
    setSelectedRide(rideId);
    setQuoteStatus(null);
    scrollToElement(quoteRef.current);
  }

  function startCustomQuote() {
    setSelectedRide('custom');
    setQuoteStatus(null);
    scrollToElement(quoteRef.current);
  }

  useEffect(() => {
    const motionRoot = document.documentElement;
    const pageFrame = document.querySelector('.page-frame');
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!revealItems.length || prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    motionRoot.classList.add('motion-ready');
    pageFrame?.classList.add('motion-ready');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    return () => {
      revealObserver.disconnect();
      motionRoot.classList.remove('motion-ready');
      pageFrame?.classList.remove('motion-ready');
    };
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.hero');
    const quote = document.querySelector<HTMLElement>('#quote');

    if (!hero) {
      return;
    }

    const updateStickyCta = () => {
      const rideDetail = document.querySelector<HTMLElement>('#ride-detail');
      const rideDetailRect = rideDetail?.getBoundingClientRect();
      const ridePicker = document.querySelector<HTMLElement>('#rides');
      const ridePickerRect = ridePicker?.getBoundingClientRect();
      const isReadingRideDetail = Boolean(
        rideDetailRect && rideDetailRect.top < window.innerHeight * 0.94 && rideDetailRect.bottom > 0,
      );
      const isUsingRidePicker = Boolean(
        ridePickerRect && ridePickerRect.top < window.innerHeight * 0.72 && ridePickerRect.bottom > window.innerHeight * 0.18,
      );
      const heroBottom = hero.offsetTop + hero.offsetHeight - 24;
      const quoteTop = quote ? quote.offsetTop - window.innerHeight * 0.24 : Number.POSITIVE_INFINITY;
      const scrollPosition = window.scrollY;

      setShowStickyCta(scrollPosition > heroBottom && scrollPosition < quoteTop && !isReadingRideDetail && !isUsingRidePicker);
    };

    updateStickyCta();
    window.addEventListener('scroll', updateStickyCta, { passive: true });
    window.addEventListener('resize', updateStickyCta);

    return () => {
      window.removeEventListener('scroll', updateStickyCta);
      window.removeEventListener('resize', updateStickyCta);
    };
  }, [selectedRide]);

  useEffect(() => {
    if (activeRide) {
      scrollToElement(rideDetailRef.current);
    }
  }, [activeRide]);

  function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmitQuote) {
      setQuoteStatus({
        kind: 'hint',
        message: 'Choose a ride and add your contact details, date, group size, and pickup spot.',
      });
      return;
    }

    setQuoteStatus({
      kind: 'success',
      message: 'You are all set - your email draft is open. Just hit send.',
    });
    window.location.href = quoteMailto;
  }

  return (
    <div className="page-frame" style={{ backgroundImage: `url(${pageBackdrop})` }}>
      <div className="page-shell">
        <header className="topbar reveal">
        <div className="brand-lockup">
          <img className="brand-mark" src="images/wagon-charters-logo-real.png" alt="" aria-hidden="true" />
          <div className="brand-wordmark">
            <p className="eyebrow">Wagon Charters</p>
          </div>
        </div>
        <a className="ghost-link" href="#quote">
          GET A QUOTE
        </a>
        </header>

        <main>
        <section className="hero reveal" aria-labelledby="hero-title">
          <div className="hero-media">
            <figure className="hero-photo hero-photo-large">
              <PolishedImage
                src={heroImages[0].src}
                alt={heroImages[0].alt}
                loading="eager"
                fetchPriority="high"
              />
              <figcaption>
                <span>Denver / Colorado / private charter</span>
              </figcaption>
            </figure>
          </div>

          <div className="hero-copy-wrap">
            <div className="hero-route-chip" aria-label="Current route">
              <span>DEN</span>
              <i aria-hidden="true" />
              <span>PRIVATE CHARTER</span>
              <i aria-hidden="true" />
              <span>UP TO 57</span>
            </div>
            <p className="hero-kicker">Red Rocks. Booze Cruise. Mountain days. Denver Mimosa Tours.</p>
            <h1 id="hero-title">The whole bus. Your group. Your route.</h1>
            <p className="hero-intro">
              Private Colorado charters for groups of up to 57, depending on the ride and vehicle.
            </p>

            <div className="hero-proof-grid" aria-label="Fast trip details">
              {heroProofs.map((proof) => (
                <span key={proof.label}>
                  <strong>{proof.value}</strong>
                  {proof.label}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#quote">
                Get a quote
              </a>
              <a className="button secondary" href="#rides">
                View rides
              </a>
            </div>
            <a className="hero-scroll-cue" href="#meet-wagon">
              <span aria-hidden="true" />
              More below
            </a>
          </div>
        </section>

        <section className="route-manifest reveal" aria-label="Popular Wagon Charters routes">
          {routeManifest.map(({ eyebrow, title, text, Icon }, index) => (
            <article className="manifest-card reveal" key={title} style={revealDelay(index + 1)}>
              <span className="manifest-icon">
                <Icon aria-hidden="true" strokeWidth={1.8} />
              </span>
              <div>
                <p>{eyebrow}</p>
                <h2>{title}</h2>
                <span>{text}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="section original-shots reveal" id="meet-wagon" aria-labelledby="meet-wagon-title">
          <div className="section-head">
            <p className="section-label">Meet the Wagon</p>
            <h2 id="meet-wagon-title">Ride Colorado's Iconic Red Charter Bus</h2>
          </div>

          <div className="shot-grid">
            {originalShots.map((shot, index) => (
              <figure className="shot-card reveal" key={shot.title} style={revealDelay(index + 1)}>
                <PolishedImage src={shot.src} alt={shot.alt} loading="lazy" />
                <figcaption>
                  <span>{shot.caption}</span>
                  <strong>{shot.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section reveal" id="rides" aria-labelledby="rides-title">
          <div className="section-head">
            <p className="section-label" id="rides-title">Choose your ride</p>
          </div>

          <div className="ride-list">
            {featuredRides.map((ride, index) => {
              const isActive = ride.id === selectedRide;

              return (
                <article
                  className={`ride-card ${isActive ? 'is-active' : ''}`}
                  key={ride.id}
                >
                  <button
                    aria-label={`View ${ride.name} details`}
                    aria-pressed={isActive}
                    className="ride-select"
                    onClick={() => openRideDetails(ride.id)}
                    type="button"
                  >
                    <figure className="ride-photo">
                      <PolishedImage src={ride.image} alt={ride.imageAlt} loading="lazy" />
                      {isActive ? (
                        <span className="ride-check-badge" aria-hidden="true">
                          <CircleCheck strokeWidth={2.25} />
                        </span>
                      ) : null}
                    </figure>
                    <div className="ride-head">
                      <span className="ride-badge">{ride.badge}</span>
                      <span className="ride-accent">{ride.accent}</span>
                    </div>
                    <h3>{ride.name}</h3>
                    <p className="ride-blurb">{ride.blurb}</p>
                    <ul className="ride-pills" aria-label={`${ride.name} trip details`}>
                      {ride.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className="ride-footer">
                      <span>{ride.route}</span>
                      <span className="ride-status">
                        {isActive ? <CircleCheck aria-hidden="true" strokeWidth={2.25} /> : null}
                        {isActive ? 'Viewing details' : 'View details'}
                      </span>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>

          <aside className="custom-ride-callout reveal" aria-labelledby="custom-ride-title">
            <div>
              <p className="section-label">Custom shuttles and special events</p>
              <h2 id="custom-ride-title">Have another route in mind?</h2>
              <p>
                Weddings, corporate shuttles, special events, and one-off routes are all on the table. Send the plan
                and get a direct answer.
              </p>
            </div>
            <button className="button secondary" onClick={startCustomQuote} type="button">
              Request a custom route
            </button>
          </aside>

          {activeRide ? (
            <article
              className="ride-detail card reveal is-visible"
              id="ride-detail"
              ref={rideDetailRef}
              aria-live="polite"
              aria-labelledby="ride-detail-title"
            >
              <div className="ride-detail-topline">
                <button className="ride-back-button" onClick={returnToRideChoices} type="button">
                  Back to rides
                </button>
                <span>Ride details</span>
              </div>

              <div className="ride-detail-copy">
                <span className="ride-detail-label">{activeRide.name}</span>
                <h2 id="ride-detail-title">{activeRide.detailTitle}</h2>
                <p>{activeRide.detailCopy}</p>
                <div className="ride-detail-actions">
                  <button className="button primary" onClick={() => startRideQuote(activeRide.id)} type="button">
                    Get quote
                  </button>
                  <span>{activeRide.route}</span>
                </div>
              </div>

              <div
                className={`ride-detail-gallery ${
                  activeRide.detailImages.some((image) => 'variant' in image && image.variant === 'wide')
                    ? 'has-wide-shot'
                    : ''
                }`.trim()}
                aria-label={`${activeRide.name} photos`}
              >
                {activeRide.detailImages.map((image) => (
                  <figure
                    className={`ride-detail-shot ${'variant' in image ? `is-${image.variant}` : ''}`.trim()}
                    key={image.src}
                  >
                    <PolishedImage src={image.src} alt={image.alt} loading="lazy" />
                    <figcaption>{image.label}</figcaption>
                  </figure>
                ))}
              </div>

              <ul className="ride-detail-highlights" aria-label={`${activeRide.name} highlights`}>
                {activeRide.highlights.map((highlight) => (
                  <li key={highlight}>
                    <CircleCheck aria-hidden="true" strokeWidth={2} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {activeRide.id === 'red-rocks' ? (
                <section className="seat-layout-panel" aria-labelledby="red-rocks-layout-title">
                  <div className="seat-panel-head">
                    <span className="ride-detail-label">Interior reference</span>
                    <h3 id="red-rocks-layout-title">Red Rocks seating layout</h3>
                    <p>An orientation guide to the interior. Arrows show which way each seat faces.</p>
                  </div>

                  <div
                    className="seat-map-shell"
                    role="img"
                    aria-label="Bus interior diagram. The front has the driver on the left and entry door on the right. Six alternating seats sit at the front left, a trapezoid bench fills the front-right corner, two single seats line the right side, an L-shaped bar runs along the left, two four-seat groups sit behind the bar, and a five-place bench spans the rear."
                  >
                    <div className="seat-map-label is-front" aria-hidden="true">Front of bus</div>
                    <div className="driver-zone" aria-hidden="true">
                      <i />
                      <span>Driver</span>
                    </div>
                    <div className="entry-door" aria-hidden="true">
                      <i />
                      <span>Door</span>
                    </div>
                    <div className="corner-bench" aria-hidden="true">
                      <span>Bench</span>
                    </div>
                    <div className="bar-zone" aria-hidden="true"><span>Bar top</span></div>
                    <div className="aisle-zone" aria-hidden="true"><span>Aisle</span></div>
                    {redRocksLayoutSeats.map((seat) => {
                      const seatStyle = {
                        '--seat-x': `${seat.x}%`,
                        '--seat-y': `${seat.y}%`,
                      } as CSSProperties & Record<'--seat-x' | '--seat-y', string>;

                      return (
                        <span
                          aria-hidden="true"
                          className={`seat-module faces-${seat.facing} ${seat.group ? `is-${seat.group}` : ''}`.trim()}
                          key={seat.id}
                          style={seatStyle}
                        >
                          <i />
                        </span>
                      );
                    })}
                    <div className="seat-map-label is-rear" aria-hidden="true">Rear</div>
                  </div>

                  <div className="seat-map-legend" aria-hidden="true">
                    <span><i className="seat-key"><b /></i>Seat direction</span>
                    <span><i className="bar-key" />Bar top</span>
                  </div>

                  <div className="seat-layout-note">
                    <strong>Private bus · up to 33 guests</strong>
                    <span>Diagram is not to scale or live seat inventory. Bar service is included with Booze Cruise only.</span>
                  </div>
                </section>
              ) : null}

              {activeRide.id === 'mountain-shuttle' ? (
                <section className="seat-layout-panel" aria-labelledby="mountain-shuttle-layout-title">
                  <div className="seat-panel-head">
                    <span className="ride-detail-label">Coach interior</span>
                    <h3 id="mountain-shuttle-layout-title">Mountain Shuttle seat map</h3>
                  </div>

                  <div
                    className="seat-map-shell is-coach"
                    role="img"
                    aria-label="57-seat coach diagram. Thirteen rows each have two seats on the left and two seats on the right of a center aisle. Five seats span the rear row."
                  >
                    <div className="seat-map-label is-front" aria-hidden="true">Front of coach</div>
                    <div className="driver-zone" aria-hidden="true">
                      <i />
                      <span>Driver</span>
                    </div>
                    <div className="entry-door" aria-hidden="true">
                      <i />
                      <span>Door</span>
                    </div>
                    <div className="aisle-zone is-coach-aisle" aria-hidden="true"><span>Aisle</span></div>
                    {mountainShuttleLayoutSeats.map((seat) => {
                      const seatStyle = {
                        '--seat-x': `${seat.x}%`,
                        '--seat-y': `${seat.y}%`,
                      } as CSSProperties & Record<'--seat-x' | '--seat-y', string>;

                      return (
                        <span
                          aria-hidden="true"
                          className={`seat-module is-${seat.group}`}
                          key={seat.id}
                          style={seatStyle}
                        >
                          <b>{seat.label}</b>
                        </span>
                      );
                    })}
                    <div className="seat-map-label is-rear" aria-hidden="true">Rear row</div>
                  </div>

                  <p className="seat-map-caption">Reference only; final vehicle configuration may vary.</p>
                </section>
              ) : null}
            </article>
          ) : (
            <div className="ride-empty-state reveal is-visible">
              <p>Choose a ride to view photos, details, and next steps.</p>
            </div>
          )}
        </section>

        <section className="section split-section reveal" id="how-it-works" aria-labelledby="how-it-works-title">
          <div className="section-head">
            <p className="section-label">How it works</p>
            <h2 id="how-it-works-title">Three simple steps to get your group moving.</h2>
          </div>

          <div className="step-list">
            {steps.map((step, index) => {
              const StepIcon = stepIcons[index] ?? CircleCheck;

              return (
                <article className="step-card reveal" key={step.title} style={revealDelay(index + 1)}>
                  <div className="step-card-top">
                    <span className="step-index">0{index + 1}</span>
                    <span className="step-icon-shell">
                      <StepIcon aria-hidden="true" className="step-icon" strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section trust-section reveal" aria-label="Wagon Charters trust highlights">
          <div className="trust-proof">
            {trustProofs.map(({ text, Icon }) => (
              <span key={text}>
                <Icon aria-hidden="true" strokeWidth={1.8} />
                {text}
              </span>
            ))}
          </div>
        </section>

        <section className="section quote-section reveal" id="quote" ref={quoteRef} aria-labelledby="quote-title">
          <div className="quote-banner">
            <div>
              <p className="section-label">Request a quote</p>
              <h2 id="quote-title">Short form. Fast answer.</h2>
            </div>
            <p>
              Send the details and get a clear answer for your date, pickup, and group size.
            </p>
            <div className="quote-signal-strip" aria-label="Quote request expectations">
              <span>No spam</span>
              <span>Custom route</span>
              <span>Direct reply</span>
            </div>
          </div>

          <form aria-label="Quote request details" className="quote-card card" onSubmit={handleQuoteSubmit}>
            <label htmlFor="quote-ride">
              Ride
              <select
                id="quote-ride"
                name="ride"
                value={selectedRide}
                required
                onChange={(event) => setSelectedRide(event.target.value as SelectedRideId)}
              >
                <option value="">Choose a ride</option>
                {featuredRides.map((ride) => (
                  <option key={ride.id} value={ride.id}>
                    {ride.name}
                  </option>
                ))}
                <option value="custom">Custom route or special event</option>
              </select>
            </label>

            <label htmlFor="quote-name">
              Your name
              <input
                autoComplete="name"
                id="quote-name"
                name="name"
                required
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                placeholder="Name"
              />
            </label>

            <label htmlFor="quote-contact">
              Email or phone
              <input
                autoComplete="email"
                id="quote-contact"
                name="contact"
                required
                value={customerContact}
                onChange={(event) => setCustomerContact(event.target.value)}
                placeholder="you@example.com or phone"
              />
            </label>

            <label htmlFor="quote-date">
              Date
              <input
                id="quote-date"
                name="preferred-date"
                required
                type="date"
                min={minQuoteDate}
                value={preferredDate}
                onChange={(event) => setPreferredDate(event.target.value)}
              />
            </label>

            <label htmlFor="quote-group-size">
              Group size
              <input
                id="quote-group-size"
                inputMode="numeric"
                max={maxGroupSize}
                min="1"
                name="group-size"
                required
                type="number"
                value={groupSize}
                onChange={(event) => setGroupSize(event.target.value)}
                placeholder="12"
              />
            </label>

            <label htmlFor="quote-pickup">
              Pickup spot
              <input
                autoComplete="street-address"
                id="quote-pickup"
                name="pickup"
                required
                value={pickup}
                onChange={(event) => setPickup(event.target.value)}
                placeholder="Denver or nearby"
              />
            </label>

            <p className="quote-note">
              Opens a pre-addressed draft in your email app. Just hit send.
            </p>
            {!canSubmitQuote ? (
              <p className="quote-helper">
                Add ride, name, contact, date, group size, and pickup to enable the quote.
              </p>
            ) : null}
            {quoteStatus ? (
              <p className={`quote-status is-${quoteStatus.kind}`} aria-live="polite">
                {quoteStatus.kind === 'success' ? <CircleCheck aria-hidden="true" strokeWidth={2.35} /> : null}
                <span>{quoteStatus.message}</span>
              </p>
            ) : null}

            <div className="quote-actions">
              <button className="button primary" disabled={!canSubmitQuote} type="submit">
                Get my quote
              </button>
            </div>
            <p className="quote-reassurance">Private whole-bus quote · Capacity varies by ride · No spam.</p>
          </form>
        </section>

        <section className="section faq-section reveal" id="faq" aria-labelledby="faq-title">
          <div className="section-head">
            <p className="section-label">Questions people ask</p>
            <h2 id="faq-title">Quick answers before you book.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-card reveal" key={faq.question} style={revealDelay(index + 1)}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        </main>

        <footer className="footer">
          <div className="footer-brand">
            <p>Wagon Charters</p>
            <span>Private Colorado rides for groups of up to 57.</span>
          </div>
          <nav className="footer-links" aria-label="Footer links">
            <a href="#rides">Rides</a>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
            <a href="#quote">Get a quote</a>
          </nav>
          <a className="footer-contact" href={`mailto:${quoteEmail}`}>
            Email Wagon Charters
          </a>
        </footer>

        <nav
          aria-hidden={!showStickyCta}
          aria-label="Quick actions"
          className={`sticky-cta ${showStickyCta ? 'is-visible' : ''}`}
        >
          <span className="sticky-note">Private bus · up to 57 guests</span>
          <a className="button primary" href="#quote" tabIndex={showStickyCta ? undefined : -1}>
            GET A QUOTE
          </a>
        </nav>
      </div>
    </div>
  );
}
