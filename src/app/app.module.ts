import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputsComponent } from './comps/inputs/inputs.component';
import { ResetsComponent } from './comps/resets/resets.component';
import { TableComponent } from './comps/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    ResetsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
