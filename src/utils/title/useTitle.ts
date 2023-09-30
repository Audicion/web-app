import { useEffect } from 'react';

import { useTitleContext } from './context';

/**
 * Sets tab title
 */
export function useTitle(title?: string) {
  const defaultTitle = useTitleContext();

  useEffect(() => {
    if (!defaultTitle) {
      throw new Error(
        'Context is not found. useTitle can only be used inside TitleContext',
      );
    }
    let fullTitle = defaultTitle;
    if (title) {
      fullTitle += ` – ${title}`;
    }
    document.title = fullTitle;
  }, [title, defaultTitle]);
}
