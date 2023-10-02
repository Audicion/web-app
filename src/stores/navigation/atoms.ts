import { atom } from 'nanostores';

import { DEFAULT_STEP } from './constants';
import { type AppView } from './types';

export const $view = atom<AppView>('start');
export const $step = atom<number>(DEFAULT_STEP);
