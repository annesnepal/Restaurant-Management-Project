import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RestroService } from 'src/app/services/restro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css'],
})
export class UpdateRestroComponent implements OnInit{
  //  editRestro!: FormGroup;
   editRestro = new FormGroup({
     name: new FormControl(''),
     email: new FormControl(''),
     address: new FormControl(''),
   });
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, private restro: RestroService,private dialogRef : MatDialogRef<UpdateRestroComponent>) {}

  ngOnInit(): void {
      this.editRestro.patchValue(this.dialogData)
  }
  collection(){
    this.restro.updateRestro(this.dialogData.id, this.editRestro.value).subscribe(()=>{
      this.editRestro.reset();
      this.dialogRef.close(true);
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
