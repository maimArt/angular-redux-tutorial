import {InjectionToken, NgModule} from '@angular/core'
import {MemberManagementViewComponent} from './member-management-view/member-management-view.component'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {FriendscoutServiceModule} from '../services/social/friendscout-service/friendscout-service.module'
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import * as fromParty from '../store/reducer';
import {featureName} from '../store/feature-definition';
import {PartyplanerState} from '../store/reducer';

export const FEATURE_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<PartyplanerState>>('Partyplaner Reducers');

export function getReducers(): ActionReducerMap<PartyplanerState> {
  return fromParty.reducers;
}


@NgModule({
  imports: [CommonModule, FormsModule, FriendscoutServiceModule, StoreModule.forFeature(featureName, FEATURE_REDUCER_TOKEN)],
  exports: [MemberManagementViewComponent],
  declarations: [MemberManagementViewComponent],
  providers: [{
    provide: FEATURE_REDUCER_TOKEN,
    useFactory: getReducers
  }]
})
export class PartyplanerModule {
}

