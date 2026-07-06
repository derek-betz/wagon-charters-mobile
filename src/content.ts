export const featuredRides = [
  {
    id: 'red-rocks',
    name: 'Red Rocks Special',
    blurb: 'Door-to-door service for concerts, weddings, and group nights that should end with everyone arriving upright.',
    badge: 'Most booked',
    route: 'Denver area to Red Rocks and back',
    accent: 'Sunset route',
    image:
      'https://images.squarespace-cdn.com/content/v1/69d1df54e9744d79abd062d2/e6bbb916-9ed1-434a-8d96-d84dd0b2c3cf/redrocks2.jpg?format=1500w',
    details: ['Private charter', 'Group-friendly', 'Easy quote'],
  },
  {
    id: 'booze-cruise',
    name: 'Booze Cruise',
    blurb: 'A flexible ride for brewery loops, birthday chaos, and anywhere the night gets better after the first stop.',
    badge: 'Best for groups',
    route: 'Custom pickup and dropoff',
    accent: 'Night route',
    image:
      'https://images.squarespace-cdn.com/content/v1/69d1df54e9744d79abd062d2/fd5714b4-b8c5-4aec-bfaa-8a8101640a69/IMG_2522.jpeg?format=1500w',
    details: ['Flexible timing', 'Local routes', 'Custom itinerary'],
  },
] as const;

export const trustPoints = [
  'Mobile quote flow built to finish in under a minute',
  'Clear ride options without hunting through five pages of fluff',
  'Trust-forward layout with service area and booking details up front',
] as const;

export const steps = [
  {
    title: 'Pick the ride',
    text: 'Choose Red Rocks or the Booze Cruise, then tap to see what fits your group.',
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

export const highlights = [
  'Premium charter vibes',
  'Mobile-first booking',
  'Big type. Bigger attitude.',
] as const;

export const metrics = [
  { label: 'signature rides', value: '02' },
  { label: 'simple request flow', value: '01' },
  { label: 'desktop clutter', value: '0' },
] as const;

export const heroImages = [
  {
    src: 'https://static1.squarespace.com/static/69d1df54e9744d79abd062d2/t/6a3c6aade4bd8a75f1312596/1782344365620/Maroon+on+Red.png?format=1500w',
    alt: 'Maroon charter bus on a bright day',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/69d1df54e9744d79abd062d2/48692b27-eeec-4249-b913-5e78f2099907/IMG_3971.jpg?format=1500w',
    alt: 'Charter bus parked with a wide open view',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/69d1df54e9744d79abd062d2/4491abb3-683a-47f2-ab4e-4a8b1f97f049/IMG_3170.jpg?format=1500w',
    alt: 'Charter bus at a scenic stop',
  },
] as const;

export const faqs = [
  {
    question: 'Can I request a custom route?',
    answer: 'Yep. The new flow is built around quotes, so custom pickup and dropoff is part of the plan.',
  },
  {
    question: 'Is this only for Red Rocks?',
    answer: 'No. Red Rocks is the hero offer, but the site also supports custom group rides and booze-cruise style outings.',
  },
  {
    question: 'Will desktop come later?',
    answer: 'Yes. This first pass is mobile-only so the booking experience gets fixed where it matters most.',
  },
] as const;
