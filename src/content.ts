export const featuredRides = [
  {
    id: 'red-rocks',
    name: 'Red Rocks Special',
    blurb: 'A private whole-bus charter that keeps your group together from pickup through the encore.',
    badge: 'Most booked',
    route: 'Denver area to Red Rocks and back',
    accent: 'Sunset route',
    image: 'images/red-rocks-card-mobile.webp',
    imageAlt: 'Red Rocks amphitheater at golden hour',
    details: ['Private whole bus', 'Up to 33 guests', 'Layout preview'],
    detailTitle: 'Concert nights without the parking scramble.',
    detailCopy:
      'Reserve the entire bus for your group, set the pickup plan, and skip the parking scramble before the opener even starts.',
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
    highlights: ['Private whole-bus booking', 'Handicap accessible', 'Neon lights and sound system'],
  },
  {
    id: 'booze-cruise',
    name: 'Booze Cruise',
    blurb: 'A flexible ride for bar crawls, brewery loops, birthdays, and late nights with a dedicated driver, onboard bar, and all drinks included.',
    badge: 'Best for groups',
    route: 'Custom pickup and dropoff',
    accent: 'Night route',
    image: 'images/booze-card-mobile.webp',
    imageAlt: 'Maroon charter bus at blue hour',
    details: ['Private whole bus', '21+ only', 'All drinks included'],
    detailTitle: 'A private bar crawl with the ride built in.',
    detailCopy:
      'Reserve the whole bus for your 21+ group, set the route, and let the included drinks, onboard bar, neon lights, and sound system make the ride part of the party.',
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
    highlights: ['All drinks included', 'Onboard bar included', 'Neon lights and sound system'],
  },
  {
    id: 'mountain-shuttle',
    name: 'Mountain Shuttle',
    blurb: 'Private transportation for mountain days, group getaways, and custom Colorado pickup and return plans.',
    badge: 'Colorado day trip',
    route: 'Denver to your mountain stop',
    accent: 'Mountain route',
    image: 'images/mountain-shuttle-i70-ai.webp',
    imageAlt: 'Red MCI motorcoach traveling on Interstate 70 through Glenwood Canyon',
    details: ['Private whole bus', 'Up to 57 guests', 'Custom itinerary'],
    detailTitle: 'Mountain transportation built around your group.',
    detailCopy:
      'Book the entire bus, choose the pickup and mountain destination, and keep everyone on one schedule for the ride out and back.',
    detailImages: [
      {
        src: 'images/mountain-shuttle-i70-ai.webp',
        alt: 'Red MCI motorcoach traveling on Interstate 70 through Glenwood Canyon',
        label: 'I-70 mountain route',
        variant: 'wide',
      },
    ],
    highlights: ['Up to 57 guests', 'Handicap accessible', 'Flexible pickup and return'],
  },
  {
    id: 'mimosa-tour',
    name: 'Denver Mimosa Tours',
    blurb: 'A private daytime loop for brunch stops, birthdays, and celebrations around Denver.',
    badge: 'Daytime favorite',
    route: 'Custom Denver brunch loop',
    accent: 'Day route',
    image: 'images/about-original-mobile.webp',
    imageAlt: 'Maroon Wagon Charters bus with the crew in Denver',
    details: ['Private whole bus', 'Custom stops', 'Up to 33 guests'],
    detailTitle: 'Turn brunch into a private Denver tour.',
    detailCopy:
      'Choose the brunch stops, gather the group, and keep the celebration moving with a private bus and a route made for your day.',
    detailImages: [
      {
        src: 'images/about-original-mobile.webp',
        alt: 'Maroon Wagon Charters bus with a person standing beside it',
        label: 'The Wagon',
      },
      {
        src: 'images/booze-original-mobile.webp',
        alt: 'Maroon Wagon Charters bus parked at blue hour',
        label: 'Your private ride',
      },
    ],
    highlights: ['Private whole-bus booking', 'Custom brunch stops', 'Neon lights and sound system'],
  },
] as const;

export const steps = [
  {
    title: 'Pick the ride',
    text: 'Choose a featured ride or send a custom route for your group.',
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
    answer: 'Yes. Custom shuttles, special events, weddings, and one-off routes are all on the table.',
  },
  {
    question: 'How many people can ride?',
    answer: 'Capacity depends on the ride. Mountain Shuttle groups can include up to 57 guests; other featured rides accommodate up to 33.',
  },
  {
    question: 'Are the buses accessible?',
    answer: 'Yes. All Wagon Charters buses are handicap accessible.',
  },
  {
    question: 'Does every ride include the onboard bar?',
    answer: 'No. The onboard bar and all drinks are included with the Booze Cruise only, and Booze Cruise groups must be 21 or older.',
  },
  {
    question: 'Can I smoke on the bus?',
    answer: 'No. Cigarette smoking is not allowed on any Wagon Charters bus.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'Send your date, pickup spot, group size, and route idea. You will get a clear answer for availability and next steps.',
  },
] as const;
