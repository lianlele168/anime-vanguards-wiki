'use client';

import React, { useState } from 'react';
import { Key, Copy, Check, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';

export default function CodesClient() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 text-xs font-mono font-bold mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>CROSS-CHECKED REDEEM CODES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono">
          Roblox Anime Vanguards Codes 
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Claim free Gems, Trait Rerolls, Super Lucky Potions, and Stat Chips. Tested daily by our community team.
        </p>
      </div>

      {/* Active Codes Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
          <Zap className="w-5 h-5 text-emerald-400" />
          <span>Active Working Codes ({ACTIVE_CODES.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#080d19] border border-emerald-900/40 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono mb-2">
                  <span className="text-xl font-black text-yellow-400">{item.code}</span>
                  <span className="text-[10px] text-gray-500">{item.addedDate}</span>
                </div>
                <p className="text-sm font-semibold text-gray-200">{item.rewards}</p>
              </div>

              <button
                onClick={() => handleCopy(item.code)}
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors font-mono shadow-lg shadow-emerald-950/50"
              >
                {copiedCode === item.code ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Code Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code ({item.code})</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* How to Redeem Guide */}
      <div className="p-8 rounded-3xl bg-[#080d19] border border-purple-900/30 space-y-4">
        <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-purple-400" />
          <span>How to Redeem Codes in Roblox Anime Vanguards</span>
        </h3>
        <ol className="space-y-3 text-xs text-gray-300 font-mono list-decimal list-inside leading-relaxed">
          <li>Launch <strong>Anime Vanguards</strong> from your Roblox app.</li>
          <li>Look at the left side menu and click on the <strong>Codes / Twitter</strong> icon.</li>
          <li>Copy any active code from our list above and paste it into the input box.</li>
          <li>Click <strong>Redeem</strong> to instantly claim your free Gems and Trait Rerolls!</li>
        </ol>
      </div>

      {/* Expired Codes Section */}
      <div className="space-y-4 pt-6 border-t border-slate-900">
        <h3 className="text-sm font-bold text-gray-500 font-mono">Expired Codes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 opacity-60">
          {EXPIRED_CODES.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 flex justify-between text-xs font-mono">
              <span className="line-through text-gray-400">{item.code}</span>
              <span className="text-gray-500">{item.rewards}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
