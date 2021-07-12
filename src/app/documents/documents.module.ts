import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../ui/material/material.module';
import { DrivingLicenseCategoryComponent } from './components/driving-license-category/driving-license-category.component';
import { DrivingLicenseComponent } from './pages/driving-license/driving-license.component';
import { PassportComponent } from './pages/passport/passport.component';
import { TechnicalDataSheetComponent } from './pages/technical-data-sheet/technical-data-sheet.component';

@NgModule({
  declarations: [
    TechnicalDataSheetComponent,
    DrivingLicenseComponent,
    DrivingLicenseCategoryComponent,
    PassportComponent,
  ],
  imports: [BrowserModule, MaterialModule],
  exports: [TechnicalDataSheetComponent, DrivingLicenseComponent, PassportComponent],
  providers: [],
})
export class documentsModule {}
