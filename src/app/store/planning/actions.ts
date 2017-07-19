import {Injectable} from '@angular/core'
import {dispatch} from '@angular-redux/store'
import {Person} from '../../model/person.type'
import {Action} from '../../utils/redux.helper'

export class PartyAction implements Action<Person>{
  type: string | symbol
  payload: Person
}

@Injectable()
export class PartyActions {
  static readonly ADD_PARTYMEMBER = 'ADD_PARTYMEMBER'
  static readonly REMOVE_PARTYMEMBER = 'REMOVE_PARTYMEMBER'

  @dispatch()
  addPartymember = (person: Person): PartyAction => ({
    type: PartyActions.ADD_PARTYMEMBER,
    payload: person
  })

  @dispatch()
  removePartymember = (person: Person): PartyAction => ({
    type: PartyActions.REMOVE_PARTYMEMBER,
    payload: person
  })
}
