export function createRangeAssert(title: string, min: number, max: number) {
  return (value: number) => {
    if (value > max || value < min) {
      throw new Error(`${title} should be in ${min} to ${max} range`);
    }
  };
}
