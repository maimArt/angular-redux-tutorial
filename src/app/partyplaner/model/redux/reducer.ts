import {Reducer} from "redux";
import { tassign } from "tassign";
import {PartyplanerState} from "./partyplaner.types";
import {Party} from "../../../model/party.types";
import {PartyAction, PartyActions} from "./actions";

export const INITIAL_PARTYPLANER_STATE: PartyplanerState = {
  party: new Party()
};

export const partyplanerReducer: Reducer<PartyplanerState> = (state: PartyplanerState = INITIAL_PARTYPLANER_STATE, action: PartyAction) => {
  switch (action.type) {
    case PartyActions.ADD_PARTYMEMBER:
      if(state.party.isMember(action.payload)){
        return state;
      } else {
        return tassign(state, {
          party: {members: [...state.party.members, action.payload]}
        })
      }
    case PartyActions.REMOVE_PARTYMEMBER:
      if(state.party.isMember(action.payload)){
        return tassign(state, {
          party: {members: state.party.members.filter((member => !member.equals(action.payload)))}
        })
      } else {
        return state;
      }

  }

  return state;
};
