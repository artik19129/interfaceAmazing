import { Component } from '@angular/core';

import { TechnicalDataSheetService } from '../../shared/services/technical-data-sheet.service';

@Component({
  selector: 'app-technical-data-sheet',
  templateUrl: './technical-data-sheet.component.html',
  styleUrls: ['./technical-data-sheet.component.scss'],
})
export class TechnicalDataSheetComponent {
  constructor(public service: TechnicalDataSheetService) {}
}
