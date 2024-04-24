import { useEffect } from 'react';

export const useScroll = (isEnabled: boolean) => {
  useEffect(() => {
    if (isEnabled) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isEnabled]);
};