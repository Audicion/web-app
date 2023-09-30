/* eslint-disable accessor-pairs */
import { BeepGenerator } from './generator';

export class Beeper {
  private readonly generator: BeepGenerator;
  private readonly context: AudioContext;
  private intervalId: number | null = null;
  public frequency = 440;

  constructor(
    public interval: number,
    public duration: number,
  ) {
    this.context = new AudioContext();
    this.generator = new BeepGenerator(this.context);
  }

  public get enabled() {
    return Boolean(this.intervalId);
  }

  public set volume(value: number) {
    this.generator.volume = value;
  }

  public set balance(value: number) {
    this.generator.balance = value;
  }

  public async close() {
    if (this.enabled) {
      this.stop();
    }
    await this.context.close();
  }

  public stop() {
    if (!this.intervalId) {
      throw Error('Beeper is not started');
    }
    window.clearInterval(this.intervalId);
    this.intervalId = null;
  }

  public start() {
    if (this.enabled) {
      throw new Error('Already started');
    }
    // Play first manually to avoid start delay
    this.play();
    this.intervalId = window.setInterval(() => {
      this.play();
    }, this.interval);
  }

  private play() {
    this.generator.play(this.frequency, this.duration);
  }
}
