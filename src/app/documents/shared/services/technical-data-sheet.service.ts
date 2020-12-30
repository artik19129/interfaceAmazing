import { Injectable } from '@angular/core';
import { format } from 'date-fns';

import { TechnicalDataSheetLoadData } from '../interfaces/technical-data-sheet.interface';

@Injectable({
  providedIn: 'root',
})
export class TechnicalDataSheetService {
  public name: string;
  public number: string;
  public trusted: string[];
  public type: string;
  public owner: string;
  public dateOfIssue: string;
  public taxDate: string;
  public color1: number | [number, number, number];
  public color2: number | [number, number, number];

  loadData(data: TechnicalDataSheetLoadData): void {
    this.name = data.name;
    this.number = data.number;
    this.type = data.type;
    this.owner = data.owner;
    this.dateOfIssue = format(new Date(data.dateOfIssue), 'dd.MM.yyyy');
    this.taxDate = format(new Date(data.taxDate), 'dd.MM.yyyy');
    this.trusted = data.trusted;
    this.color1 = data.color1;
    this.color2 = data.color2;
  }
}
