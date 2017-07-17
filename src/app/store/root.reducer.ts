import { Reducer, combineReducers } from 'redux';
import { routerReducer } from "@angular-redux/router";
import {INITIAL_PARTYPLANER_STATE, partyplanerReducer, PartyplanerState} from '../partyplaner/model/redux/reducer';
import {RouterState} from "@angular/router";

export type RootState = {
  partyplaner: PartyplanerState,
  router?: RouterState,
}

export const initialState: RootState = {
  partyplaner: INITIAL_PARTYPLANER_STATE
};

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  partyplaner: partyplanerReducer,
  router: routerReducer,
});
