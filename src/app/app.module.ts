import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {HttpModule} from '@angular/http'
import {RootStoreModule} from './shared/store/root-store.module'
import {PartyplanerModule} from './planning/partyplaner/partyplaner.module'
import {FormsModule} from '@angular/forms'
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule, BrowserModule, HttpModule, FormsModule, RootStoreModule, PartyplanerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
