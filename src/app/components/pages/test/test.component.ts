import { Component, OnInit } from '@angular/core';

interface Seat {
  label: string;
  checked: boolean;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  rows: (Seat | boolean)[][] = [
    [
      { label: 'A1', checked: false },
      { label: 'A2', checked: false },
      true,
      { label: 'B1', checked: false },
      { label: 'B2', checked: false },
    ],
    [
      { label: 'A3', checked: false },
      { label: 'A4', checked: false },
      true,
      { label: 'B3', checked: false },
      { label: 'B4', checked: false },
    ],
    [
      { label: 'A5', checked: false },
      { label: 'A6', checked: false },
      true,
      { label: 'B5', checked: false },
      { label: 'B6', checked: false },
    ],
    [
      { label: 'A7', checked: false },
      { label: 'A8', checked: false },
      true,
      { label: 'B7', checked: false },
      { label: 'B8', checked: false },
    ],
  ];
  constructor() {}
  ngOnInit() {}
  isSeat(seatOrGap: Seat | boolean): seatOrGap is Seat {
    return typeof seatOrGap !== 'boolean';
  }
  handleCheckboxChange(seat: Seat) {
    seat.checked = !seat.checked;
    // Handle checkbox change logic for the specific seat here
    console.log(`Checkbox for seat ${seat.label} checked:`, seat.checked);
  }
}
