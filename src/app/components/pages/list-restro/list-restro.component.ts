import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RestroService } from 'src/app/services/restro.service';
import { Restaurant } from '../../model/restaurant';
import { MatSort } from '@angular/material/sort';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';
import { AddRestroComponent } from '../add-restro/add-restro.component';
import { UpdateRestroComponent } from '../update-restro/update-restro.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css'],
})
export class ListRestroComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'operation'];
  dataSource: any;
  collection: any;
  restroDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  item: any;
  constructor(
    private dialog: MatDialog,
    private restro: RestroService,
    private sharedService: SharedService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.listRestro();
    this.sharedService.searchQuery$.subscribe((data) => {
      this.filterChange(data);
    });
  }

  listRestro() {
    this.restro.getList().subscribe((result) => {
      this.collection = result;

      this.dataSource = new MatTableDataSource<Restaurant>(this.collection);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  delRestro(id: number) {
    this.restro.deleteRestro(id).subscribe((result) => {
      this.listRestro();
      this.toastr.success(
        'Restro has been deleted successfully',
        'Success !!!'
      );
    });
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '122px',
    };
    dialogConfig.width = '25%';
    dialogConfig.height = '56%';
    const dialogRef = this.dialog.open(AddRestroComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.listRestro();
      }
    });
  }
  editRestro(data: number) {
    // console.log(data)

    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '122px',
    };
    dialogConfig.width = '25%';
    dialogConfig.height = '56%';
    this.restro.getCurrentRestro(data).subscribe((result) => {
      this.restroDetails = result;
      dialogConfig.data = this.restroDetails;
      const dialogRef = this.dialog.open(UpdateRestroComponent, dialogConfig);
      dialogRef.afterClosed().subscribe((data) => {
        if (data) {
          this.listRestro();
        }
      });
    });
  }

  filterChange(data: any) {
    const filvalue = (data.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
}
