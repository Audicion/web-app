import { $step, $view } from './atoms';
import { DEFAULT_STEP, STEP_COUNT } from './constants';
import { type AppView } from './types';

export function setView(value: AppView) {
  $view.set(value);
}

export function setStep(value: number) {
  $step.set(value);
}

export function nextStep() {
  const target = Math.min(STEP_COUNT, $step.get() + 1);
  setStep(target);
}

export function previousStep() {
  const target = Math.max(DEFAULT_STEP, $step.get() - 1);
  setStep(target);
}
