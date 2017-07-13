import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {StoreModule} from "./store/store.module";
import {PartyplanerModule} from "./partyplaner/partyplaner.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, StoreModule, PartyplanerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
