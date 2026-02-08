import './globals.css';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

export const metadata: Metadata = {
  title: 'Arjav Patel',
  description: 'Portfolio of Arjav Patel, Senior Application Developer and Flutter Specialist with expertise in mobile development, React, and team leadership.',
  keywords: ['Flutter Developer', 'Mobile App Developer', 'React Developer', 'Senior Developer', 'BITS Pilani'],
  authors: [{ name: 'Arjav Patel' }],
  openGraph: {
    title: 'Arjav Patel - Senior Application Developer & Flutter Specialist',
    description: 'Portfolio of Arjav Patel, Senior Application Developer and Flutter Specialist',
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
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="font-pixelify antialiased cursor-none">
        <SmoothCursor />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}