import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceAddComponent } from './price-add/price-add.component';
import {FormsModule} from '@angular/forms';
import { PriceListComponent } from './price-list/price-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceAddComponent,
    PriceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
