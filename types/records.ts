import { allFastNames } from '../constants';

export type TRecord = {
  name: string;
  total: number;
  minutes: number;
  id: keyof typeof allFastNames;
};
