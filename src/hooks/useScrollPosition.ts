import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled less than a threshold (e.g., 10px)
      const isTop = window.scrollY < 10;
      setIsAtTop(isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isAtTop;
};