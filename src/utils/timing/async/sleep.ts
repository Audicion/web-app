export const sleep = (ms: number, value?: any) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms, value);
  });
