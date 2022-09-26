export const isNil = <T>(x: T | undefined | null): x is null | undefined => x === undefined || x === null;

export const isNotNil = <T>(x: T | undefined | null): x is T => x !== undefined && x !== null;
