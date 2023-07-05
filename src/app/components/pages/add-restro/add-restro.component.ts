import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RestroService } from 'src/app/services/restro.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css'],
})
export class AddRestroComponent {
  addRestro = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(private restro: RestroService, private dialogRef : MatDialogRef<AddRestroComponent>) {}
  collectRestro() {
    this.restro.saveRestro(this.addRestro.value).subscribe(() => {
      this.addRestro.reset();
      this.dialogRef.close(true);
    });
    Swal.fire({
      // position: 'top-end',
      position: 'center',
      icon: 'success',
      title: 'Your data has been added sucessfully',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
