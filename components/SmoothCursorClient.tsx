'use client';

import dynamic from 'next/dynamic';

const SmoothCursor = dynamic(
  () => import('@/components/ui/smooth-cursor').then((m) => ({ default: m.SmoothCursor })),
  { ssr: false }
);

export default function SmoothCursorClient() {
  return <SmoothCursor />;
}
