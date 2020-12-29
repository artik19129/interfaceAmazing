import { Component, Input, OnInit } from '@angular/core';

import { Licence, STATES, TYPES } from '../../shared/interfaces/licenses.interface';
import { format } from 'date-fns';

@Component({
  selector: 'app-driving-license-category',
  templateUrl: './driving-license-category.component.html',
  styleUrls: ['./driving-license-category.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.red]': 'isCanceled',
    '[class.green]': 'isExists',
  },
})
export class DrivingLicenseCategoryComponent implements OnInit {
  @Input() licence: Licence;
  @Input() private type: TYPES;
  public categoryLetter: string;
  public categoryIcon: string;
  public stateChangedAt: string;
  public nextTryAt: string;
  public isExists: boolean;
  public isCanceled: boolean;
  constructor() {}

  ngOnInit(): void {
    this.categoryLetter = this.getLicenceCategoryLetter(this.type);
    this.categoryIcon = this.getLicenceCategoryIcon(this.type);

    if (!this.licence) {
      return;
    }

    this.isExists = this.licence.state == STATES.EXISTS;
    this.isCanceled = this.licence.state == STATES.CANCELED;

    if (this.licence.stateChangedAt) {
      this.stateChangedAt = format(new Date(this.licence.stateChangedAt), 'dd.MM.yyyy');
    }

    if (this.licence.nextTryAt) {
      this.nextTryAt = format(new Date(this.licence.nextTryAt), 'dd.MM.yyyy');
    }
  }

  getLicenceCategoryLetter(type: TYPES): string {
    const letters: {
      [k in TYPES]?: string;
    } = {
      [TYPES.VEHICLES_B]: 'B',
      [TYPES.VEHICLES_BOATS]: 'BOATS',
      [TYPES.VEHICLES_D]: 'D',
      [TYPES.VEHICLES_FLY]: 'FLY',
      [TYPES.VEHICLES_M]: 'M',
    };
    return letters[type];
  }
  getLicenceCategoryIcon(type: TYPES): string {
    const letters: {
      [k in TYPES]?: string;
    } = {
      [TYPES.VEHICLES_B]: 'category_b',
      [TYPES.VEHICLES_BOATS]: 'category_boats',
      [TYPES.VEHICLES_D]: 'category_d',
      [TYPES.VEHICLES_FLY]: 'category_fly',
      [TYPES.VEHICLES_M]: 'category_m',
    };
    return letters[type];
  }
}
