import { KeyValuePair } from '@ng-utils';

export interface TypeGuardResult {
  functionName: string;
  results: Array<KeyValuePair<any, boolean>>;
}
