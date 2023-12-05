import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

export interface PeriodicElement {
  nombre: string;
  posicion: number;
  peso: number;
  simbolo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { posicion: 1, nombre: 'Hydrogen', peso: 1.0079, simbolo: 'H' },
  { posicion: 2, nombre: 'Helium', peso: 4.0026, simbolo: 'He' },
  { posicion: 3, nombre: 'Lithium', peso: 6.941, simbolo: 'Li' },
  { posicion: 4, nombre: 'Beryllium', peso: 9.0122, simbolo: 'Be' },
  { posicion: 5, nombre: 'Boron', peso: 10.811, simbolo: 'B' },
  { posicion: 6, nombre: 'Carbon', peso: 12.0107, simbolo: 'C' },
  { posicion: 7, nombre: 'Nitrogen', peso: 14.0067, simbolo: 'N' },
  { posicion: 8, nombre: 'Oxygen', peso: 15.9994, simbolo: 'O' },
  { posicion: 9, nombre: 'Fluorine', peso: 18.9984, simbolo: 'F' },
  { posicion: 10, nombre: 'Neon', peso: 20.1797, simbolo: 'Ne' },
];


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['posicion', 'nombre', 'peso', 'simbolo'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}