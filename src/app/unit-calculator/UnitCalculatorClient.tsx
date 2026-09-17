'use client';

import React, { useState } from 'react';
import { Calculator, Shield, Zap, Sparkles, Sliders, ArrowUpRight, Flame, RefreshCw } from 'lucide-react';
import { UNITS, TRAITS, UnitData, TraitData } from '@/data/wikiData';

export default function UnitCalculatorClient() {
  const [selectedUnitId, setSelectedUnitId] = useState<string>(UNITS[0].id);
  const [unitLevel, setUnitLevel] = useState<number>(100);
  const [selectedTraitId, setSelectedTraitId] = useState<string>('godly');
  const [isEvolved, setIsEvolved] = useState<boolean>(true);

  const unit = UNITS.find((u) => u.id === selectedUnitId) || UNITS[0];
  const trait = TRAITS.find((t) => t.id === selectedTraitId) || TRAITS[0];

  // CALCULATIONS
  // Level scaling: Each level adds ~1.5% base damage boost up to level 100 (+150% at lvl 100)
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
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/50 text-purple-300 text-xs font-mono font-bold mb-3">
          <Calculator className="w-3.5 h-3.5 text-purple-400" />
          <span>ROBLOX ANIME VANGUARDS INTERACTIVE TOOL</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Unit DPS & Evolution Stat Calculator
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Calculate level 1-100 damage scaling, trait multipliers (Godly, Monarch, Deadeye), attack speed (SPA), and evolution boosts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 5 Cols: Selectors & Sliders */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 font-mono border-b border-slate-800 pb-3">
            <Sliders className="w-5 h-5 text-purple-400" />
            <span>Unit Configurations</span>
          </h2>

          {/* Select Unit */}
          <div className="space-y-2 font-mono">
            <label className="text-xs font-bold text-gray-300">Select Unit</label>
            <select
              value={selectedUnitId}
              onChange={(e) => setSelectedUnitId(e.target.value)}
              className="w-full bg-slate-950 border border-purple-900/50 rounded-2xl px-4 py-3 text-sm text-white font-bold focus:outline-none focus:border-purple-500"
            >
              {UNITS.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name} ({u.rarity})
                </option>
              ))}
            </select>
          </div>

          {/* Unit Level Slider */}
          <div className="space-y-2 font-mono">
            <div className="flex justify-between text-xs text-gray-300 font-bold">
              <span>Unit Level</span>
              <span className="text-purple-400 text-sm">Level {unitLevel}</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={unitLevel}
              onChange={(e) => setUnitLevel(Number(e.target.value))}
              className="w-full accent-purple-500 bg-slate-900 h-2.5 rounded-lg cursor-pointer"
            />
          </div>

          {/* Select Trait */}
          <div className="space-y-2 font-mono">
            <label className="text-xs font-bold text-gray-300">Equipped Trait</label>
            <select
              value={selectedTraitId}
              onChange={(e) => setSelectedTraitId(e.target.value)}
              className="w-full bg-slate-950 border border-purple-900/50 rounded-2xl px-4 py-3 text-sm text-white font-bold focus:outline-none focus:border-purple-500"
            >
              <option value="none">None (No Trait)</option>
              {TRAITS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} (Damage +{((t.damageMultiplier - 1) * 100).toFixed(0)}%, SPA -{t.spaReductionPercent}%)
                </option>
              ))}
            </select>
          </div>

          {/* Evolution Toggle */}
          {unit.isEvolvedAvailable && (
            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex items-center justify-between font-mono">
              <div>
                <span className="text-xs font-bold text-white block">Evolution Form</span>
                <span className="text-[10px] text-purple-300">{unit.evolvedFormName}</span>
              </div>
              <button
                onClick={() => setIsEvolved(!isEvolved)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isEvolved ? 'bg-purple-600 text-white shadow-lg' : 'bg-slate-900 text-gray-400'
                }`}
              >
                {isEvolved ? 'EVOLVED' : 'BASE FORM'}
              </button>
            </div>
          )}
        </div>

        {/* Right 7 Cols: Calculated Results Dashboard */}
        <div className="lg:col-span-7 space-y-6">
          {/* Highlight DPS Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0b1224] to-[#050812] border border-purple-900/50 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-purple-900/30 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block">CALCULATED OUTPUT</span>
                <h3 className="text-2xl font-black text-white font-mono">{unit.name}</h3>
                {isEvolved && unit.isEvolvedAvailable && (
                  <span className="text-xs font-mono text-pink-400 font-bold">✨ {unit.evolvedFormName}</span>
                )}
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800 font-mono text-xs font-bold">
                {unit.rarity} Rarity
              </span>
            </div>

            {/* Calculated DPS Display */}
            <div className="p-6 rounded-2xl bg-purple-950/50 border border-purple-800/60 text-center space-y-1">
              <span className="text-xs font-mono font-bold text-gray-400 uppercase">Total Unit DPS</span>
              <div className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 font-mono">
                {calculatedDps.toLocaleString()}
              </div>
              <span className="text-[11px] font-mono text-gray-400">Damage Per Second @ Level {unitLevel}</span>
            </div>

            {/* Detailed Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-gray-500 block text-[10px]">Modified Damage</span>
                <span className="font-extrabold text-white text-base">{finalDamage.toLocaleString()} HP</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-gray-500 block text-[10px]">Attack Speed (SPA)</span>
                <span className="font-extrabold text-yellow-400 text-base">{finalSpaSec}s</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-gray-500 block text-[10px]">Attack Range</span>
                <span className="font-extrabold text-cyan-400 text-base">{finalRange} meters</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-gray-500 block text-[10px]">Placement Cost</span>
                <span className="font-bold text-emerald-400 text-sm">${unit.placementCost.toLocaleString()}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-gray-500 block text-[10px]">Total Upgrade Cost</span>
                <span className="font-bold text-emerald-400 text-sm">${unit.totalUpgradeCost.toLocaleString()}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-gray-500 block text-[10px]">Max Upgrades</span>
                <span className="font-bold text-gray-300 text-sm">{unit.maxUpgrades} Tiers</span>
              </div>
            </div>

            {/* Trait & Evolution Note */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-gray-300 leading-relaxed">
              <strong>💡 Meta Strategy Note:</strong> {unit.metaNotes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
