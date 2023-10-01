export interface BeeperTiming {
  /**
   * The interval of the beeps output.
   * Must be greater than `duration` to avoid overlapping.
   */
  interval: number;
  /**
   * Duration of one beep.
   */
  duration: number;
}
