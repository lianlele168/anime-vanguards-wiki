'use client';

import React, { useState } from 'react';
import { Calculator, Shield, Zap, Sparkles, Sliders, ArrowUpRight, Flame, RefreshCw, HelpCircle } from 'lucide-react';
import { UNITS, TRAITS, UnitData, TraitData } from '@/data/wikiData';
import AuthorCard from '@/components/AuthorCard';

const CALCULATOR_FAQS = [
  {
    question: 'How is effective Unit DPS calculated in Anime Vanguards?',
    answer: 'Unit DPS = Final Scaled Damage divided by Seconds Per Attack (SPA). Final damage incorporates Level 1-100 scaling (+1.5% per level), Trait damage multipliers, and Evolution bonuses.',
  },
  {
    question: 'Which trait provides the highest DPS increase in Anime Vanguards?',
    answer: 'The Monarch trait (1 in 500 roll chance) is supreme, granting +300% base damage, +20% range, and a -15% reduction to attack interval (SPA).',
  },
  {
    question: 'Does evolving a unit reset its level or equipped trait?',
    answer: 'No! When you evolve a unit using Evolution Essence and Rainbow Gems, its current level and rolled traits are 100% preserved while gaining massive stat upgrades and enhanced skill animations.',
  },
];

export default function CalculatorClient() {
  const [selectedUnitId, setSelectedUnitId] = useState<string>(UNITS[0].id);
  const [unitLevel, setUnitLevel] = useState<number>(100);
  const [selectedTraitId, setSelectedTraitId] = useState<string>('godly');
  const [isEvolved, setIsEvolved] = useState<boolean>(true);

  const unit = UNITS.find((u) => u.id === selectedUnitId) || UNITS[0];
  const trait = TRAITS.find((t) => t.id === selectedTraitId) || TRAITS[0];

  // Level scaling
  const levelMult = 1 + (unitLevel - 1) * 0.015;
  const baseDmgAtLevel = Math.round(unit.baseDamage * levelMult);

  // Trait Multipliers
  const traitDmgMult = trait ? trait.damageMultiplier : 1.0;
  const traitSpaRed = trait ? trait.spaReductionPercent : 0;
  const traitRangeMult = trait ? trait.rangeMultiplier : 1.0;

  // Evolution Multipliers
  const evoDmgBoost = isEvolved && unit.isEvolvedAvailable ? (1 + unit.evolutionDpsBoostPercent / 100) : 1.0;

  // Final Specs
  const finalDamage = Math.round(baseDmgAtLevel * traitDmgMult * evoDmgBoost);
  const finalSpaSec = Number((unit.spaSec * (1 - traitSpaRed / 100)).toFixed(2));
  const finalRange = Math.round(unit.rangeMeters * traitRangeMult);

  const calculatedDps = finalSpaSec > 0 ? Math.round(finalDamage / finalSpaSec) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Anime Vanguards Unit DPS & Evolution Calculator',
            applicationCategory: 'GameApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',

            author: {
              '@type': 'Person',
              name: 'Ren "Monarch" Kurogane',
              jobTitle: 'Lead Tower Defense Meta Analyst & Evolution Strategist',
            },
            mainEntity: CALCULATOR_FAQS.map((faq) => ({
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
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-red-300 text-xs font-mono font-bold mb-3">
          <Calculator className="w-3.5 h-3.5 text-red-400" />
          <span>ROBLOX ANIME VANGUARDS INTERACTIVE ENGINE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Unit DPS & Evolution Stat Calculator
        </h1>
        <p className="text-gray-400 text-sm mt-2 max-w-3xl">
          Calculate level 1-100 damage scaling, trait multipliers (Godly, Monarch, Deadeye), attack speed intervals (SPA), and evolution bonuses across all top meta units.
        </p>
      </div>

      <AuthorCard />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 5 Cols: Selectors & Sliders */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 font-mono border-b border-slate-800 pb-3">
            <Sliders className="w-5 h-5 text-red-400" />
            <span>Unit Configurations</span>
          </h2>

          {/* Select Unit */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Target Unit:</label>
            <select
              value={selectedUnitId}
              onChange={(e) => setSelectedUnitId(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 font-mono"
            >
              {UNITS.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name} ({u.rarity})
                </option>
              ))}
            </select>
          </div>

          {/* Select Trait */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Equipped Trait:</label>
            <select
              value={selectedTraitId}
              onChange={(e) => setSelectedTraitId(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 font-mono"
            >
              {TRAITS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.chancePercent}%) - +{((t.damageMultiplier - 1) * 100).toFixed(0)}% Dmg
                </option>
              ))}
            </select>
          </div>

          {/* Unit Level Slider */}
          <div className="space-y-2 font-mono">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Unit Level:</span>
              <span className="font-bold text-red-400">Lv. {unitLevel}</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={unitLevel}
              onChange={(e) => setUnitLevel(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
          </div>

          {/* Evolution Toggle */}
          {unit.isEvolvedAvailable && (
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div>
                <span className="text-sm font-bold text-white block">Evolved Awakening Form</span>
                <span className="text-xs text-emerald-400">+{unit.evolutionDpsBoostPercent}% DPS Boost</span>
              </div>
              <input
                type="checkbox"
                checked={isEvolved}
                onChange={(e) => setIsEvolved(e.target.checked)}
                className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-red-600 focus:ring-red-500 cursor-pointer"
              />
            </div>
          )}
        </div>

        {/* Right 7 Cols: DPS Output Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0c0d1e] to-[#080812] border border-red-900/50 shadow-2xl space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase font-mono tracking-widest text-red-400 font-bold">Calculated Combat DPS</span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-red-950 text-red-300 border border-red-800 font-mono">
                {unit.element} Element
              </span>
            </div>

            <div>
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-400 font-mono">
                {calculatedDps.toLocaleString()} <span className="text-lg text-gray-400">DPS</span>
              </div>
              <p className="text-xs text-gray-400 mt-2 font-mono">
                Deals {finalDamage.toLocaleString()} damage every {finalSpaSec}s across {finalRange}m radius.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 font-mono text-center">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-[10px] text-gray-500 block uppercase">Base Damage</span>
                <span className="text-lg font-bold text-white">{finalDamage.toLocaleString()}</span>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-[10px] text-gray-500 block uppercase">Attack SPA</span>
                <span className="text-lg font-bold text-amber-400">{finalSpaSec}s</span>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-[10px] text-gray-500 block uppercase">Attack Range</span>
                <span className="text-lg font-bold text-cyan-400">{finalRange}m</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080d19] border border-red-900/30 space-y-6">
        <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" /> Calculator Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CALCULATOR_FAQS.map((faq, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-slate-200">{faq.question}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
