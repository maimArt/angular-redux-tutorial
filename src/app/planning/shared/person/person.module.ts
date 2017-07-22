import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListItemComponent } from './person-list-item/person-list-item.component';
import { PersonDetailViewComponent } from './person-detail-view/person-detail-view.component';
import { PersonPopupComponent } from './person-popup/person-popup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PersonListItemComponent, PersonDetailViewComponent, PersonPopupComponent]
})
export class PersonModule { }
