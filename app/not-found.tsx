'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/');
  }, [router]);
}