export const featuredRides = [
  {
    id: 'red-rocks',
    name: 'Red Rocks Special',
    blurb: 'Door-to-door runs for concerts, weddings, and everyone who wants to get there together.',
    badge: 'Most booked',
    route: 'Denver area to Red Rocks and back',
    accent: 'Sunset route',
    image: 'images/red-rocks-special.jpg',
    imageAlt: 'Maroon charter bus parked in daylight',
    details: ['Private charter', 'Group-friendly', 'Easy quote'],
  },
  {
    id: 'booze-cruise',
    name: 'Booze Cruise',
    blurb: 'A flexible ride for brewery loops, birthday chaos, and nights that need a designated driver with taste.',
    badge: 'Best for groups',
    route: 'Custom pickup and dropoff',
    accent: 'Night route',
    image: 'images/booze-cruise.jpg',
    imageAlt: 'Maroon charter bus at blue hour',
    details: ['Flexible timing', 'Local routes', 'Custom itinerary'],
  },
] as const;

export const trustPoints = [
  'No weird booking maze',
  'Real photos, not stock nonsense',
  'Fast quote flow for mobile',
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
  'Red Rocks nights',
  'Brewery crawls',
  'Ski-town weekend runs',
] as const;

export const metrics = [
  { label: 'signature rides', value: '02' },
  { label: 'simple request flow', value: '01' },
  { label: 'desktop clutter', value: '0' },
] as const;

export const heroImages = [
  {
    src: 'images/hero-bus.jpg',
    alt: 'Maroon charter bus at Red Rocks',
  },
] as const;

export const faqs = [
  {
    question: 'Can I request a custom route?',
    answer: 'Yep. Custom pickup and dropoff are part of the plan.',
  },
  {
    question: 'Is this only for Red Rocks?',
    answer: 'No. Red Rocks is the headline, but the site also covers brewery runs and custom group trips.',
  },
  {
    question: 'Will desktop come later?',
    answer: 'Yes. This first pass is mobile-only so the booking experience gets fixed where it matters most.',
  },
] as const;
