import React from 'react';
import type { Metadata } from 'next';
import TraitSimulatorClient from './TraitSimulatorClient';

export const metadata: Metadata = {
  title: 'Roblox Anime Vanguards Trait Reroll Simulator ',
  description: 'Simulate rolling Monarch, Godly, Solar, and Blitz traits in Anime Vanguards. Track trait reroll tokens spent and test rolling odds.',
  alternates: {
    canonical: '/trait-simulator',
  },
  keywords: ['anime vanguards trait simulator', 'anime vanguards monarch roll chance', 'anime vanguards trait reroll odds'],
};

export default function TraitSimulatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Anime Vanguards Trait Reroll Simulator',
    url: 'https://animevanguards.robloxwikihub.com/trait-simulator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    description: 'Interactive trait reroll simulation testing Monarch and Godly roll odds.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TraitSimulatorClient />
    </>
  );
}
