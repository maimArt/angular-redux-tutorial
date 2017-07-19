import {Reducer} from 'redux'
import {PartyAction, PartyActions} from './actions'
import {Person} from '../../model/person.type'
import {Party} from '../../model/party.type'
import {assign} from 'lodash'

export interface PartyplanerState {
  party: Party
}

export const INITIAL_PARTYPLANER_STATE: PartyplanerState = {
  party: new Party()
}

export const partyplanerReducer: Reducer<PartyplanerState> = (state: PartyplanerState = INITIAL_PARTYPLANER_STATE, action: PartyAction) => {
  let person: Person = action.payload
  switch (action.type) {
    case PartyActions.ADD_PARTYMEMBER:
      if (state.party.hasMember(person)) {
        return state
      } else {
        let nextState = assign(state)
        nextState.party.addMember(person)
        return nextState
      }
    case PartyActions.REMOVE_PARTYMEMBER:
      if (state.party.hasMember(person)) {
        let nextState = assign(state)
        nextState.party.removeMember(person)
        return nextState
      } else {
        return state
      }
  }

  return state
}
