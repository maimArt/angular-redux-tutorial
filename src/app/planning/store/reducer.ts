import {PartyActionsUnion, PartyActionTypes} from './actions'
import {Person, personIsInList, personsAreEqual} from '../../../model/data/person.type'
import {Party} from '../../../model/data/party.type'
import {ReplicationBuilder} from 'typescript-immutable-helper'
import {ActionReducerMap} from '@ngrx/store';

export interface PartyplanerState {
  party: Party
}

export const reducers: ActionReducerMap<PartyplanerState> = {
  party: partyReducer
};

export function partyReducer(party: Party = new Party(), action: PartyActionsUnion): Party {
  switch (action.type) {
    case PartyActionTypes.ADD_PARTYMEMBER: {
      const personToAdd: Person = action.payload;
      if (personIsInList(party.members, personToAdd)) {
        return party
      } else {
        return ReplicationBuilder.forObject(party).modify('members').by((members) => [...members, personToAdd]).build();
      }
    }

    case PartyActionTypes.REMOVE_PARTYMEMBER:
      const personToRemove: Person = action.payload;
      if (personIsInList(party.members, personToRemove)) {
        return ReplicationBuilder.forObject(party).modify('members').by((members) => members.filter((member) => !personsAreEqual(member, personToRemove))).build();
      } else {
        return party
      }
  }

  return party;
}

