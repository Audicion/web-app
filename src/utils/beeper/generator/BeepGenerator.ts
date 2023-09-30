import { createRangeAssert } from '../../assert/range';
import { oscillateFadeOut } from './oscillators';
import { StereoPanner } from './StereoPanner';
import type { BeepVolumeLimits } from './types';

const assertVolume = createRangeAssert('Volume', 0, 1);
const assertBalance = createRangeAssert('Balance', -1, 1);

export class BeepGenerator {
  private readonly panner: StereoPanner;
  private readonly output: GainNode;
  private _balance = 0;
  private _volume = 0.5;
  private volumeMin = 0;
  private volumeMax = 1;

  constructor(private readonly context: AudioContext) {
    this.panner = new StereoPanner(context);
    this.panner.connect(context.destination);
    this.output = context.createGain();
    this.output.connect(this.panner.input);
  }

  public set volume(value: number) {
    assertVolume(value);
    this._volume = value;
  }

  public get volume() {
    return this._volume;
  }

  public set volumeLimits({ max, min }: BeepVolumeLimits) {
    this.volumeMax = max;
    this.volumeMin = min;
  }

  public get volumeLimits(): BeepVolumeLimits {
    return {
      min: this.volumeMin,
      max: this.volumeMax,
    };
  }

  public set balance(value: number) {
    assertBalance(value);
    this._balance = value;
  }

  public get balance() {
    return this._balance;
  }

  public async play(frequency: number, ms: number) {
    this.applySettings();
    await oscillateFadeOut(this.context, this.output, ms, frequency);
  }

  private applySettings() {
    const volumeDelta = this.volumeMax - this.volumeMin;
    const targetVolume = this.volumeMin + volumeDelta * this._volume;
    this.output.gain.setValueAtTime(targetVolume, this.context.currentTime);
    this.panner.setValue(this._balance);
  }
}
