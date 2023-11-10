/* eslint-disable @typescript-eslint/no-explicit-any */
export const logParametersAndReturnValue = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;
  descriptor.value = (...args: any[]) => {
    const argList = args.map((arg) => JSON.stringify(arg)).join(', ');
    const result = originalMethod.apply(this, args);
    const resultString = JSON.stringify(result);
    console.log(`Method ${propertyKey} called with: ${argList}`);
    console.log(`Method ${propertyKey} returned: ${resultString}`);
    return result;
  };
  return descriptor;
};
