import { isString } from './isString';

describe('isString', () => {
  it('should returns true when input is a string', () => {
    const input = '';

    const result = isString(input);

    expect(result).toBeTruthy();
  });

  it('should returns false when input is not a string', () => {
    const input = NaN;

    const result = isString(input);

    expect(result).toBeFalsy();
  });

  it('should returns true when a string object', () => {
    // eslint-disable-next-line no-new-wrappers
    const input = new String();

    const result = isString(input);

    expect(result).toBeTruthy();
  });
});
