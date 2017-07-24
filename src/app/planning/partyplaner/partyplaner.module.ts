import {NgModule} from '@angular/core'
import {MemberManagementViewComponent} from './member-management-view/member-management-view.component'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {PartyActions} from '../../../store/party/actions'
import {PartyplanningEpics} from '../../../store/party/epics'
import {FriendscoutServiceModule} from '../../../model/services/social/friendscout-service/friendscout-service.module'

@NgModule({
  imports: [CommonModule, FormsModule, FriendscoutServiceModule],
  exports: [MemberManagementViewComponent],
  declarations: [MemberManagementViewComponent],
  providers: [PartyActions, PartyplanningEpics]
})
export class PartyplanerModule {
}

