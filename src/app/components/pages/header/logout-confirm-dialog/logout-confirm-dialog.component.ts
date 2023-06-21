import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-logout-confirm-dialog',
  templateUrl: './logout-confirm-dialog.component.html',
  styleUrls: ['./logout-confirm-dialog.component.css'],
})
export class LogoutConfirmDialogComponent {
  constructor(private route: Router, private auth: AuthService) {}
  onLogout() {
    this.auth.logout();
    this.route.navigate(['']);
  }
}
