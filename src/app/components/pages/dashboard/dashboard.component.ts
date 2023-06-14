import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRestroComponent } from '../add-restro/add-restro.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(public dialog: MatDialog, private route: Router) {}
  openDialog() {
    this.dialog.open(AddRestroComponent);
  }
  onLogout() {
    this.route.navigate(['']);
  }
}
