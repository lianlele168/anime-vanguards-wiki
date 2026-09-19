export interface CodeItem {
  code: string;
  rewards: string;
  status: 'active' | 'expired';
  addedDate: string;
}

export interface UnitData {
  id: string;
  name: string;
  rarity: 'Secret' | 'Mythic' | 'Legendary' | 'Epic';
  element: string;
  baseDamage: number;
  spaSec: number; // Seconds per attack
  rangeMeters: number;
  maxLevelDps: number;
  placementCost: number;
  maxUpgrades: number;
  totalUpgradeCost: number;
  evolvedFormName: string;
  isEvolvedAvailable: boolean;
  evolutionDpsBoostPercent: number;
  description: string;
  metaNotes: string;
}

export interface TraitData {
  id: string;
  name: string;
  chancePercent: number; // e.g. 0.1 for 0.1%
  damageMultiplier: number; // 1.0 base
  spaReductionPercent: number; // e.g. 15 for 15% faster
  rangeMultiplier: number; // 1.0 base
  critRateBonus: number; // e.g. 25 for +25%
  description: string;
}

export interface TierItem {
  name: string;
  rarity: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  role: string;
  reason: string;
  statsSummary: string;
}

export interface EvolutionRecipe {
  unitId: string;
  unitName: string;
  evolvedName: string;
  gemCost: number;
  requiredMaterials: { name: string; count: number; icon: string }[];
  statBoostSummary: string;
}

export const GAME_INFO = {
  title: "Roblox Anime Vanguards Wiki & Database",
  subtitle: "Interactive Unit DPS & Evolution Calculator, Trait Reroll Simulator & 2026 Codes",
  description: "The premier community database for Roblox Anime Vanguards. Calculate unit DPS and evolution stats, simulate trait rerolls, check 2026 unit tier lists, and redeem active codes.",
  url: "https://animevanguards.robloxwikihub.com",
  stats: [
    { label: "Developer", value: "Kit-Games / AV Team" },
    { label: "Platform", value: "Roblox (PC, Mobile, Console)" },
    { label: "Genre", value: "Anime Tower Defense" },
    { label: "Max Unit Level", value: "Level 100" },
    { label: "Top Rarity", value: "Secret / Monarch" },
    { label: "Active Players", value: "200,000+ Concurrent" }
  ]
};

export const ACTIVE_CODES: CodeItem[] = [
  {
    code: "Assault",
    rewards: "100 Trait Rerolls (requires Level 10)",
    status: "active",
    addedDate: ""
  },
  {
    code: "SummerLeaving",
    rewards: "100 Memoria Shards (requires Level 10; one outlet reports it no longer pays out — test in game)",
    status: "active",
    addedDate: ""
  },
  {
    code: "AnniNextHopefully",
    rewards: "100 Trait Rerolls + 100 Memoria Shards + 5,000 Gems (requires Level 30; single-source — test in game)",
    status: "active",
    addedDate: ""
  }
];

export const EXPIRED_CODES: CodeItem[] = [
  { code: "1DayL8", rewards: "Expired — reward not documented by the publisher", status: "expired", addedDate: "" },
  { code: "HeavyEyes", rewards: "Expired — reward not documented by the publisher", status: "expired", addedDate: "" },
  { code: "ExecutionPart2", rewards: "Expired — reward not documented by the publisher", status: "expired", addedDate: "" },
  { code: "WhoopsieDaisy", rewards: "Expired — reward not documented by the publisher", status: "expired", addedDate: "" },
  { code: "LateBP", rewards: "Expired — reward not documented by the publisher", status: "expired", addedDate: "" },
  { code: "PowerOfLove", rewards: "Expired — reward not documented by the publisher", status: "expired", addedDate: "" },
  { code: "EEPart1", rewards: "Expired — reward not documented by the publisher", status: "expired", addedDate: "" },
  { code: "BPSoon", rewards: "Expired — reward not documented by the publisher", status: "expired", addedDate: "" },
  { code: "LagGone", rewards: "Expired — reward not documented by the publisher", status: "expired", addedDate: "" },
  { code: "13.5", rewards: "Expired — reward not documented by the publisher", status: "expired", addedDate: "" }
];

export const TRAITS: TraitData[] = [
  {
    id: "godly",
    name: "Godly",
    chancePercent: 0.1,
    damageMultiplier: 2.0, // +100%
    spaReductionPercent: 15, // 15% faster
    rangeMultiplier: 1.2, // +20%
    critRateBonus: 25,
    description: "The absolute best trait in Anime Vanguards. Doubles base damage, boosts attack speed and range."
  },
  {
    id: "monarch",
    name: "Monarch",
    chancePercent: 0.05,
    damageMultiplier: 1.75, // +75%
    spaReductionPercent: 10,
    rangeMultiplier: 1.3, // +30%
    critRateBonus: 15,
    description: "Extreme damage and massive range boost. S+ tier trait for long-range Monarch/Secret units."
  },
  {
    id: "deadeye",
    name: "Deadeye",
    chancePercent: 0.5,
    damageMultiplier: 1.3, // +30%
    spaReductionPercent: 0,
    rangeMultiplier: 1.5, // +50%
    critRateBonus: 20,
    description: "Massive +50% range enhancement, allowing units to hit enemies across half the map."
  },
  {
    id: "solar",
    name: "Solar",
    chancePercent: 1.0,
    damageMultiplier: 1.4, // +40%
    spaReductionPercent: 5,
    rangeMultiplier: 1.1,
    critRateBonus: 10,
    description: "Great damage boost with passive burn damage enhancement."
  },
  {
    id: "swift",
    name: "Swift",
    chancePercent: 2.5,
    damageMultiplier: 1.15, // +15%
    spaReductionPercent: 20, // 20% faster
    rangeMultiplier: 1.0,
    critRateBonus: 5,
    description: "20% faster attack speed, significantly increasing full-wave DPS."
  },
  {
    id: "nimble",
    name: "Nimble",
    chancePercent: 5.0,
    damageMultiplier: 1.05,
    spaReductionPercent: 10,
    rangeMultiplier: 1.0,
    critRateBonus: 0,
    description: "Common starter trait providing mild 10% attack speed reduction."
  }
];

export const UNITS: UnitData[] = [
  {
    id: "song-jinwu",
    name: "Song Jinwu (Monarch of Shadows)",
    rarity: "Secret",
    element: "Shadow",
    baseDamage: 12500,
    spaSec: 4.2,
    rangeMeters: 35,
    maxLevelDps: 18500,
    placementCost: 1500,
    maxUpgrades: 12,
    totalUpgradeCost: 45000,
    evolvedFormName: "Monarch Jinwu (Shadow Army)",
    isEvolvedAvailable: true,
    evolutionDpsBoostPercent: 45,
    description: "Summons invincible Shadow Soldiers that attack enemies along the track while casting heavy AoE shadow slashes.",
    metaNotes: "Undisputed #1 Secret unit for Infinite Mode and Boss Raids."
  },
  {
    id: "igros",
    name: "Igros (Red Knight)",
    rarity: "Secret",
    element: "Blood",
    baseDamage: 9800,
    spaSec: 3.5,
    rangeMeters: 28,
    maxLevelDps: 14200,
    placementCost: 1200,
    maxUpgrades: 10,
    totalUpgradeCost: 36000,
    evolvedFormName: "Igros Unleashed",
    isEvolvedAvailable: true,
    evolutionDpsBoostPercent: 40,
    description: "Blistering single-target and cone cleave DPS with stacking Bleed status.",
    metaNotes: "Pairs insanely well with Song Jinwu shadow commander aura. Note: the official spelling is Igros (not Igris)."
  },
  {
    id: "alucard",
    name: "Alucard (Vampire King)",
    rarity: "Secret",
    element: "Dark",
    baseDamage: 11200,
    spaSec: 5.0,
    rangeMeters: 40,
    maxLevelDps: 16000,
    placementCost: 1400,
    maxUpgrades: 11,
    totalUpgradeCost: 42000,
    evolvedFormName: "No Life King Alucard",
    isEvolvedAvailable: true,
    evolutionDpsBoostPercent: 50,
    description: "Global range passive when evolved. Life-steal bullets melt armored Paragon bosses.",
    metaNotes: "Must-have unit for Paragon Stage 8-10 clears."
  },
  {
    id: "sukuna",
    name: "Sukuna (King of Curses)",
    rarity: "Mythic",
    element: "Fire",
    baseDamage: 8400,
    spaSec: 4.8,
    rangeMeters: 32,
    maxLevelDps: 11800,
    placementCost: 1000,
    maxUpgrades: 9,
    totalUpgradeCost: 28000,
    evolvedFormName: "Malevolent Shrine Sukuna",
    isEvolvedAvailable: true,
    evolutionDpsBoostPercent: 35,
    description: "Domain Expansion domain mechanic deals full-map continuous slash damage.",
    metaNotes: "Best crowd control and wave clear Mythic unit."
  },
  {
    id: "gojo",
    name: "Gojo (Honored One)",
    rarity: "Mythic",
    element: "Cosmic",
    baseDamage: 7900,
    spaSec: 6.0,
    rangeMeters: 45,
    maxLevelDps: 10500,
    placementCost: 1100,
    maxUpgrades: 9,
    totalUpgradeCost: 30000,
    evolvedFormName: "Limitless Infinity Gojo",
    isEvolvedAvailable: true,
    evolutionDpsBoostPercent: 30,
    description: "Stuns enemies for 3.5 seconds with Unlimited Void while dealing cosmic damage.",
    metaNotes: "Essential crowd control buffer for infinite wave 50+."
  },
  {
    id: "takaroda",
    name: "Takaroda (Speedwagon Farm)",
    rarity: "Epic",
    element: "Support",
    baseDamage: 0,
    spaSec: 10.0,
    rangeMeters: 10,
    maxLevelDps: 0,
    placementCost: 400,
    maxUpgrades: 6,
    totalUpgradeCost: 8500,
    evolvedFormName: "Speedwagon Foundation",
    isEvolvedAvailable: false,
    evolutionDpsBoostPercent: 0,
    description: "Generates massive Yen/Gold cash income at the end of every wave.",
    metaNotes: "Always place 3 Takaroda units in early waves before placing main damage dealers."
  }
];

export const TIER_LIST: TierItem[] = [
  {
    name: "Song Jinwu (Monarch)",
    rarity: "Secret",
    tier: "S+",
    role: "Main DPS / Shadow Summoner",
    reason: "Shadow Soldiers block enemy advance; supreme 18,500+ DPS when evolved with Godly trait.",
    statsSummary: "DPS: 18,500+ | SPA: 4.2s | Range: 35m"
  },
  {
    name: "Alucard (No Life King)",
    rarity: "Secret",
    tier: "S+",
    role: "Global Range Boss Eraser",
    reason: "Life-steal damage and full-map sniper range make him unmatched in Paragon Raids.",
    statsSummary: "DPS: 16,000+ | SPA: 5.0s | Range: 40m"
  },
  {
    name: "Igros (Red Knight)",
    rarity: "Secret",
    tier: "S+",
    role: "Bleed Cleave / Commander",
    reason: "3.5s rapid attack speed and stacking Bleed damage disintegrates elite wave rushes.",
    statsSummary: "DPS: 14,200+ | SPA: 3.5s | Range: 28m"
  },
  {
    name: "Sukuna (Malevolent Shrine)",
    rarity: "Mythic",
    tier: "S",
    role: "Domain Expansion Wave Clear",
    reason: "Full screen domain cut slashes instantly clear standard mobs in Infinite Mode.",
    statsSummary: "DPS: 11,800+ | SPA: 4.8s | Range: 32m"
  },
  {
    name: "Gojo (Limitless)",
    rarity: "Mythic",
    tier: "S",
    role: "Stun Support / Time Stop",
    reason: "Stuns bosses for 3.5 seconds; allows DPS units to trigger full skill rotations.",
    statsSummary: "DPS: 10,500+ | Stun: 3.5s | Range: 45m"
  },
  {
    name: "Takaroda (Speedwagon Farm)",
    rarity: "Epic",
    tier: "A",
    role: "Economy Cash Farm",
    reason: "Mandatory for every single team comp. Yields up to $1,500 per wave.",
    statsSummary: "Farm: $1,500/wave | Cost: $400"
  }
];

export const EVOLUTION_RECIPES: EvolutionRecipe[] = [
  {
    unitId: "song-jinwu",
    unitName: "Song Jinwu",
    evolvedName: "Monarch Jinwu (Shadow Army)",
    gemCost: 10000,
    requiredMaterials: [
      { name: "Shadow Essence", count: 10, icon: "🔮" },
      { name: "Rainbow Crystal", count: 5, icon: "💎" },
      { name: "Monarch Crown Drop", count: 1, icon: "👑" }
    ],
    statBoostSummary: "+45% Base Damage, Shadow Soldier summon limit increased from 2 to 4."
  },
  {
    unitId: "alucard",
    unitName: "Alucard",
    evolvedName: "No Life King Alucard",
    gemCost: 8500,
    requiredMaterials: [
      { name: "Vampiric Relic", count: 8, icon: "🩸" },
      { name: "Rainbow Crystal", count: 4, icon: "💎" },
      { name: "Dark Essence", count: 12, icon: "🖤" }
    ],
    statBoostSummary: "+50% Base Damage, gains Global Attack Range skill."
  },
  {
    unitId: "sukuna",
    unitName: "Sukuna",
    evolvedName: "Malevolent Shrine Sukuna",
    gemCost: 5000,
    requiredMaterials: [
      { name: "Cursed Finger", count: 8, icon: "👈" },
      { name: "Rainbow Crystal", count: 3, icon: "💎" },
      { name: "Fire Essence", count: 10, icon: "🔥" }
    ],
    statBoostSummary: "+35% Base Damage, unlocks Malevolent Shrine Domain Expansion."
  }
];

export const GUIDES = [
  {
    title: "Infinite Mode Meta Team Placement Strategy",
    category: "Team Strategy",
    readTime: "5 min read",
    summary: "How to place Takaroda cash farms in waves 1-4, transition to Gojo stun control, and drop Monarch units for wave 50+ survival.",
    steps: [
      "Wave 1-4: Place 3 Takaroda units near track entry and upgrade to Tier 3 before spawning damage units.",
      "Wave 5-15: Place Gojo or Sukuna at the first U-turn track corner to stall initial mob rushes.",
      "Wave 20+: Max upgrade Song Jinwu & Alucard; activate Domain skills during boss spawns."
    ]
  },
  {
    title: "Paragon Raid Stage 1-10 Walkthrough",
    category: "Raid Strategy",
    readTime: "4 min read",
    summary: "Clear Paragon Boss Raids effortlessly by countering specific element shields and boss armor multipliers.",
    steps: [
      "Check boss elemental weakness (e.g. Fire beats Shadow, Dark beats Light).",
      "Equip Deadeye or Godly traits on your main Secret damage dealer.",
      "Time Gojo's Unlimited Void stun when the boss reaches 50% HP rage mode."
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: "How do I redeem codes in Anime Vanguards?",
    answer: "Launch Anime Vanguards on Roblox, click the 'Codes' Twitter button on the left sidebar menu, enter any active code from our list, and click Redeem."
  },
  {
    question: "What is the best trait in Anime Vanguards?",
    answer: "Godly (0.1% chance) is the best overall trait (+100% Damage, -15% SPA, +20% Range), followed closely by Monarch (+75% Damage, +30% Range)."
  },
  {
    question: "How do I evolve units in Anime Vanguards?",
    answer: "Head to the Crafting / Evolution NPC in the main lobby, select your unit, gather required materials (Essences & Rainbow Crystals), pay the Gem fee, and click Evolve."
  }
];
