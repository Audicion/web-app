import { useEffect } from 'react';

const prefix = 'Audición';

/**
 * Sets tab title
 */
export function useTitle(title?: string) {
  useEffect(() => {
    let fullTitle = prefix;
    if (title) {
      fullTitle += ` – ${title}`;
    }
    document.title = fullTitle;
  }, [title]);
}
