import { useEffect } from 'react';

export const useActiveScroll = (ref, topOffset = 68) => {
  useEffect(() => {
    const el = ref.current;
    const listener = () => {
      if (window.scrollY > topOffset) {
        el.classList.add('is-scrolling');
      } else {
        el.classList.remove('is-scrolling');
      }
    };
    document.addEventListener('scroll', listener);
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);
};
