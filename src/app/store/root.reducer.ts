import {combineReducers, Reducer} from 'redux'
import {routerReducer} from '@angular-redux/router'
import {InitialPartyplanerState, partyplanerReducer, PartyplanerState} from './planning/reducer'
import {RouterState} from '@angular/router'

export interface RootState {
  partyplaner: PartyplanerState;
  router?: RouterState;
}

export class InitialRootState implements RootState {
  partyplaner:PartyplanerState = new InitialPartyplanerState();
}

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  partyplaner: partyplanerReducer,
  router: routerReducer
})
