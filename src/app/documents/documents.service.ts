import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  public activeDocument: ActiveDocument = null;
  constructor() {}
}

export type ActiveDocument = 'TECHNICAL_DATA_SHEET' | 'DRIVING-LICENSE' | 'NONE';
