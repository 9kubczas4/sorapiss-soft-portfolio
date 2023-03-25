import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Log } from '../interfaces/log';

@Injectable()
export class ChangeDetectionLogService {
  private readonly logs$$ = new BehaviorSubject<Log[]>([]);

  logs$ = this.logs$$.asObservable();

  appendLog(initiator: string, event: string): void {
    this.logs$$.next([
      {
        timestamp: new Date(),
        initiator,
        event,
      },
      ...this.logs$$.value,
    ]);
  }
}
