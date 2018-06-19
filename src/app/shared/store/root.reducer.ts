import {combineReducers, Reducer} from 'redux'
import {routerReducer} from '@angular-redux/router'
import {InitialPartyplanerState, partyplanerReducer, PartyplanerState} from '../../planning/store/reducer'
import {RouterState} from '@angular/router'

export interface RootState {
  partyplaner: PartyplanerState;
  router?: any;
}

/* root state should initialy be a plain object */
export const INITIAL_ROOTSTATE = {
  partyplaner: new InitialPartyplanerState()
};

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  partyplaner: partyplanerReducer,
  router: routerReducer
});
