import React from 'react';
import type { Metadata } from 'next';
import CodesClient from './CodesClient';

export const metadata: Metadata = {
  title: 'Roblox Anime Vanguards Codes (September 2026) - Free Gems & Rerolls',
  description: 'Full list of active Roblox Anime Vanguards codes for September 2026. Redeem free Trait Rerolls, Rainbow Gems, and Super Stat Chips.',
  alternates: {
    canonical: '/codes',
  },
  keywords: ['anime vanguards codes', 'anime vanguards trait reroll codes', 'anime vanguards gems code'],
};

export default function CodesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do you redeem codes in Anime Vanguards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In the lobby, walk towards the Codes NPC near the summoning portal or open the Codes button on the right side of the HUD. Enter your code and click Claim.',
        },
      },
      {
        '@type': 'Question',
        name: 'What rewards do Anime Vanguards codes provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Codes grant free Trait Rerolls, Rainbow Gems for summons, and Super Stat Chips to enhance unit IV stats.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CodesClient />
    </>
  );
}
