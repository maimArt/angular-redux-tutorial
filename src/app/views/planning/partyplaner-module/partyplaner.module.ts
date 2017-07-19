import {NgModule} from '@angular/core'

import {MemberManagementComponent} from './components/member-management/member-management.component'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {PartyActions} from '../../../store/planning/actions'
import {FriendScoutService} from '../../../services/planning/friendscout.service'
import {PartyplanningEpics} from '../../../store/planning/epics'

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MemberManagementComponent],
  declarations: [MemberManagementComponent],
  providers: [PartyActions, FriendScoutService, PartyplanningEpics]
})
export class PartyplanerModule {
}

