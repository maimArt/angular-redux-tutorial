import {NgModule} from '@angular/core'
import {MemberManagementComponent} from './components/member-management/member-management.component'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {PartyActions} from '../../../store/planning/actions'
import {PartyplanningEpics} from '../../../store/planning/epics'
import {FriendscoutServiceModule} from '../../../services/planning/friendscout-service/friendscout-service.module'

@NgModule({
  imports: [CommonModule, FormsModule, FriendscoutServiceModule],
  exports: [MemberManagementComponent],
  declarations: [MemberManagementComponent],
  providers: [PartyActions, PartyplanningEpics]
})
export class PartyplanerModule {
}

