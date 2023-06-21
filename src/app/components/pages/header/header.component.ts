import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutConfirmDialogComponent } from './logout-confirm-dialog/logout-confirm-dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() sidebarToggle: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog) {}
  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  openDialog() {
    this.dialog.open(LogoutConfirmDialogComponent);
  }
}
