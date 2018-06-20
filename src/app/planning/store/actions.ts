import {Person} from '../../../model/data/person.type'
import {Action} from '@ngrx/store';


export enum PartyActionTypes {
  ADD_PARTYMEMBER = 'ADD_PARTYMEMBER',
  REMOVE_PARTYMEMBER = 'REMOVE_PARTYMEMBER',
  SCOUT_PARTYMEMBER = 'SCOUT_PARTYMEMBER'
}

export class AddPartyMember implements Action {
  readonly type = PartyActionTypes.ADD_PARTYMEMBER;

  constructor(public payload: Person) {
  }
}

export class RemovePartyMember implements Action {
  readonly type = PartyActionTypes.REMOVE_PARTYMEMBER;

  constructor(public payload: Person) {
  }
}

export class ScoutPartyMember implements Action {
  readonly type = PartyActionTypes.SCOUT_PARTYMEMBER;
}

export type PartyActionsUnion = AddPartyMember | RemovePartyMember | ScoutPartyMember;

