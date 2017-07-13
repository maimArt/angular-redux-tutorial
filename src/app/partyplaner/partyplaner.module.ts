import {NgModule} from '@angular/core';

import {PartyplanerComponent} from './partyplaner.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [PartyplanerComponent],
  declarations: [PartyplanerComponent],
  providers: [],
})
export class PartyplanerModule {
}

