import { Component, OnInit } from '@angular/core';

import { DrivingLicenseService } from '../../shared/services/driving-license.service';

@Component({
  selector: 'app-driving-license',
  templateUrl: './driving-license.component.html',
  styleUrls: ['./driving-license.component.scss'],
})
export class DrivingLicenseComponent implements OnInit {
  constructor(public service: DrivingLicenseService) {}

  ngOnInit(): void {}
}
