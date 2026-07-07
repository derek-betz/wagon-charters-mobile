export const featuredRides = [
  {
    id: 'red-rocks',
    name: 'Red Rocks Special',
    blurb: 'Door-to-door runs for concerts, weddings, and everyone who wants to get there together.',
    badge: 'Most booked',
    route: 'Denver area to Red Rocks and back',
    accent: 'Sunset route',
    image: 'images/red-rocks-card-mobile.webp',
    imageAlt: 'Red Rocks amphitheater at golden hour',
    details: ['Private charter', 'Group-friendly', 'Easy quote'],
    detailTitle: 'Concert nights without the parking scramble.',
    detailCopy:
      'Reserve your seats on the shared Red Rocks run, keep the crew together, and skip the parking scramble before the opener even starts.',
    detailImages: [
      {
        src: 'images/red-rocks-venue-mobile.webp',
        alt: 'Red Rocks amphitheater at golden hour',
        label: 'The venue',
      },
      {
        src: 'images/red-rocks-detail-mobile.webp',
        alt: 'Maroon charter bus near Red Rocks at sunset',
        label: 'The ride',
      },
    ],
    highlights: ['Shared concert run', 'Seat selection', 'Concert-ready timing'],
  },
  {
    id: 'booze-cruise',
    name: 'Booze Cruise',
    blurb: 'A flexible ride for bar crawls, brewery loops, birthdays, and late nights with a dedicated driver and onboard bar.',
    badge: 'Best for groups',
    route: 'Custom pickup and dropoff',
    accent: 'Night route',
    image: 'images/booze-card-mobile.webp',
    imageAlt: 'Maroon charter bus at blue hour',
    details: ['Flexible timing', 'Local routes', 'Custom itinerary'],
    detailTitle: 'A private bar crawl with the ride built in.',
    detailCopy:
      'Reserve the whole bus for the evening, set the route, and let the onboard bar and night-lit cabin make the ride part of the party.',
    detailImages: [
      {
        src: 'images/booze-cruise-party-mobile.webp',
        alt: 'Adults celebrating inside a private party bus with green lighting',
        label: 'Party bus interior',
        variant: 'wide',
      },
      {
        src: 'images/booze-original-mobile.webp',
        alt: 'Maroon charter bus parked at blue hour',
        label: 'The bus',
      },
      {
        src: 'images/booze-cruise-interior-mobile.webp',
        alt: 'Adults enjoying neon lighting inside a private charter bus',
        label: 'Inside',
      },
    ],
    highlights: ['Whole-bus private rental', 'Onboard bar setup', 'Custom stops and timing'],
  },
] as const;

export const steps = [
  {
    title: 'Pick the ride',
    text: 'Choose Red Rocks, a bar crawl, or a custom shuttle that fits your group.',
  },
  {
    title: 'Send the details',
    text: 'Share your date, headcount, and pickup spot from a simple quote form.',
  },
  {
    title: 'Get moving',
    text: 'Confirm the trip and keep the whole crew on the same page from the start.',
  },
] as const;

export const heroImages = [
  {
    src: 'images/red-rocks-hero-mobile.webp',
    alt: 'Maroon charter bus parked in daylight',
  },
] as const;

export const pageBackdrop = 'images/page-backdrop.jpg';

export const originalShots = [
  {
    title: 'The bus – with the crew',
    caption: 'Wagon Charters',
    src: 'images/about-original-mobile.webp',
    alt: 'Maroon charter bus with a person standing beside it under trees',
  },
  {
    title: 'The bus – at the wheel',
    caption: 'Wagon Charters',
    src: 'images/extra-original-mobile.webp',
    alt: 'Maroon charter bus with the driver visible through the windshield at sunset',
  },
] as const;

export const faqs = [
  {
    question: 'Can I request a custom route?',
    answer: 'Yep. Custom pickup and dropoff are part of the plan.',
  },
  {
    question: 'Is this only for Red Rocks?',
    answer: 'No. Red Rocks is the headline, but the bus also covers bar crawls, brewery runs, mountain shuttles, and custom group trips.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'Send your date, pickup spot, group size, and route idea. You will get a clear answer for availability and next steps.',
  },
] as const;
