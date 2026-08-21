import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Roblox Anime Vanguards Wiki 2026 | Unit DPS Calculator, Trait Reroll & Codes',
  description: 'The official community database for Roblox Anime Vanguards. Calculate unit DPS and evolution stats, simulate trait rerolls, view 2026 unit tier lists, and redeem active codes.',
  keywords: [
    'Anime Vanguards',
    'Anime Vanguards codes',
    'Anime Vanguards tier list',
    'Anime Vanguards unit calculator',
    'Anime Vanguards trait reroll simulator',
    'Anime Vanguards evolution recipes',
    'Song Jinwu Monarch',
    'Igris Secret Unit'
  ],
  authors: [{ name: 'Roblox Wiki Hub' }],
  metadataBase: new URL('https://animevanguards.robloxwikihub.com'),
  openGraph: {
    title: 'Roblox Anime Vanguards Wiki & Database 2026',
    description: 'Calculate unit DPS curves, simulate trait rerolls, check 2026 meta rankings, and view crafting recipes for Roblox Anime Vanguards.',
    url: 'https://animevanguards.robloxwikihub.com',
    siteName: 'Anime Vanguards Wiki',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roblox Anime Vanguards Wiki & Database',
    description: 'Roblox Anime Vanguards Unit DPS Calculator & Trait Reroll Simulator'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#070b14] text-slate-100 min-h-screen flex flex-col justify-between antialiased selection:bg-purple-600 selection:text-white`}>
        <StructuredData />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
