/** Shop identity and public rates. Pages import from here — no $ literals in src/pages. */

export const site = {
  name: 'The PC Project',
  tagline: 'Custom PCs, repairs and gaming lounge in Northbridge, Perth.',
  url: 'https://thepcproject.com.au',
  email: 'contact@thepcproject.com.au',
  ogImage: '/images/storefront.jpg',
  address: {
    street: '2/62 Fitzgerald Street',
    suburb: 'Northbridge',
    state: 'WA',
    postcode: '6003',
    country: 'AU',
    line: '2/62 Fitzgerald Street, Northbridge WA 6003',
    short: '2/62 Fitzgerald Street, Northbridge 6003',
  },
  mapsQuery: '2/62 Fitzgerald Street, Northbridge WA 6003',
  socials: {
    instagram: 'https://www.instagram.com/thepcprojectau/',
    facebook: 'https://www.facebook.com/profile.php?id=61583668420452',
  },
  hours: [
    { label: 'Mon – Fri', value: '9am – 6pm', muted: false },
    { label: 'Sat', value: '10am – 5pm', muted: false },
    { label: 'Sun', value: 'Closed', muted: true },
  ],
  hoursBlurb: 'We are open Mon–Fri 9am–6pm and Sat 10am–5pm; closed Sunday.',
  quoteDays: 7,
  fees: {
    build: 50,
    cable: 50,
    themed: 100,
    themedPremium: 150,
  },
  programs: {
    levelUp: 100,
    workshop: 100,
    gpuSwap: 50,
    basicService: 50,
  },
  /** Interim §2.7 — flagged for owner review until finals land. */
  services: {
    diagnostics: 49,
    labourHour: 110,
    osInstall: 99,
    recoveryFrom: 199,
  },
  /** Locked §2.8 live-page rates. */
  lounge: {
    casualHour: 9,
    standardWeek: 20,
    premiumWeek: 25,
    ultimateWeek: 30,
  },
  budgets: [
    { id: 'under-1000', label: 'Under $1,000' },
    { id: '1000-1500', label: '$1,000–$1,500' },
    { id: '1500-2000', label: '$1,500–$2,000' },
    { id: '2000-3000', label: '$2,000–$3,000' },
    { id: '3000-plus', label: '$3,000+' },
    { id: 'unsure', label: 'Not sure' },
    { id: 'custom', label: 'Custom $' },
  ],
} as const;

export { currentTournament } from './tournament.ts';
export function aud(n: number): string {
  return `$${n}`;
}

export function mailto(subject?: string): string {
  return subject
    ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${site.email}`;
}

export function mapsEmbedSrc(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ComputerStore',
    name: site.name,
    description: site.tagline,
    url: site.url,
    email: site.email,
    image: new URL(site.ogImage, site.url).href,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '17:00',
      },
    ],
    sameAs: [site.socials.instagram, site.socials.facebook],
  };
}
