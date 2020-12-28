import { Component, OnInit } from '@angular/core';

import { ActiveDocument, DocumentsService } from './documents.service';
import { DrivingLicenseService, TYPES } from './shared/services/driving-license.service';
import { TechnicalDataSheetService } from './shared/services/technical-data-sheet.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  constructor(
    protected technicalDataSheetService: TechnicalDataSheetService,
    public service: DocumentsService,
    protected drivingLicenseService: DrivingLicenseService,
  ) {}

  ngOnInit(): void {
    this.technicalDataSheetService.loadData({
      name: 'Robin Walker',
      number: 'L303X',
      trusted: ['Robin_Walker', 'David_Hellr'],
      type: 'Автомобиль',
      owner: 'Robin_Walker',
      dateOfIssue: '2020-12-26T22:16:42.481Z',
      taxDate: '2020-12-26T22:16:42.481Z',
      color1: [222, 196, 11],
      color2: [222, 157, 12],
    });
    this.drivingLicenseService.loadData({
      name: 'Robin Walker',
      gender: 1,
      id: 981800367815,
      categories: [TYPES.VEHICLES_B, TYPES.VEHICLES_D, TYPES.VEHICLES_FLY],
    });
    this.showDocument('TECHNICAL_DATA_SHEET');
    // setInterval(() => {
    //   this.showDocument('TECHNICAL_DATA_SHEET');
    //   setTimeout(() => {
    //     this.showDocument('DRIVING-LICENSE');
    //   }, 1000);
    // }, 2000);
  }

  showDocument(name: ActiveDocument): void {
    this.service.activeDocument = name;
  }
}
