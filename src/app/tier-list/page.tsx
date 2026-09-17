import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime Vanguards Unit Tier List & Meta Rankings (September 2026)',
  description: 'Official Anime Vanguards unit tier list. Discover top meta DPS, debuffers, and hybrid support units evaluated across Infinite Mode and Paragon Raids.',
  alternates: {
    canonical: '/tier-list',
  },
  keywords: ['anime vanguards tier list', 'best units anime vanguards', 'song jinwu tier', 'anime vanguards meta units'],
};


import React from 'react';
import { Trophy, Shield, Flame, Sparkles } from 'lucide-react';
import { TIER_LIST } from '@/data/wikiData';

export default function TierListPage() {
  const tiers: ('S+' | 'S' | 'A' | 'B')[] = ['S+', 'S', 'A', 'B'];

  const tierColors = {
    'S+': 'from-purple-600 via-pink-600 to-amber-400 border-purple-500 text-purple-400',
    'S': 'from-indigo-500 to-purple-600 border-indigo-500 text-indigo-400',
    'A': 'from-blue-500 to-cyan-600 border-blue-500 text-cyan-400',
    'B': 'from-slate-600 to-gray-700 border-gray-600 text-gray-400'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/50 text-purple-300 text-xs font-mono font-bold mb-3">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>2026 OFFICIAL ANIME VANGUARDS META RANKINGS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Anime Vanguards Unit Tier List
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Evaluated based on DPS output, SPA attack speed, evolution stat scaling, Infinite Mode wave clears, and Paragon Boss Raid performance.
        </p>
      </div>

      {/* Tier List Stack */}
      <div className="space-y-8">
        {tiers.map((tier) => {
          const itemsInTier = TIER_LIST.filter((i) => i.tier === tier);
          if (itemsInTier.length === 0) return null;

          return (
            <div key={tier} className="p-6 rounded-3xl bg-[#080d19] border border-purple-950 space-y-4">
              {/* Tier Header Badge */}
              <div className="flex items-center space-x-3">
                <div className={`w-14 h-12 rounded-2xl bg-gradient-to-r ${tierColors[tier]} p-0.5 shadow-lg`}>
                  <div className="w-full h-full bg-[#080d19] rounded-[14px] flex items-center justify-center font-black font-mono text-xl text-white">
                    {tier}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white font-mono">
                    {tier === 'S+' ? 'God Tier Secret & Monarch Units' : tier === 'S' ? 'Meta Dominant Mythics' : tier === 'A' ? 'Essential Support & Cash Farms' : 'Balanced'}
                  </h2>
                  <span className="text-xs text-gray-400 font-mono">{itemsInTier.length} Units in this Tier</span>
                </div>
              </div>

              {/* Unit Cards in Tier */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {itemsInTier.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
                  >
                    <div className="flex justify-between items-center font-mono">
                      <span className="font-extrabold text-white text-base">{item.name}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-purple-950 text-purple-300 rounded border border-purple-800">
                        {item.role}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed">{item.reason}</p>

                    <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-yellow-400 font-bold">
                      ⚡ {item.statsSummary}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
