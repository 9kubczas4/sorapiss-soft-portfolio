import { isNull } from './isNull';

describe('isNull', () => {
  it('should returns true when input is null', () => {
    const input = null;

    const result = isNull(input);

    expect(result).toBeTruthy();
  });

  it('should returns false when input is undefined', () => {
    const input = undefined;

    const result = isNull(input);

    expect(result).toBeFalsy();
  });

  it('should returns false when input is not null nor undefined', () => {
    const input = '';

    const result = isNull(input);

    expect(result).toBeFalsy();
  });
});
