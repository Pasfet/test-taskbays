import {useState, useEffect, useCallback} from 'react';


export const useCheckSize = (size: number): boolean => {
  const getIsMobile = useCallback(() => window.innerWidth <= size, [size]);
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

  useEffect(() => {
      const onResize = () => {
          setIsMobile(getIsMobile());
      }

      window.addEventListener("resize", onResize);
  
      return () => {
          window.removeEventListener("resize", onResize);
      }
  }, [getIsMobile]);
  return isMobile;
}