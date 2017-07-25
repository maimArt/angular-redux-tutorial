import {RootState} from '../root.reducer'
import {InitialPartyplanerState} from '../party/reducer'
import {Traversable} from './redux.helper'
import {Party} from '../../model/data/party.type'
import {Person} from '../../model/data/person.type'

describe('Traversable', () => {



  it('Should work', () => {
    let rootState:RootState = {
      partyplaner: new InitialPartyplanerState()
    }

    let traversable:Traversable<RootState> = new Traversable(rootState);
    let child = traversable.child('partyplaner').toChild('party');
    child.clone().addMember(new Person("Horst", "Horsti"));
    let nextState = traversable.get();
  })
})
