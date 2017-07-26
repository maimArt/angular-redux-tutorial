import {Reducer} from 'redux'
import {PartyAction, PartyActions} from './actions'
import {Person} from '../../model/data/person.type'
import {Party} from '../../model/data/party.type'
import * as Immutable from 'seamless-immutable'
import {personIsInList, personsAreEqual} from './selectors'

export interface PartyplanerState {
  party: Party
}

export class InitialPartyplanerState implements PartyplanerState{
  party: Party = new Party();
}

export const partyplanerReducer: Reducer<PartyplanerState> = (state: PartyplanerState = new InitialPartyplanerState(), action: PartyAction) => {
  let person: Person = action.payload
  switch (action.type) {
    case PartyActions.ADD_PARTYMEMBER:
      if (personIsInList(state.party.members, person)) {
        return state
      } else {
        return Immutable.setIn(state, ['party', 'member'], [...state.party.members, person]);
      }
    case PartyActions.REMOVE_PARTYMEMBER:
      if (personIsInList(state.party.members, person)) {
        return Immutable.updateIn(state, ['party', 'members'], removePersonFromList, person);
      } else {
        return state
      }
  }

  return state
}

function removePersonFromList(persons: Person[], person: Person) {
  return persons.filter((member) => !personsAreEqual(member, person));
}
