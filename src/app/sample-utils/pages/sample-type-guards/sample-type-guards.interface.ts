import { KeyValuePair } from '@sorapiss-soft-portfolio/utils';

export interface TypeGuardResult {
  functionName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: Array<KeyValuePair<any, boolean>>;
}
