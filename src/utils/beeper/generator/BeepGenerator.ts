import { createRangeAssert } from '../../assert/range';
import { oscillateFadeOut } from './oscillators';
import { StereoPanner } from './StereoPanner';

const volumeMin = 0.00001;
const volumeMax = 0.1;
const volumeDelta = volumeMax - volumeMin;

const assertVolume = createRangeAssert('Volume', 0, 1);
const assertBalance = createRangeAssert('Balance', -1, 1);

export class BeepGenerator {
  private readonly panner: StereoPanner;
  private readonly output: GainNode;
  private _balance = 0;
  private _volume = 0.5;

  constructor(private readonly context: AudioContext) {
    this.panner = new StereoPanner(context);
    this.panner.connect(context.destination);
    this.output = context.createGain();
    this.output.connect(this.panner.input);
  }

  set volume(value: number) {
    assertVolume(value);
    this._volume = value;
  }

  get volume() {
    return this._volume;
  }

  set balance(value: number) {
    assertBalance(value);
    this._balance = value;
  }

  get balance() {
    return this._balance;
  }

  private applySettings() {
    const targetVolume = volumeMin + volumeDelta * this._volume;
    this.output.gain.setValueAtTime(targetVolume, this.context.currentTime);
    this.panner.setValue(this._balance);
  }

  public async play(frequency: number, ms: number) {
    this.applySettings();
    await oscillateFadeOut(this.context, this.output, ms, frequency);
  }
}
