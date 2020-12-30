import { Licence, TYPES } from './licenses.interface';

export type DrivingLicences = {
  [k in TYPES]?: Licence | null;
};

export interface DrivingLicenceLoadData {
  name: string;
  gender: 0 | 1;
  id: number;
  licenses: DrivingLicences;
}
