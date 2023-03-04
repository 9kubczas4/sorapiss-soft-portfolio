import { filter, OperatorFunction } from 'rxjs';
import { isNotNil } from '../type-guards';

export const filterNil =
  <T>(): OperatorFunction<null | undefined | T, NonNullable<T>> =>
  (source$) =>
    source$.pipe(filter(isNotNil));
