export type TimingFnHandler = () => void;
export type TimingFn = (
  handler: TimingFnHandler,
  ms?: number,
  ...args: any[]
) => number;
export type TimingClearFn = (id: number) => void;
