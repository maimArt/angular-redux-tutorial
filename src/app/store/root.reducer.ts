import { Reducer, combineReducers } from 'redux';
import { routerReducer } from "@angular-redux/router";
import {RootState} from "./root.state";
import {INITIAL_PARTYPLANER_STATE, partyplanerReducer} from '../partyplaner/model/redux/reducer';


export const initialState: RootState = {
  partyplaner: INITIAL_PARTYPLANER_STATE
};

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  partyplaner: partyplanerReducer,
  router: routerReducer,
});
