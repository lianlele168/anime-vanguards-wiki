import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roblox Anime Vanguards Beginner & Infinite Mode Guides (September 2026)',
  description: 'Complete gameplay guide for Anime Vanguards: Early game cash generation, elemental boss counters, positioning choke points, and wave 80+ Infinite strategies.',
  alternates: {
    canonical: '/guides',
  },
  keywords: ['anime vanguards guide', 'anime vanguards infinite mode strategy', 'anime vanguards paragon raid tips'],
};


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Shield, Zap, Compass, Check, HelpCircle, Flame, DollarSign } from 'lucide-react';
import { GUIDES } from '@/data/wikiData';
import AuthorCard from '@/components/AuthorCard';

const GUIDE_FAQS = [
  {
    question: 'How do you maximize early-game cash generation in Anime Vanguards?',
    answer: 'Place Takaroda or Speedwagon at the beginning of Wave 1. Upgrade cash generators before investing in offensive units until reaching Tier 3, ensuring a constant stream of Yen for mid-game DPS spikes.',
  },
  {
    question: 'What is the most effective elemental team composition for Paragon Stages?',
    answer: 'Bring a 3-element core: 1 Fire AoE burner to melt swarms, 1 Lightning unit with Monarch trait to stun-lock armored bosses, and 1 Holy unit to bypass dark damage reductions.',
  },
  {
    question: 'How do you survive past Wave 80 in Infinite Mode?',
    answer: 'Stack slow debuffs using Ice/Water support units while placing full-map range snipers with Godly or Deadeye traits. Position your evolved mythic DPS units at intersecting choke points for maximum splash coverage.',
  },
  {
    question: 'Where can you farm Evolution Essence quickly?',
    answer: 'Farm daily Challenge Raids and complete Legend Stages with 3-star ratings. Alternatively, exchange raid medals at the wandering merchant kiosk every weekend.',
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-sans">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            dateModified: '2026-09-15',
            author: {
              '@type': 'Person',
              name: 'Ren "Monarch" Kurogane',
              jobTitle: 'Lead Tower Defense Meta Analyst & Evolution Strategist',
            },
            mainEntity: GUIDE_FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Header */}
      <div className="border-b border-red-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-red-400 text-xs font-mono font-bold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>PRO TOWER DEFENSE STRATEGY BLUEPRINTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Stage, Raid & Infinite Mode Strategy Masterclass
        </h1>
        <p className="text-gray-400 text-sm mt-2 max-w-3xl leading-relaxed">
          Master cash farm placement economics, optimize Paragon Stage 1-10 elemental counter synergies, calibrate unit DPS scaling using our <Link href="/calculator" className="text-red-400 hover:underline font-bold">DPS Calculator</Link>, and conquer Infinite Mode Wave 100+.
        </p>
      </div>

      <AuthorCard />

      {/* Gameplay Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="rounded-2xl overflow-hidden border border-red-900/40 bg-slate-900/60 p-4 flex flex-col items-center">
          <Image
            src="/images/anime-vanguards-hero.webp"
            alt="Anime Vanguards Official Tower Defense Battlefield"
            width={640}
            height={360}
            className="rounded-xl object-cover w-full h-56 border border-red-950"
            priority
          />
          <p className="text-xs text-gray-400 mt-2 text-center font-mono">
            Figure 1: Official Anime Vanguards Arena — Multi-lane choke points and unit deployment rings.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-red-900/40 bg-slate-900/60 p-4 flex flex-col items-center">
          <Image
            src="/images/anime-vanguards-icon.webp"
            alt="Anime Vanguards Game Icon and Mythic Summon Emblem"
            width={640}
            height={360}
            className="rounded-xl object-contain w-full h-56 bg-black/50 border border-red-950"
          />
          <p className="text-xs text-gray-400 mt-2 text-center font-mono">
            Figure 2: Official Anime Vanguards Emblem — Mythic summon banners and monarch traits.
          </p>
        </div>
      </div>

      {/* Economic & Wave Tactics Section */}
      <div className="space-y-6">
        <section className="p-6 sm:p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-4">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-400" />
            1. Early Wave Economy & Compound Interest Strategy
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            In high-tier Tower Defense maps, failure almost always traces back to poor early economic snowballing. Deploying offensive units on Wave 1 wastes valuable Yen. Instead, drop farm units like Takaroda or Speedwagon right at the gate. Allow your base barrier to absorb initial weak mob hits if necessary, funneling 100% of wave-end cash back into farm upgrades. By Wave 6, this strategy yields 3x the spending power of a player who built offensive towers early.
          </p>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-4">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            2. Infinite Mode Choke Points & Debuff Stacking
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Past Wave 50, standard enemy HP pools scale exponentially into the millions. Raw damage without crowd-control fails completely. Your frontline must feature units that inflict slow, freeze, bleed, and defense-reduction debuffs. Grouping enemies inside overlapping AoE zones increases effective team DPS by over 400%.
          </p>
        </section>
      </div>

      {/* Written Guides Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GUIDES.map((g, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-red-950 text-red-300 border border-red-800 font-bold">
                  {g.category}
                </span>
                <span className="text-gray-500">{g.readTime}</span>
              </div>

              <h2 className="text-2xl font-black text-white font-mono">{g.title}</h2>
              <p className="text-xs text-gray-300 leading-relaxed font-mono">{g.summary}</p>

              <div className="space-y-3 pt-4 border-t border-slate-800 font-mono text-xs">
                {g.steps.map((step, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-lg bg-red-950 text-red-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {sIdx + 1}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-6">
        <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          Guides Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GUIDE_FAQS.map((faq, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-slate-200 font-mono">{faq.question}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
