import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardListComponent } from './card-list/card-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    CardEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
