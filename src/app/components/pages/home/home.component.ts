import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  address: string;
  contact: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'KFC', address: 'Birgunj', contact: 9800000111 },
  {
    position: 2,
    name: 'Famous Sekuwa',
    address: 'Birgunj',
    contact: 9800000111,
  },
  {
    position: 3,
    name: 'Suresh Mithai',
    address: 'Birgunj',
    contact: 9800000111,
  },
  {
    position: 4,
    name: 'Minakshi Sweets',
    address: 'Birgunj',
    contact: 9800000111,
  },
  {
    position: 5,
    name: 'The Rock Corner',
    address: 'Birgunj',
    contact: 9800000111,
  },
  { position: 6, name: 'Cafe Moka', address: 'Birgunj', contact: 9800000111 },
];
