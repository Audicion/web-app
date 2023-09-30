import { atom } from 'nanostores';

import { type AppView } from './types';

export const $view = atom<AppView>('start');
export const $step = atom<number>(0);
