import { Component, EventEmitter, HostListener, Output } from '@angular/core';

import { TechnicalDataSheetService } from '../../shared/services/technical-data-sheet.service';

@Component({
  selector: 'app-technical-data-sheet',
  templateUrl: './technical-data-sheet.component.html',
  styleUrls: ['./technical-data-sheet.component.scss'],
})
export class TechnicalDataSheetComponent {
  @Output() closeEmitter = new EventEmitter();

  constructor(public service: TechnicalDataSheetService) {}

  @HostListener('document:keydown', ['$event'])
  onDocumentKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.closeEmitter.emit();
    }
  }
}
