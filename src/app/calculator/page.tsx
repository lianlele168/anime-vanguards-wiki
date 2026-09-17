import React from 'react';
import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Roblox Anime Vanguards Unit DPS Calculator (September 2026) | Roblox',
  description: 'Interactive DPS calculator for Roblox Anime Vanguards. Calculate level 1-100 damage scaling, trait multipliers (Monarch, Godly), and evolution DPS curves.',
  alternates: {
    canonical: '/calculator',
  },
  keywords: ['anime vanguards dps calculator', 'anime vanguards unit stats', 'anime vanguards monarch trait dps', 'anime vanguards evolution boost'],
};

export default function CalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Roblox Anime Vanguards DPS Calculator',
    url: 'https://animevanguards.robloxwikihub.com/calculator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    description: 'Real-time damage and attack interval calculator for units in Anime Vanguards.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorClient />
    </>
  );
}
