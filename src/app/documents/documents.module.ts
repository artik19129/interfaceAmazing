import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DrivingLicenseComponent } from './pages/driving-license/driving-license.component';
import { TechnicalDataSheetComponent } from './pages/technical-data-sheet/technical-data-sheet.component';
import { MaterialModule } from '../ui/material/material.module';
import { DrivingLicenseCategoryComponent } from './components/driving-license-category/driving-license-category.component';
import { PassportComponent } from './pages/passport/passport.component';

@NgModule({
  declarations: [TechnicalDataSheetComponent, DrivingLicenseComponent, DrivingLicenseCategoryComponent, PassportComponent],
  imports: [BrowserModule, MaterialModule],
  exports: [TechnicalDataSheetComponent, DrivingLicenseComponent, PassportComponent],
  providers: [],
})
export class documentsModule {}
