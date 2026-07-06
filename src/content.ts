export const featuredRides = [
  {
    id: 'red-rocks',
    name: 'Red Rocks Special',
    blurb: 'Door-to-door service for concerts, weddings, and group nights that should end with everyone arriving upright.',
    badge: 'Most booked',
    route: 'Denver area to Red Rocks and back',
    details: ['Private charter', 'Group-friendly', 'Easy quote'],
  },
  {
    id: 'booze-cruise',
    name: 'Booze Cruise',
    blurb: 'A flexible ride for brewery loops, birthday chaos, and anywhere the night gets better after the first stop.',
    badge: 'Best for groups',
    route: 'Custom pickup and dropoff',
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
