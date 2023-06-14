import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css'],
})
export class AddRestroComponent {
  addRestro = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
  });
}
