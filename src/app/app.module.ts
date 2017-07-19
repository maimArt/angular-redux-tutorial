import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {HttpModule} from '@angular/http'
import {StoreModule} from './store/store.module'
import {PartyplanerModule} from './views/planning/partyplaner-module/partyplaner.module'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, StoreModule, PartyplanerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
