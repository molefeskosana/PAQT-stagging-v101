import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
<<<<<<< HEAD
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "./angular-material.module";
import {MatTableModule} from "@angular/material/table";
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";
>>>>>>> 45fccf0b2c44c3fac29789cefc7b9b1d0d38a868

@NgModule({
  declarations: [
    AppComponent
  ],
<<<<<<< HEAD
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
=======
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatTableModule,
    AgGridModule,
    HttpClientModule,
  ],
>>>>>>> 45fccf0b2c44c3fac29789cefc7b9b1d0d38a868
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
