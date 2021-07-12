import { Component, OnInit } from '@angular/core';

import { characterLicences } from './shared/constants/test-licenses';
import { ActiveDocument } from './shared/interfaces/documents.interface';
import { DrivingLicenceLoadData } from './shared/interfaces/driving-licence.interface';
import { TYPES } from './shared/interfaces/licenses.interface';
import { PassportLoadData } from './shared/interfaces/passport';
import { TechnicalDataSheetLoadData } from './shared/interfaces/technical-data-sheet.interface';
import { DrivingLicenseService } from './shared/services/driving-license.service';
import { PassportService } from './shared/services/passport.service';
import { TechnicalDataSheetService } from './shared/services/technical-data-sheet.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  public activeDocument: ActiveDocument = null;

  constructor(
    protected technicalDataSheetService: TechnicalDataSheetService,
    protected drivingLicenseService: DrivingLicenseService,
    protected passportService: PassportService,
  ) {}

  ngOnInit(): void {
    // this.openPassportDocument({
    //   name: 'Robin Walker',
    //   gender: 1,
    //   citizenship: 'UNITED STATES OF AMERICA',
    //   dateOfBirth: '2020-12-26T22:16:42.481Z',
    //   marriedName: 'Kristina Kovalevskaya',
    //   characterId: 1,
    // });
    // this.openTechnicalDataSheetDocument({
    //   name: 'Robin Walker',
    //   number: 'L303X',
    //   trusted: ['Robin_Walker', 'David_Hellr'],
    //   type: 'Автомобиль',
    //   owner: 'Robin_Walker',
    //   dateOfIssue: '2020-12-26T22:16:42.481Z',
    //   taxDate: '2020-12-26T22:16:42.481Z',
    //   color1: [222, 196, 11],
    //   color2: [222, 157, 12],
    // });
    this.openDrivingLicenceDocument({
      name: 'Robin Walker',
      gender: 1,
      id: 981800367815,
      licenses: {
        [TYPES.VEHICLES_BOATS]: characterLicences[TYPES.VEHICLES_BOATS],
        [TYPES.VEHICLES_B]: characterLicences[TYPES.VEHICLES_B],
        [TYPES.VEHICLES_M]: characterLicences[TYPES.VEHICLES_M],
        [TYPES.VEHICLES_D]: characterLicences[TYPES.VEHICLES_D],
        [TYPES.VEHICLES_FLY]: characterLicences[TYPES.VEHICLES_FLY],
      },
    });
  }

  closeDocuments(): void {
    this.activeDocument = null;
  }

  private showDocument(name: ActiveDocument): void {
    this.activeDocument = name;
  }

  private openDrivingLicenceDocument(data: DrivingLicenceLoadData): void {
    this.drivingLicenseService.loadData(data);
    this.showDocument('DRIVING_LICENSE');
  }

  private openPassportDocument(data: PassportLoadData): void {
    this.passportService.loadData(data);
    this.showDocument('PASSPORT');
  }

  private openTechnicalDataSheetDocument(data: TechnicalDataSheetLoadData): void {
    this.technicalDataSheetService.loadData(data);
    this.showDocument('TECHNICAL_DATA_SHEET');
  }
}
