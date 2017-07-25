import {RootState} from '../root.reducer'
import {Party} from '../../model/data/party.type'
import {PartyplanerState} from './reducer'
import {Person} from '../../model/data/person.type'

function getPartyplanerState(rootState: RootState): PartyplanerState {
  return rootState.partyplaner;
}

export function getParty(rootState: RootState): Party {
  return getPartyplanerState(rootState).party;
}

export function personsAreEqual(person:Person, anotherPerson:Person) {
  return person.surname === anotherPerson.surname && person.prename === anotherPerson.prename;
}

export function personIsInList(persons:Person[], person:Person): boolean{
    return persons.some((member) => personsAreEqual(member, person))
}
