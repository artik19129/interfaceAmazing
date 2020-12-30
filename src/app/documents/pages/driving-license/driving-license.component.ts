import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { Licence, TYPES } from '../../shared/interfaces/licenses.interface';
import { DrivingLicenseService } from '../../shared/services/driving-license.service';

@Component({
  selector: 'app-driving-license',
  templateUrl: './driving-license.component.html',
  styleUrls: ['./driving-license.component.scss'],
})
export class DrivingLicenseComponent implements OnInit {
  @Output() closeEmitter = new EventEmitter();

  public licenses: [TYPES, Licence][] = [];

  constructor(public service: DrivingLicenseService) {}

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.licenses = Object.entries(this.service.licenses);
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.closeEmitter.emit();
    }
  }
}
