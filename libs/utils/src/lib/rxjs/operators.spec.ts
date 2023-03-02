import { fakeAsync, flush, tick } from '@angular/core/testing';
import { from, of } from 'rxjs';
import { filterNil } from './operators';

describe('filterNil', () => {
  it('should not emit when stream has undefined', fakeAsync(() => {
    of(undefined)
      .pipe(filterNil())
      .subscribe(() => {
        fail('should not be emitted');
      });
    tick();
  }));

  it('should not emit when stream has null', fakeAsync(() => {
    of(null)
      .pipe(filterNil())
      .subscribe(() => {
        fail('should not be emitted');
      });
    tick();
  }));

  it('should emit only not nil value', fakeAsync(() => {
    const spy = jest.fn<void, [number]>();
    from([1, null, 2, undefined]).pipe(filterNil()).subscribe(spy);
    flush();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(1);
    expect(spy).toHaveBeenCalledWith(2);
  }));
});
