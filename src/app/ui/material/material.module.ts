import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { DomSanitizer } from '@angular/platform-browser';

import { MaterialService } from './material.service';

@NgModule({
  imports: [HttpClientModule, MatIconModule, MatSliderModule, MatCheckboxModule],
  exports: [HttpClientModule, MatIconModule, MatSliderModule, MatCheckboxModule],
})
export class MaterialModule {
  constructor(
    private materialService: MaterialService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.registerSvgIcons();
  }

  registerSvgIcons(): void {
    for (const icon of this.materialService.localSvgIcons) {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/${icon.path}`),
      );
    }
  }
}
