/* eslint-disable accessor-pairs */
import { sleep } from '$utils/timing';
import { BeepGenerator } from './generator';

export class Beeper {
  private readonly generator: BeepGenerator;
  public enabled = false;

  constructor(
    public interval = 500,
    duration: number,
  ) {
    this.generator = new BeepGenerator(new AudioContext(), duration);
  }

  public set volume(value: number) {
    this.generator.volume = value;
  }

  public set frequency(value: number) {
    this.generator.frequency = value;
  }

  public set balance(value: number) {
    this.generator.balance = value;
  }

  public stop() {
    this.enabled = false;
  }

  public start() {
    this.enabled = true;
    this.loop().then(() => {});
  }

  private async loop() {
    while (this.enabled) {
      await this.generator.play();
      await sleep(this.interval);
    }
  }
}
