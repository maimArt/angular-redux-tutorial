import {NgModule} from '@angular/core'

import {MemberManagementComponent} from './components/member-management/member-management.component'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {PartyActions} from '../../../store/planning/actions'

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MemberManagementComponent],
  declarations: [MemberManagementComponent],
  providers: [PartyActions]
})
export class PartyplanerModule {
}

