import {Reducer} from 'redux'
import {PartyAction, PartyActions} from './actions'
import {Person} from '../../model/data/person.type'
import {Party} from '../../model/data/party.type'
import {personIsInList, personsAreEqual} from './selectors'
import {StateProducer} from 'typescript-redux-helper'

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
        return StateProducer.load(state).switchTo("party").switchTo("members").setByFunction((members) => [...members, person]).produce();
      }
    case PartyActions.REMOVE_PARTYMEMBER:
      if (personIsInList(state.party.members, person)) {
        return StateProducer.load(state).switchTo("party").switchTo("members").setByFunction((members) => members.filter((member) => !personsAreEqual(member, person))).produce();
      } else {
        return state
      }
  }

  return state
}
