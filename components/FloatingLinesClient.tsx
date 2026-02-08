'use client';

import dynamic from 'next/dynamic';

const FloatingLines = dynamic(() => import('@/components/FloatingLines'), {
  ssr: false,
  loading: () => (
    <div
      className="fixed inset-0 -z-10 bg-background"
      style={{ width: '100%', height: '100vh' }}
      aria-hidden
    />
  ),
});

export default function FloatingLinesClient() {
  return (
    <FloatingLines
      enabledWaves={['top', 'middle', 'bottom']}
      lineCount={5}
      lineDistance={5}
      bendRadius={5}
      bendStrength={-0.5}
      interactive={true}
      parallax={true}
      linesGradient={['#2f4ba2', '#6366f1', '#8b5cf6', '#a855f7', '#e947f5']}
    />
  );
}
