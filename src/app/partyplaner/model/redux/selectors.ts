import {Person} from "../../../model/person.type";

export function getCountOfPartymembers(state): number {
  return state.partyplaner.party.members.length;
}

export function getPartymembers(state): Array<Person> {
  return state.partyplaner.party.members;
}
