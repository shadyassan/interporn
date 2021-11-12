import { useState, useEffect } from 'react';

export const useWindowSize = (width = 991) => {
  const isClient =
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement;

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      isMobile: isClient ? (window.innerWidth < width ? true : false) : false,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
