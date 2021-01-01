export enum STATES {
  NOT_EXISTS,
  EXISTS,
  CANCELED,
}
export interface Licence {
  id: number;
  type: TYPES;
  state: STATES;
  stateChangedAt: string;
  nextTryAt: string | null;
  cancelReason: string | null;
  endDate: string | null;
}

export enum TYPES {
  VEHICLES_D = 0,
  VEHICLES_M = 1,
  VEHICLES_B = 2,
  VEHICLES_FLY = 3,
  VEHICLES_BOATS = 4,
  WEAPONS = 5,
}

export type CharacterLicences = {
  [k in TYPES]: Licence | null;
};
