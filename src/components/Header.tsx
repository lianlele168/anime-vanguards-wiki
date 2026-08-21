'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Calculator, Sparkles, Trophy, Key, Hammer, BookOpen, Menu, X, Flame } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'DPS Calculator', href: '/unit-calculator', icon: Calculator, badge: 'HOT' },
    { name: 'Trait Simulator', href: '/trait-simulator', icon: Sparkles, badge: 'REROLL' },
    { name: 'Unit Tier List', href: '/tier-list', icon: Trophy },
    { name: 'Active Codes', href: '/codes', icon: Key },
    { name: 'Evolution Recipes', href: '/evolution-recipes', icon: Hammer },
    { name: 'Stage Guides', href: '/guides', icon: BookOpen }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#070b14]/90 backdrop-blur-md border-b border-indigo-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-purple-900/40 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div>
            <span className="font-black text-lg tracking-wider text-white flex items-center gap-1.5 font-mono">
              ANIME VANGUARDS <span className="text-xs px-2 py-0.5 bg-purple-950 text-purple-300 rounded-md border border-purple-800/50">WIKI</span>
            </span>
            <p className="text-[10px] text-gray-400">Roblox Tower Defense Database</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 text-xs font-semibold">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-purple-950/40 transition-all flex items-center space-x-1.5 border border-transparent hover:border-purple-900/30 relative"
              >
                <Icon className="w-3.5 h-3.5 text-purple-400" />
                <span>{link.name}</span>
                {link.badge && (
                  <span className="ml-1 text-[9px] px-1.5 py-0.2 bg-purple-600 text-white rounded font-mono font-bold animate-pulse">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center">
          <Link
            href="/unit-calculator"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-900/30 flex items-center space-x-1.5 transition-all hover:scale-105"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>DPS Calculator</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-purple-900/40 text-gray-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b14] border-b border-purple-900/40 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-semibold text-gray-200 hover:text-white hover:border-purple-600/50"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="text-[10px] px-2 py-0.5 bg-purple-600 text-white rounded font-mono font-bold">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
