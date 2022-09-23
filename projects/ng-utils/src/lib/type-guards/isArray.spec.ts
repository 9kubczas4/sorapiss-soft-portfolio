import { isArray } from './isArray';

describe('isArray', () => {
  it('should returns true if input is an array', () => {
    const input = [1];

    const result = isArray(input);

    expect(result).toBeTruthy();
  });

  it('should returns false if input is an array like', () => {
    const input = { count: 1 };

    const result = isArray(input);

    expect(result).toBeFalsy();
  });

  it('should returns false if value is not an array', () => {
    const input = 42;

    const result = isArray(input);

    expect(result).toBeFalsy();
  });
});
