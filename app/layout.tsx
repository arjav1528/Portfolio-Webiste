import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sour+Gummy&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}