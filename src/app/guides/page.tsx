'use client';

import React from 'react';
import { BookOpen, Shield, Zap, Compass, Check } from 'lucide-react';
import { GUIDES } from '@/data/wikiData';

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 text-xs font-mono font-bold mb-3">
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span>PRO TOWER DEFENSE STRATEGY GUIDES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Stage, Raid & Infinite Mode Strategy Guides
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Master Takaroda cash farm placement, Paragon Stage 1-10 elemental counter builds, and Infinite Mode wave 50+ survival strategies.
        </p>
      </div>

      {/* Written Guides Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GUIDES.map((g, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800 font-bold">
                  {g.category}
                </span>
                <span className="text-gray-500">{g.readTime}</span>
              </div>

              <h2 className="text-2xl font-black text-white font-mono">{g.title}</h2>
              <p className="text-xs text-gray-300 leading-relaxed font-mono">{g.summary}</p>

              <div className="space-y-3 pt-4 border-t border-slate-800 font-mono text-xs">
                {g.steps.map((step, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-lg bg-purple-950 text-purple-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
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
    </div>
  );
}
