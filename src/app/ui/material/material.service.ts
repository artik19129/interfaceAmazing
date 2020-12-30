import { Injectable } from '@angular/core';

const svgIcons = [
  { name: 'category_b', path: 'images/driving-license/categories/category_b.svg' },
  { name: 'category_boats', path: 'images/driving-license/categories/category_boats.svg' },
  { name: 'category_d', path: 'images/driving-license/categories/category_d.svg' },
  { name: 'category_fly', path: 'images/driving-license/categories/category_fly.svg' },
  { name: 'category_m', path: 'images/driving-license/categories/category_m.svg' },
  { name: 'exit', path: 'svg/icons/exit.svg' },
  { name: 'star', path: 'svg/icons/star.svg' },
  { name: 'usa_logo_eagle', path: 'svg/icons/usa_logo_eagle.svg' },
  { name: 'right-line', path: 'svg/icons/right-line.svg' },
];

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  get localSvgIcons(): { name: string; path: string }[] {
    return svgIcons;
  }
}
