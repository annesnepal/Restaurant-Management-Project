import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RestroService } from 'src/app/services/restro.service';
import { Restaurant } from '../../model/restaurant';
import { MatSort } from '@angular/material/sort';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css'],
})
export class ListRestroComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'operation'];
  dataSource: any;
  collection: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  item: any;
  constructor(
    private restro: RestroService,
    private sharedService: SharedService,
    private router: Router
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
  // deleteRestro(item: number) {
  //   this.collection.splice(item - 1, 1);
  //   this.restro.deleteRestro(item).subscribe((result) => {
  //     console.warn('result', result);
  //   });
  // }

  filterChange(data: any) {
    const filvalue = (data.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
}
