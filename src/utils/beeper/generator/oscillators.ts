import { sleep } from '$utils/timing';

export async function oscillateFadeOut(
  context: AudioContext,
  destination: AudioNode,
  ms: number,
  frequency: number,
) {
  const endTime = context.currentTime + ms / 1000;
  const mixer = context.createGain();
  mixer.gain.value = 1;
  mixer.gain.exponentialRampToValueAtTime(0.0000001, endTime);
  mixer.connect(destination);

  const osc = context.createOscillator();
  osc.frequency.value = frequency;
  osc.connect(mixer);
  osc.start(0);
  osc.stop(endTime);

  await sleep(ms);
  mixer.disconnect(destination);
}
