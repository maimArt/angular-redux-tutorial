import {combineReducers, Reducer} from 'redux'
import {routerReducer} from '@angular-redux/router'
import {InitialPartyplanerState, partyplanerReducer, PartyplanerState} from './party/reducer'
import {RouterState} from '@angular/router'
import * as Immutable from 'seamless-immutable'

export interface RootState {
  partyplaner: Immutable<PartyplanerState>;
  router?: RouterState;
}

/* root state should initialy be a plain object */
export const INITIAL_ROOTSTATE = Immutable({
  partyplaner: new InitialPartyplanerState()
});

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  partyplaner: partyplanerReducer,
  router: routerReducer
})
