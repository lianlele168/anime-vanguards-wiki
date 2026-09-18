import React from 'react';
import type { Metadata } from 'next';
import EvolutionRecipesClient from './EvolutionRecipesClient';
import { EVOLUTION_RECIPES } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Anime Vanguards Evolution Recipes & Material Guide ',
  description: 'Complete evolution recipes for all Mythic and Secret units in Anime Vanguards. Required essences, rainbow gems, and stage drop locations.',
  alternates: {
    canonical: '/evolution-recipes',
  },
  keywords: ['anime vanguards evolution recipes', 'anime vanguards how to evolve song jinwu', 'anime vanguards evolution essence'],
};

export default function EvolutionRecipesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Anime Vanguards Evolution Recipes',
    description: 'Material requirements and essences for evolving units in Anime Vanguards.',
    numberOfItems: EVOLUTION_RECIPES.length,
    itemListElement: EVOLUTION_RECIPES.map((r, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: `${r.unitName} -> ${r.evolvedName}`,
      description: `Evolves ${r.unitName} with ${r.gemCost.toLocaleString()} gems and materials: ${r.statBoostSummary}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <EvolutionRecipesClient />
    </>
  );
}
