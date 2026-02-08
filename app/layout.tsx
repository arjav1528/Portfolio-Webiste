import './globals.css';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { DM_Sans, Press_Start_2P } from 'next/font/google';
import SmoothCursorClient from '@/components/SmoothCursorClient';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Arjav Patel',
  description: 'Portfolio of Arjav Patel, SDE Intern @ TechStaX with expertise in mobile development, React, and team leadership.',
  keywords: ['Flutter Developer', 'Mobile App Developer', 'React Developer', 'Senior Developer', 'BITS Pilani'],
  authors: [{ name: 'Arjav Patel' }],
  openGraph: {
    title: 'Arjav Patel - Senior Application Developer & Flutter Specialist',
    description: 'Portfolio of Arjav Patel, SDE Intern @ TechStaX',
    type: 'website',
  },
  icons: {
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${dmSans.variable} ${pressStart2P.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased cursor-none">
        <SmoothCursorClient />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}