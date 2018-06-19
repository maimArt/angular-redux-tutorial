import {Injectable} from '@angular/core'
import {dispatch} from '@angular-redux/store'
import {Person} from '../../../model/data/person.type'
import {Action} from '../../shared/store/root.action'

export interface PartyAction extends Action<Person> {}

@Injectable()
export class PartyActions {
  static readonly ADD_PARTYMEMBER = 'ADD_PARTYMEMBER';
  static readonly REMOVE_PARTYMEMBER = 'REMOVE_PARTYMEMBER';
  static readonly SCOUT_PARTYMEMBER = 'SCOUT_PARTYMEMBER';

  @dispatch()
  addPartymember = (person: Person): PartyAction => ({
    type: PartyActions.ADD_PARTYMEMBER,
    payload: person
  });

  @dispatch()
  removePartymember = (person: Person): PartyAction => ({
    type: PartyActions.REMOVE_PARTYMEMBER,
    payload: person
  });

  @dispatch()
  scoutPartymember = (): PartyAction => ({
    type: PartyActions.SCOUT_PARTYMEMBER,
    payload: null
  })
}
