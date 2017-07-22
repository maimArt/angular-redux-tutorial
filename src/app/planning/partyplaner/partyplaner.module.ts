import {NgModule} from '@angular/core'
import {MemberManagementComponent} from './member-management/member-management.component'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {PartyActions} from '../../../store/party/actions'
import {PartyplanningEpics} from '../../../store/party/epics'
import {FriendscoutServiceModule} from '../../../model/services/social/friendscout-service/friendscout-service.module'

@NgModule({
  imports: [CommonModule, FormsModule, FriendscoutServiceModule],
  exports: [MemberManagementComponent],
  declarations: [MemberManagementComponent],
  providers: [PartyActions, PartyplanningEpics]
})
export class PartyplanerModule {
}

