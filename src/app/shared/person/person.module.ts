import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailViewComponent } from './person-detail-view/person-detail-view.component';
import { PersonTooltipComponent } from './person-tooltip/person-tooltip.component';
import { PersonListItemComponent } from './person-list-item/person-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PersonDetailViewComponent, PersonTooltipComponent, PersonListItemComponent]
})
export class PersonModule { }
