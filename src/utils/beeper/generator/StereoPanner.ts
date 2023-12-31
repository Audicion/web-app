/**
 * Auxiliary audio node, which is needed to balance the mono channel to the stereo channel.
 */
export class StereoPanner {
  private readonly splitter: ChannelSplitterNode;
  private readonly upMixer: GainNode;
  private readonly left: GainNode;
  private readonly right: GainNode;
  private readonly merger: ChannelMergerNode;

  constructor(private readonly context: AudioContext) {
    this.splitter = context.createChannelSplitter(2);
    this.left = context.createGain();
    this.right = context.createGain();
    this.merger = context.createChannelMerger(2);
    // ChannelSplitterNode cannot be told to use a `channelInterpretation` of
    // "speakers". This means that if we get a mono file, we will end up only
    // playing in the left speaker. So instead we use this dummy gain node to
    // convert whatever source we get (stereo, mono, or n channels) into a stereo
    // signal.
    // Idea credit: https://github.com/WebAudio/web-audio-api/issues/975#issue-177242377
    this.upMixer = context.createGain();
    this.upMixer.channelCount = 2;
    this.upMixer.channelCountMode = 'explicit';
    this.upMixer.channelInterpretation = 'speakers';
    this.upMixer.connect(this.splitter);
    this.splitter.connect(this.left, 0);
    this.splitter.connect(this.right, 1);
    this.left.connect(this.merger, 0, 0);
    this.right.connect(this.merger, 0, 1);
  }

  public connect(node: AudioNode, output?: number, input?: number) {
    return this.merger.connect(node, output, input);
  }

  public disconnect(node: AudioNode) {
    return this.merger.disconnect(node);
  }

  public get input() {
    return this.upMixer;
  }

  public getValue() {
    return this.right.gain.value - this.left.gain.value;
  }

  public setValueAtTime(value: number, startTime: number) {
    this.left.gain.setValueAtTime(Math.min(1 - value, 1), startTime);
    this.right.gain.setValueAtTime(Math.min(1 + value, 1), startTime);
  }

  public setValue(value: number) {
    this.setValueAtTime(value, this.context.currentTime);
  }
}
