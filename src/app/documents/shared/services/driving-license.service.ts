import { Injectable } from '@angular/core';

import { DrivingLicenceLoadData, DrivingLicences } from '../interfaces/driving-licence.interface';

@Injectable({
  providedIn: 'root',
})
export class DrivingLicenseService {
  public name: string;
  public gender: string;
  public id: number;
  public licenses: DrivingLicences;

  loadData(data: DrivingLicenceLoadData): void {
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
