import { useEffect, useState } from 'react';

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  const isScroll = scrollY > 0;
  return { isScroll };
};

export default useScrollY;
