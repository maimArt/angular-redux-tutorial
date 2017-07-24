import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {HttpModule} from '@angular/http'
import {StoreModule} from '../store/store.module'
import {PartyplanerModule} from './planning/partyplaner/partyplaner.module'
import {FormsModule} from '@angular/forms'
import {AppRoutingModule} from './app-routing.module';
import {SimulationModule} from './simulation/simulation.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule, BrowserModule, HttpModule, FormsModule, StoreModule, PartyplanerModule, SimulationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
