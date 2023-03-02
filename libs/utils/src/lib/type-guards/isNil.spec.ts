import { isNil } from './isNil';

describe('isNil', () => {
  it('should returns true when input is null', () => {
    const input = null;

    const result = isNil(input);

    expect(result).toBeTruthy();
  });

  it('should returns true when input is undefined', () => {
    const input = undefined;

    const result = isNil(input);

    expect(result).toBeTruthy();
  });

  it('should returns false when input is not null nor undefined', () => {
    const input = '';

    const result = isNil(input);

    expect(result).toBeFalsy();
  });
});
