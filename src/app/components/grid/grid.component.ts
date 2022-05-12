import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  columnDefs : ColDef[] = [
    { field: 'course' },
    { field: 'fees' },
];

rowData = [
    { course: 'Java', fees: 15000 },
    { course: 'Python', fees: 13000 },
    { course: 'C#', fees: 14000 },
    { course: 'React', fees: 16000 },
];
 

}
