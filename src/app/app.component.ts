import {Component, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {HttpClient} from "@angular/common/http";
import {AgGridAngular} from "ag-grid-angular";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  startDate = new Date();
  endDate = new Date();
  public rowData$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  public columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name'
    },
    {
      headerName: 'Last Name',
      field: 'lastName'
    },
    {
      headerName: 'ID',
      field: 'id'
    },
    {
      headerName: 'Address',
      field: 'address'
    },
    {
      headerName: 'Meter Number',
      field: 'meterNumber'
    }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  onGridReady(params: GridReadyEvent) {

  }

  onSubmit(){
    this.rowData$ = this.http
      .get<any[]>('/assets/records.json');
  }

  onReset(){
    this.startDate = new Date();
    this.endDate = new Date();
    this.rowData$ = new Observable<any[]>();
  }

}
