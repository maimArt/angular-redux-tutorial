import {Reducer} from 'redux'
import {PartyAction, PartyActions} from './actions'
import {Person} from '../../model/data/person.type'
import {Party} from '../../model/data/party.type'
import {personIsInList, personsAreEqual} from './selectors'
import {Replicator} from 'typescript-immutable-replicator'

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
        return Replicator.forObject(state).child("party").modify("members").by((members) => [...members, person]).replicate();
      }
    case PartyActions.REMOVE_PARTYMEMBER:
      if (personIsInList(state.party.members, person)) {
        return Replicator.forObject(state).child("party").modify("members").by((members) => members.filter((member) => !personsAreEqual(member, person))).replicate();
      } else {
        return state
      }
  }

  return state
}
