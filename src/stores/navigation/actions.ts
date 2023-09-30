import { $step, $view } from './atoms';
import { type AppView } from './types';

export function setView(value: AppView) {
  $view.set(value);
}

export function setStep(value: number) {
  $step.set(value);
}
