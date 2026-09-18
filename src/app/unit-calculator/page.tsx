import React from 'react';
import type { Metadata } from 'next';
import UnitCalculatorClient from './UnitCalculatorClient';

export const metadata: Metadata = {
  title: 'Roblox Anime Vanguards Unit Calculator ',
  description: 'Calculate Anime Vanguards unit statistics, evolution bonuses, and trait DPS.',
  alternates: {
    canonical: '/calculator',
  },
};

export default function UnitCalculatorPage() {
  return <UnitCalculatorClient />;
}
