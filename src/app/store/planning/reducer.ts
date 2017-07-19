import {Reducer} from 'redux'
import {PartyAction, PartyActions} from './actions'
import {Person} from '../../model/person.type'
import {Party} from '../../model/party.type'
import {deepCopy} from '../../utils/redux.helper'

export interface PartyplanerState {
  party: Party
}

export class InitialPartyplanerState implements PartyplanerState {
  party: Party = new Party()
}

export const partyplanerReducer: Reducer<PartyplanerState> = (state: PartyplanerState = new InitialPartyplanerState(), action: PartyAction) => {
  let person: Person = action.payload
  switch (action.type) {
    case PartyActions.ADD_PARTYMEMBER:
      if (state.party.hasMember(person)) {
        return state
      } else {
        let nextState = deepCopy(state)
        nextState.party.addMember(person)
        return nextState
      }
    case PartyActions.REMOVE_PARTYMEMBER:
      if (state.party.hasMember(person)) {
        let nextState = deepCopy(state)
        nextState.party.removeMember(person)
        return nextState
      } else {
        return state
      }
  }

  return state
}
