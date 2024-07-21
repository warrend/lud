import { allFastTypes, allFastNames } from '../constants';

export type TStatus = 'in-progress' | 'completed';

export type Fast = {
  id: string;
  start: string;
  end: string;
  status: TStatus;
  typeId: keyof typeof allFastTypes;
  nameId: keyof typeof allFastNames;
  secondsLeft?: number;
};
