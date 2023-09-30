import { createContext, useContext } from 'react';

export const TitleContext = createContext<string | undefined>(undefined);

export function useTitleContext() {
  return useContext(TitleContext);
}
