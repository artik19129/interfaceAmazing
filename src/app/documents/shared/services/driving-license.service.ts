import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrivingLicenseService {
  public name: string;
  public gender: string;
  public id: number;
  public categories: TYPES[];

  loadData(data: IData): void {
    this.name = data.name;
    this.id = data.id;
    this.categories = data.categories;

    if (data.gender) {
      this.gender = 'Мужской';
    } else {
      this.gender = 'Женский';
    }
  }
}

export interface IData {
  name: string;
  gender: 0 | 1;
  id: number;
  categories: TYPES[];
}

export enum STATES {
  NOT_EXISTS,
  EXISTS,
  CANCELED,
}
export interface Licence {
  id: number;
  type: TYPES;
  state: STATES;
  stateChangedAt: Date;
  nextTryAt: Date | null;
  cancelReason: string | null;
}

export enum TYPES {
  VEHICLES_D = 0,
  VEHICLES_M = 1,
  VEHICLES_B = 2,
  VEHICLES_FLY = 3,
  VEHICLES_BOATS = 4,
  WEAPONS = 5,
}

type CharacterLicences = {
  [k in TYPES]: Licence | null;
};
