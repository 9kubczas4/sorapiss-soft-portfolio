import { KeyValuePair } from '@sorapiss-soft-portfolio/utils';

export interface TypeGuardResult {
  functionName: string;
  results: Array<KeyValuePair<any, boolean>>;
}
