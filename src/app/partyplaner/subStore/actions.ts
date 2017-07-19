import {Injectable} from '@angular/core'
import {FluxStandardAction} from 'flux-standard-action'
import {dispatch} from '@angular-redux/store'
import {Person} from '../../model/person.type'

export type PartyAction = FluxStandardAction<Person, any>;

@Injectable()
export class PartyActions {
  static readonly ADD_PARTYMEMBER = 'ADD_PARTYMEMBER'
  static readonly REMOVE_PARTYMEMBER = 'REMOVE_PARTYMEMBER'

  @dispatch()
  addPartymember = (person: Person): PartyAction => ({
    type: PartyActions.ADD_PARTYMEMBER,
    meta: null,
    payload: person
  })

  @dispatch()
  removePartymember = (person: Person): PartyAction => ({
    type: PartyActions.REMOVE_PARTYMEMBER,
    meta: null,
    payload: person
  })
}
