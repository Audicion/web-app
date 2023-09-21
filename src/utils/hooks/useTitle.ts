import { useEffect } from 'react';

export function useTitle(title: string) {
  useEffect(() => {
    document.title = `Audición – ${title}`;
  }, [title]);
}
