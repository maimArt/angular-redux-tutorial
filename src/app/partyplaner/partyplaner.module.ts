import {NgModule} from '@angular/core';

import {PartyplanerComponent} from './partyplaner.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PartyActions} from "./model/redux/actions";

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [PartyplanerComponent],
  declarations: [PartyplanerComponent],
  providers: [PartyActions],
})
export class PartyplanerModule {
}

