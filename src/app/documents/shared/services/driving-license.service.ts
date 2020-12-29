import { Injectable } from '@angular/core';

import { Licence, TYPES } from '../interfaces/licenses.interface';

@Injectable({
  providedIn: 'root',
})
export class DrivingLicenseService {
  public name: string;
  public gender: string;
  public id: number;
  public licenses: DrivingLicences;

  loadData(data: IData): void {
    this.name = data.name;
    this.id = data.id;
    this.licenses = data.licenses;

    if (data.gender) {
      this.gender = 'Мужской';
    } else {
      this.gender = 'Женский';
    }
  }
}

type DrivingLicences = {
  [k in TYPES]?: Licence | null;
};

export interface IData {
  name: string;
  gender: 0 | 1;
  id: number;
  licenses: DrivingLicences;
}
