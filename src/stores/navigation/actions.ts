import { $step, $view } from './atoms';
import { type AppView } from './types';

export function setView(value: AppView) {
  $view.set(value);
}

export function setStep(value: number) {
  $step.set(value);
}

export function nextStep() {
  setStep($step.get() + 1);
}

export function previousStep() {
  const target = Math.max(0, $step.get() - 1);
  setStep(target);
}
