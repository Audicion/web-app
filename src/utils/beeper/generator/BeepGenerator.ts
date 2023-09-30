import { sleep } from '$utils/timing';
import { createRangeAssert } from '../../assert/range';
import { oscillateFadeOut } from './oscillators';
import { StereoPanner } from './StereoPanner';

const volumeFactor = 0.2;
const minVolume = 0.00001;
const maxVolume = 0.1;

const assertVolume = createRangeAssert('Volume', 0, 1);
const assertFrequency = createRangeAssert('Frequency', 20, 20000);
const assertBalance = createRangeAssert('Balance', -1, 1);

export class BeepGenerator {
  private readonly panner: StereoPanner;
  private readonly source: GainNode;
  private _balance = 0;
  private _volume = 0.5;
  private _frequency = 440;

  constructor(
    private readonly context: AudioContext,
    private readonly duration: number,
  ) {
    this.panner = new StereoPanner(context);
    this.source = context.createGain();
    this.source.connect(context.destination);
    this.panner.connect(this.source);
  }

  set volume(value: number) {
    assertVolume(value);
    const targetVolume = (maxVolume - minVolume) * value * volumeFactor;
    this.source.gain.setValueAtTime(targetVolume, this.context.currentTime);
    this._volume = value;
  }

  get volume() {
    return this._volume;
  }

  set frequency(value: number) {
    assertFrequency(value);
    this._frequency = value;
  }

  get frequency() {
    return this._frequency;
  }

  set balance(value: number) {
    assertBalance(value);
    this._balance = value;
  }

  get balance() {
    return this._balance;
  }

  public async play() {
    await this.beep(this._frequency, this.duration);
  }

  private async beep(frequency: number, ms: number) {
    this.panner.setValue(this.balance);
    oscillateFadeOut(this.context, this.panner.input, this.duration, frequency);
    await sleep(ms);
  }
}
