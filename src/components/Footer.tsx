import React from 'react';
import Link from 'next/link';
import { Shield, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#04070e] border-t border-purple-900/30 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 w-full mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-base font-mono">ANIME VANGUARDS WIKI</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-md">
            The premier community database and interactive calculator tool suite for Roblox Anime Vanguards. Calculate unit DPS curves, simulate trait rerolls, check 2026 meta rankings, and view crafting recipes.
          </p>
          <div className="inline-flex items-center space-x-2 text-[11px] text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Verified Working Codes & Unit Evolution Stats</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 font-mono">Interactive Tools</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/unit-calculator" className="hover:text-white transition-colors">Unit DPS & Evolution Calculator</Link></li>
            <li><Link href="/trait-simulator" className="hover:text-white transition-colors">Trait Reroll Simulator</Link></li>
            <li><Link href="/tier-list" className="hover:text-white transition-colors">2026 Meta Unit Tier List</Link></li>
            <li><Link href="/codes" className="hover:text-white transition-colors">Active Redeem Codes</Link></li>
          </ul>
        </div>

        {/* Strategy Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 font-mono">Crafting & Guides</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/evolution-recipes" className="hover:text-white transition-colors">Evolution Recipes & Material Craft</Link></li>
            <li><Link href="/guides" className="hover:text-white transition-colors">Paragon Stage 1-10 Raid Guide</Link></li>
            <li><Link href="/guides" className="hover:text-white transition-colors">Infinite Mode Team Placement</Link></li>
            <li><Link href="/guides" className="hover:text-white transition-colors">Takaroda Farm Placement Strategy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Anime Vanguards Wiki. Community guide for Roblox Anime Tower Defense players.</p>
        <p className="mt-2 sm:mt-0 flex items-center gap-1">
          <span>Crafted with</span> <Heart className="w-3 h-3 text-purple-500 fill-purple-500" /> <span>for Anime Gamers</span>
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-4 text-center text-[11px] text-gray-500">
        Content AI-assisted, human-reviewed · Data sources cited on page · Contact: lianlele168@gmail
      </div>
    </footer>
  );
}
