import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;
  hideLoginPassword = true;
  hideRegisterPassword = true;
  hideRegisterConfirmPassword = true;
  registrationComplete: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validators: this.passwordMatchValidator.bind(this),
    }
  );

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.route.navigate(['dashboard']);
    }
  }

  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { passwordMismatch: true };
    }

    return null;
  }

  onLogin() {
    // console.log(this.loginForm.value);
    this.auth.findUser().subscribe((response: any[]) => {
      const user = response.find((a: any) => {
        return (
          a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
        );
      });
      if (user) {
        this.auth.setToken();
        this.loginForm.reset();
        this.toastr.success('Login Successfully', 'Success !!!');
        this.route.navigate(['dashboard']);
      } else {
        // User not found, handle error
        this.toastr.error('Incorrect email or password.', 'Invalid user');
        this.route.navigate(['']);
      }
    });
  }

  onRegister() {
    // console.log(this.registerForm.value);
    let { confirmPassword, ...other } = this.registerForm.value;

    this.auth.addUser(other).subscribe(() => {
      this.toastr.success(
        'Registered Successfully. Login to continue.',
        'Success !!!'
      );
      this.registerForm.reset();
      this.registrationComplete = true;
      this.tabGroup.selectedIndex = 0;
    });
  }
  getErrorOnLogin(controlName: string) {
    const control = this.loginForm.get(controlName);
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    if (control?.hasError('minlength')) {
      return 'Password should contain min. of 8 characters';
    }
    if (control?.hasError('email')) {
      return 'Not a valid email';
    }
    return '';
  }
  getErrorOnRegister(controlName: string) {
    const registerControl = this.registerForm.get(controlName);

    if (registerControl?.hasError('required')) {
      return 'You must enter a value';
    }
    if (registerControl?.hasError('minlength')) {
      return 'Password must be at least 8 characters long';
    }
    if (registerControl?.hasError('email')) {
      return 'Enter a valid email address';
    }
    if (
      controlName === 'confirmPassword' &&
      this.registerForm.hasError('passwordMismatch')
    ) {
      return 'Passwords do not match';
    }
    return '';
  }
}
