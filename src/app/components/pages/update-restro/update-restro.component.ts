import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RestroService } from 'src/app/services/restro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css'],
})
export class UpdateRestroComponent {
  // alert: boolean = false;

  editRestro = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(
    private router: ActivatedRoute,
    private restro: RestroService,
    private route: Router
  ) {
    // console.warn(this.router.snapshot.params['id']);

    this.restro
      .getCurrentRestro(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        // console.log('result', result);
        this.editRestro = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
        });
      });
  }
  collection() {
    this.restro
      .updateRestro(this.router.snapshot.params['id'], this.editRestro.value)
      .subscribe((result) => {
        console.log('updated result', result);
        this.route.navigate(['/list']);
      });
    Swal.fire({
      // position: 'top-end',
      position: 'center',
      icon: 'success',
      title: 'Your data has been updated sucessfully',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
