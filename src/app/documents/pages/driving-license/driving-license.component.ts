import { Component, OnInit } from '@angular/core';

import { DrivingLicenseService } from '../../shared/services/driving-license.service';
import { Licence, TYPES } from '../../shared/interfaces/licenses.interface';

@Component({
  selector: 'app-driving-license',
  templateUrl: './driving-license.component.html',
  styleUrls: ['./driving-license.component.scss'],
})
export class DrivingLicenseComponent implements OnInit {
  public licenses: [TYPES, Licence][] = [];
  constructor(public service: DrivingLicenseService) {}

  ngOnInit(): void {
    // @ts-ignore
    this.licenses = Object.entries(this.service.licenses);
  }
}
