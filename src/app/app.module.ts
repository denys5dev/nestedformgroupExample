import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TableComponent } from './comp/table.component';
import { RequestComponent } from './comp/request.component';
import { ParalelComponent } from './paralel.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RequestComponent,
    ParalelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
