import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DrivingLicenseComponent } from './pages/driving-license/driving-license.component';
import { TechnicalDataSheetComponent } from './pages/technical-data-sheet/technical-data-sheet.component';

@NgModule({
  declarations: [TechnicalDataSheetComponent, DrivingLicenseComponent],
  imports: [BrowserModule],
  exports: [TechnicalDataSheetComponent, DrivingLicenseComponent],
  providers: [],
})
export class documentsModule {}
