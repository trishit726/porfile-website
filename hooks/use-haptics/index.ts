'use client';

import { useCallback } from 'react';

type HapticPattern = 'heavy' | 'medium' | 'light' | 'soft-pattern' | 'snap';

export function useHaptics() {
  const triggerHaptic = useCallback((pattern: HapticPattern) => {
    if (typeof navigator === 'undefined' || !navigator.vibrate) return;

    try {
      switch (pattern) {
        case 'heavy':
          navigator.vibrate(50);
          break;
        case 'medium':
          navigator.vibrate(30);
          break;
        case 'light':
          navigator.vibrate(10);
          break;
        case 'snap':
          navigator.vibrate(15);
          break;
        case 'soft-pattern':
          navigator.vibrate([10, 30, 10]);
          break;
        default:
          break;
      }
    } catch (e) {
      // Ignore haptic errors
    }
  }, []);

  return { triggerHaptic };
}
