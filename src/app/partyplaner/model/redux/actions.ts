import {Injectable} from '@angular/core';
import {FluxStandardAction} from 'flux-standard-action';
import {Person} from "../../../model/party.types";

export type PartyAction = FluxStandardAction<Person, any>;

@Injectable()
export class PartyActions {
  static readonly ADD_PARTYMEMBER = "ADD_PARTYMEMBER";
  static readonly REMOVE_PARTYMEMBER = 'REMOVE_PARTYMEMBER';

  addPartymember = (person: Person): PartyAction => ({
    type: PartyActions.ADD_PARTYMEMBER,
    meta: null,
    payload: null
  });

  removePartymember = (person: Person): PartyAction => ({
    type: PartyActions.REMOVE_PARTYMEMBER,
    meta: null,
    payload: person
  });
}
