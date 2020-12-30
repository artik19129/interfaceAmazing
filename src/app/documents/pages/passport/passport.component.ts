import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { PassportService } from '../../shared/services/passport.service';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss'],
})
export class PassportComponent implements OnInit {
  @Output() closeEmitter = new EventEmitter();

  constructor(public service: PassportService) {}

  ngOnInit(): void {}

  @HostListener('document:keydown', ['$event'])
  onDocumentKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.closeEmitter.emit();
    }
  }
}
