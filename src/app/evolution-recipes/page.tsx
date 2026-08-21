'use client';

import React from 'react';
import { Hammer, Sparkles, Gem, ArrowRight, ShieldCheck } from 'lucide-react';
import { EVOLUTION_RECIPES } from '@/data/wikiData';

export default function EvolutionRecipesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-300 text-xs font-mono font-bold mb-3">
          <Hammer className="w-3.5 h-3.5 text-blue-400" />
          <span>UNIT EVOLUTION & CRAFTING RECIPES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Unit Evolution & Material Crafting Database
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Complete crafting recipe requirements, Gem fees, Rainbow Crystal counts, and stat boost summaries to evolve units into Monarch forms.
        </p>
      </div>

      {/* Evolution Recipes List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EVOLUTION_RECIPES.map((recipe, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-[#080d19] border border-purple-900/40 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4 font-mono">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-gray-400">Base Unit: {recipe.unitName}</span>
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                  <Gem className="w-3.5 h-3.5" />
                  <span>{recipe.gemCost.toLocaleString()} Gems</span>
                </span>
              </div>

              <div>
                <h2 className="text-xl font-black text-white">{recipe.evolvedName}</h2>
                <p className="text-xs text-purple-300 mt-1 font-semibold">✨ {recipe.statBoostSummary}</p>
              </div>

              {/* Material Checklist */}
              <div className="space-y-2 pt-3 border-t border-slate-800">
                <span className="text-[10px] uppercase font-bold text-gray-500 block">Required Crafting Materials:</span>
                {recipe.requiredMaterials.map((mat, mIdx) => (
                  <div key={mIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-gray-300 flex items-center gap-2">
                      <span>{mat.icon}</span>
                      <span>{mat.name}</span>
                    </span>
                    <span className="font-extrabold text-purple-400">x{mat.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
