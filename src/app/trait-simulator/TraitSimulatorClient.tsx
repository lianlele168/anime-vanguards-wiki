'use client';

import React, { useState } from 'react';
import { Sparkles, RefreshCw, Zap, ShieldCheck, Flame, Trophy, Play } from 'lucide-react';
import { TRAITS, TraitData } from '@/data/wikiData';

export default function TraitSimulatorClient() {
  const [useLuckyPotion, setUseLuckyPotion] = useState<boolean>(true);
  const [rolledTrait, setRolledTrait] = useState<TraitData | null>(null);
  const [totalRolls, setTotalRolls] = useState<number>(0);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  // Roll stats counter
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    godly: 0,
    monarch: 0,
    deadeye: 0,
    solar: 0,
    swift: 0,
    nimble: 0
  });

  const performRoll = (): TraitData => {
    // Basic weighted RNG
    // Base chances: Godly 0.1%, Monarch 0.05%, Deadeye 0.5%, Solar 1%, Swift 2.5%, Nimble 5%, Common remainder
    const luckyMult = useLuckyPotion ? 2.5 : 1.0;
    const rand = Math.random() * 100;

    if (rand < 0.1 * luckyMult) return TRAITS.find((t) => t.id === 'godly')!;
    if (rand < (0.1 + 0.05) * luckyMult) return TRAITS.find((t) => t.id === 'monarch')!;
    if (rand < (0.15 + 0.5) * luckyMult) return TRAITS.find((t) => t.id === 'deadeye')!;
    if (rand < (0.65 + 1.0) * luckyMult) return TRAITS.find((t) => t.id === 'solar')!;
    if (rand < (1.65 + 2.5) * luckyMult) return TRAITS.find((t) => t.id === 'swift')!;
    return TRAITS.find((t) => t.id === 'nimble')!;
  };

  const handleRollOnce = () => {
    if (isRolling) return;
    setIsRolling(true);

    setTimeout(() => {
      const trait = performRoll();
      setRolledTrait(trait);
      setTotalRolls((prev) => prev + 1);
      setCounts((prev) => ({
        ...prev,
        [trait.id]: (prev[trait.id] || 0) + 1
      }));
      setIsRolling(false);
    }, 250);
  };

  const handleRoll10x = () => {
    if (isRolling) return;
    setIsRolling(true);

    setTimeout(() => {
      let lastTrait = rolledTrait;
      const newCounts = { ...counts };

      for (let i = 0; i < 10; i++) {
        const t = performRoll();
        lastTrait = t;
        newCounts[t.id] = (newCounts[t.id] || 0) + 1;
      }

      setRolledTrait(lastTrait);
      setTotalRolls((prev) => prev + 10);
      setCounts(newCounts);
      setIsRolling(false);
    }, 400);
  };

  const handleReset = () => {
    setRolledTrait(null);
    setTotalRolls(0);
    setCounts({ godly: 0, monarch: 0, deadeye: 0, solar: 0, swift: 0, nimble: 0 });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/50 text-purple-300 text-xs font-mono font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>ROBLOX ANIME VANGUARDS LUCK SIMULATOR</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Trait Reroll Luck Simulator
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Simulate rolling SSS Godly (0.1%) & Monarch (0.05%) traits with Super Lucky Potions. Test your luck before spending in-game Gem rerolls.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 7 Cols: Roll Stage & Animation Box */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#090e1c] to-[#040710] border border-purple-900/40 space-y-6 text-center">
            {/* Lucky Potion Toggle */}
            <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-2xl border border-slate-800 font-mono text-xs">
              <span className="text-gray-300 font-bold flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Super Lucky Potion (2.5x Luck)</span>
              </span>
              <button
                onClick={() => setUseLuckyPotion(!useLuckyPotion)}
                className={`px-4 py-1.5 rounded-xl font-bold transition-all ${
                  useLuckyPotion ? 'bg-amber-500 text-black shadow-lg' : 'bg-slate-800 text-gray-400'
                }`}
              >
                {useLuckyPotion ? 'ENABLED (+150%)' : 'DISABLED (1x)'}
              </button>
            </div>

            {/* Reroll Display Card Stage */}
            <div className="w-full h-64 rounded-3xl bg-slate-950 border border-purple-900/50 flex flex-col items-center justify-center p-6 relative overflow-hidden shadow-2xl">
              {isRolling ? (
                <div className="space-y-3 animate-pulse">
                  <RefreshCw className="w-12 h-12 text-purple-400 animate-spin mx-auto" />
                  <span className="text-sm font-mono font-bold text-purple-300 block">Rerolling Trait...</span>
                </div>
              ) : rolledTrait ? (
                <div className="space-y-3 animate-fadeIn">
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                    Rarity: {rolledTrait.chancePercent}% Drop Chance
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                    {rolledTrait.name}
                  </h2>
                  <p className="text-xs font-mono text-gray-300 max-w-md">{rolledTrait.description}</p>
                  <div className="flex justify-center space-x-3 text-xs font-mono text-emerald-400 font-bold pt-2">
                    <span>Damage +{((rolledTrait.damageMultiplier - 1) * 100).toFixed(0)}%</span>
                    <span>Range +{((rolledTrait.rangeMultiplier - 1) * 100).toFixed(0)}%</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-gray-500 font-mono">
                  <Sparkles className="w-10 h-10 mx-auto text-purple-500/40" />
                  <p className="text-xs">Click 'Reroll 1x' or 'Reroll 10x' below to test your luck!</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={handleRollOnce}
                disabled={isRolling}
                className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-black text-sm shadow-xl shadow-purple-900/40 flex items-center space-x-2 transition-all font-mono hover:scale-105"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reroll Trait 1x</span>
              </button>
              <button
                onClick={handleRoll10x}
                disabled={isRolling}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-black font-black text-sm shadow-xl shadow-amber-900/40 flex items-center space-x-2 transition-all font-mono hover:scale-105"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>Reroll 10x Fast</span>
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-gray-400 text-xs font-bold font-mono"
              >
                Reset Stats
              </button>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Roll Statistics & Inventory */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-4 font-mono">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Roll Statistics</h3>
              <span className="text-xs text-purple-400 font-bold">Total Rolls: {totalRolls}</span>
            </div>

            <div className="space-y-2 text-xs">
              {TRAITS.map((t) => (
                <div key={t.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${t.id === 'godly' ? 'bg-amber-400' : 'bg-purple-400'}`} />
                    <span className="text-white font-bold">{t.name}</span>
                  </div>
                  <span className="font-extrabold text-purple-300 text-sm">
                    {counts[t.id] || 0} <span className="text-[10px] text-gray-500 font-normal">obtained</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
