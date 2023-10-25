import { useStore } from '@nanostores/react';
import { type StoreValue } from 'nanostores';

import { $step } from './atoms';

export function useStep(): StoreValue<typeof $step> {
  return useStore($step);
}
