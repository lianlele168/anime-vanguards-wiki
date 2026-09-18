'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Calculator, Sparkles, Trophy, Key, Hammer, BookOpen, Copy, Check, ArrowRight, Zap, Flame, Crown } from 'lucide-react';
import AuthorCard from '@/components/AuthorCard';
import { GAME_INFO, ACTIVE_CODES, UNITS, TIER_LIST, FAQ_ITEMS } from '@/data/wikiData';

export default function HomeClient() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const featureCards = [
    {
      title: "Interactive Unit DPS & Evolution Calculator",
      desc: "Calculate level 1-100 DPS, SPA attack speed reduction, trait multipliers (Godly/Monarch) and evolution boosts.",
      href: "/unit-calculator",
      icon: Calculator,
      color: "from-purple-600 to-pink-600",
      badge: "MUST USE"
    },
    {
      title: "Trait Reroll Luck Simulator",
      desc: "Simulate rolling SSS Godly (0.1%) & Monarch (0.05%) traits with Super Lucky Potions and roll counters.",
      href: "/trait-simulator",
      icon: Sparkles,
      color: "from-amber-500 to-yellow-600",
      badge: "SIMULATOR"
    },
    {
      title: "2026 Meta Unit Tier List",
      desc: "Complete rankings from S+ Secret Units (Song Jinwu, Alucard, Igris) to S Tier Mythics and Money Farms.",
      href: "/tier-list",
      icon: Trophy,
      color: "from-indigo-600 to-purple-600",
      badge: "S+ RANK"
    },
    {
      title: "Evolution & Crafting Recipes",
      desc: "Material lists (Rainbow Crystals, Boss Relics) and Gem requirements to evolve units into Monarch forms.",
      href: "/evolution-recipes",
      icon: Hammer,
      color: "from-blue-600 to-cyan-600",
      badge: "CRAFTING"
    },
    {
      title: "Paragon & Infinite Stage Guides",
      desc: "Wave 1-50 placement strategy, Takaroda money farm timing, and boss elemental counter tactics.",
      href: "/guides",
      icon: BookOpen,
      color: "from-emerald-600 to-teal-600",
      badge: "STRATEGY"
    },
    {
      title: "Verified Active Redeem Codes",
      desc: "100% working Roblox Anime Vanguards free Gems, Trait Rerolls, and Super Lucky Potions.",
      href: "/codes",
      icon: Key,
      color: "from-rose-600 to-red-600",
      badge: "FREE GEMS"
    }
  ];

  return (
    <div className="space-y-16 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* FAQPage JSON-LD Schema */}
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
            mainEntity: FAQ_ITEMS.map((faq) => ({
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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 text-center space-y-8">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[600px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full" />
        </div>

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/50 text-purple-300 text-xs font-mono font-bold shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>2026 OFFICIAL ANIME VANGUARDS DATABASE</span>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white leading-tight font-mono">
            MASTER ANIME VANGUARDS WITH <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              PRO DPS CALCULATOR & TRAIT SIMULATOR
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate real-time unit DPS curves, simulate SSS Godly trait rerolls, view 2026 Monarch tier lists, and claim active free Gem codes.
          </p>
        </div>

        {/* Hero Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/unit-calculator"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-sm shadow-xl shadow-purple-900/40 flex items-center space-x-2 transition-all hover:scale-105"
          >
            <Calculator className="w-5 h-5" />
            <span>Launch DPS & Evolution Calculator</span>
          </Link>
          <Link
            href="/trait-simulator"
            className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-purple-900/50 text-gray-200 font-bold text-sm flex items-center space-x-2 transition-all hover:scale-105"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span>Trait Reroll Simulator</span>
          </Link>
        </div>

        {/* Game Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 text-left font-mono">
          {GAME_INFO.stats.slice(0, 4).map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#090f1d] border border-purple-900/30">
              <span className="text-[10px] text-gray-500 block uppercase font-bold">{stat.label}</span>
              <span className="text-sm font-extrabold text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* AuthorCard Section */}
      <AuthorCard />

      {/* Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 font-mono">
        <div className="rounded-2xl overflow-hidden border border-red-900/40 bg-[#080d19] p-4 flex flex-col items-center">
          <Image
            src="/images/anime-vanguards-hero.webp"
            alt="Anime Vanguards Official Tower Defense Arena"
            width={640}
            height={360}
            className="rounded-xl object-cover w-full h-52 border border-red-950"
            priority
          />
          <p className="text-xs text-gray-400 mt-2 text-center">
            Figure 1: Official Anime Vanguards Arena — Tactical deployment lanes and wave spawns.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-red-900/40 bg-[#080d19] p-4 flex flex-col items-center">
          <Image
            src="/images/anime-vanguards-icon.webp"
            alt="Anime Vanguards Game Icon and Mythic Summon Banner"
            width={640}
            height={360}
            className="rounded-xl object-contain w-full h-52 bg-black/50 border border-red-950"
          />
          <p className="text-xs text-gray-400 mt-2 text-center">
            Figure 2: Official Anime Vanguards Emblem — Mythic banner icon & trait indicators.
          </p>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-purple-900/30 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2 font-mono">
              <Shield className="w-6 h-6 text-purple-500" />
              <span>Interactive Toolkit & Strategy Guides</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">Select a tool or database guide below to optimize your tower defense squad</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="group p-6 rounded-2xl bg-[#080d19] border border-purple-950 hover:border-purple-600/60 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-purple-950/50 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-[#080d19] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800/40">
                      {card.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors font-mono">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-center text-xs font-bold text-purple-400 group-hover:text-purple-300 font-mono">
                  <span>Open Tool</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Active Codes Spotlight */}
      <section className="p-8 rounded-3xl bg-gradient-to-br from-[#090f1d] to-[#040710] border border-purple-900/40 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-900/30 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-mono font-bold mb-2">
              <Zap className="w-3 h-3" />
              <span>TESTED & WORKING CODES</span>
            </div>
            <h2 className="text-2xl font-black text-white font-mono">Roblox Anime Vanguards Redeem Codes</h2>
          </div>
          <Link
            href="/codes"
            className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 font-mono"
          >
            <span>View All Codes ({ACTIVE_CODES.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between"
            >
              <div>
                <span className="font-mono text-base font-black text-yellow-400 block">{item.code}</span>
                <span className="text-xs text-gray-300 mt-1 block">{item.rewards}</span>
              </div>
              <button
                onClick={() => handleCopyCode(item.code)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors font-mono"
              >
                {copiedCode === item.code ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Top Secret Units Spotlight */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-purple-900/30 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2 font-mono">
              <Crown className="w-6 h-6 text-yellow-400" />
              <span>Top S+ Secret & Monarch Units</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">Highest DPS units in current Update 14 meta</p>
          </div>
          <Link href="/unit-calculator" className="text-xs font-bold text-purple-400 hover:text-purple-300 font-mono">
            Calculate Full DPS Specs →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {UNITS.slice(0, 3).map((u, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#080d19] border border-purple-900/30 space-y-4">
              <div className="flex justify-between items-center font-mono">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                  {u.element}
                </span>
                <span className="text-xs font-black text-yellow-400">{u.rarity}</span>
              </div>

              <div>
                <h3 className="font-extrabold text-lg text-white font-mono">{u.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{u.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div>
                  <span className="text-gray-500 block">Max Level DPS</span>
                  <span className="font-bold text-purple-400 text-sm">{u.maxLevelDps.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Attack Speed (SPA)</span>
                  <span className="font-bold text-yellow-400 text-sm">{u.spaSec}s</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-8 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-6">
        <h2 className="text-2xl font-bold text-white font-mono">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-purple-300">{faq.question}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
