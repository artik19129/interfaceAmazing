import { Injectable } from '@angular/core';
import { format } from 'date-fns';

import { PassportLoadData } from '../interfaces/passport';

@Injectable({
  providedIn: 'root',
})
export class PassportService {
  public name: string;
  public gender: string;
  public citizenship: string;
  public dateOfBirth: string;
  public married: string;
  public numpass: string;

  loadData(data: PassportLoadData): void {
    this.name = data.name;
    this.gender = data.gender ? 'Мужчина' : 'Женщина';
    this.citizenship = 'UNITED STATES OF AMERICA';
    this.dateOfBirth = format(new Date(data.dateOfBirth), 'dd.MM.yyyy');
    this.numpass = data.characterId.toString().padStart(6, '0');

    if (data.gender) {
      this.married = data.marriedName ? `Женат на ${data.marriedName}` : 'Не женат';
    } else {
      this.married = data.marriedName ? `Замужем за ${data.marriedName}` : 'Не замужем';
    }
  }
}
