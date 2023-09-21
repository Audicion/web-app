import { useEffect, useRef } from 'react';

export function useTimeout(callback: () => void, ms: number) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const intervalId = window.setInterval(() => savedCallback.current(), ms);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [callback, ms]);
}
