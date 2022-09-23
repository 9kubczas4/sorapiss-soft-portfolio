export const isString = (value: unknown): value is string =>
  typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
