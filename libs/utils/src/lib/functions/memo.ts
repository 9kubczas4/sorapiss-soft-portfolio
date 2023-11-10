/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-types
export const memo = <T extends Function>(fnToMemoize: T) => {
  let prevArgs = [{}];
  let result: any;

  return (...newArgs: any[]) => {
    if (hasDifferentArgs(prevArgs, newArgs)) {
      result = fnToMemoize(...newArgs);
      prevArgs = newArgs;
    }
    return result;
  };
};

const hasDifferentArgs = (prev: unknown[], next: unknown[]) => {
  if (prev.length !== next.length) {
    return true;
  }
  for (let i = 0; i < prev.length; i++) {
    if (!Object.is(prev[i], next[i])) {
      return true;
    }
  }
  return false;
};
