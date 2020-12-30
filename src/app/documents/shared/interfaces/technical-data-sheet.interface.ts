export interface TechnicalDataSheetLoadData {
  name: string;
  number: string;
  trusted: string[];
  type: string;
  owner: string;
  dateOfIssue: string;
  taxDate: string;
  color1: number | [number, number, number];
  color2: number | [number, number, number];
}
