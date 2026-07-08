/**
 * site.ts — the business (singleton SITE).
 *
 * EDIT HERE to rebrand. `trade` and `region` are interpolated into titles,
 * descriptions, headings, and schema across the whole site — set them carefully.
 *
 * NOTE: This is a placeholder identity. Swap company / phone / email / url for the
 * real business before launch (see SPEC §11 rebrand checklist).
 */
export interface SiteConfig {
  company: string;
  tagline: string;
  /** What the business does, lowercase, for prose: "brake repair" */
  trade: string;
  phone: string; // dialable, E.164
  phoneDisplay: string; // shown to visitors
  email: string;
  /** Service-area region name shown in headlines, e.g. "San Antonio" */
  region: string;
  /** Production URL — keep in sync with `site` in astro.config.mjs (or set SITE_URL). */
  url: string;
  /** External form handler (Formspree/Web3Forms/Worker). "" → call-only mode (submit disabled). */
  formEndpoint: string;
  /** Web3Forms access key, if using Web3Forms (otherwise leave ""). */
  formAccessKey: string;
  /** Unused by default — service-area renders two keyless Google embeds. */
  mapEmbedSrc: string;
  priceRange: string; // e.g. "$$"  → schema
  /** AggregateRating — leave "" until there are real, verifiable reviews (fake ratings are a scammy signal and break schema). */
  ratingValue: string;
  reviewCount: string;
}

export const SITE: SiteConfig = {
  company: 'North Georgia Septic',
  tagline: 'Septic Pumping, Repair & Inspections',
  trade: 'septic service',
  phone: '+17065550142', // PLACEHOLDER — fictitious 555-01xx range; swap for the real (706/762) number before launch
  phoneDisplay: '(706) 555-0142',
  email: 'service@northgamountainseptic.com', // PLACEHOLDER local-part — confirm the real inbox
  region: 'North Georgia',
  url: 'https://northgamountainseptic.com', // keep in sync with astro.config.mjs
  // Web3Forms backend → routes submissions to the email registered with the access key.
  // Shared key routes leads to azbaghda@gmail.com. Form stays in safe call-only mode until a
  // key is set, so deploying without one won't break it.
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: 'e3cc242b-9bf1-4322-af8a-6f64a8e780ac', // Web3Forms → azbaghda@gmail.com
  mapEmbedSrc: '',
  priceRange: '$$',
  // No reviews wired up yet. Leave blank until real, verifiable reviews exist.
  ratingValue: '',
  reviewCount: '',
};

export const tel = (phone: string = SITE.phone): string => `tel:${phone}`;
