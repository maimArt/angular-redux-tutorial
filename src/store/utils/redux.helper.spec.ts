import {INITIAL_ROOTSTATE, RootState} from '../root.reducer'
import {Person} from '../../model/data/person.type'
import {Cursor} from './objectcursor'
import ClonedObjectCursor = Cursor.ClonedObjectCursor

describe('Traversable', () => {



  it('Should work', () => {
    let rootState = INITIAL_ROOTSTATE;

    //rootState.partyplaner.party.members = [];
    var nextPersons:Array<Person> = [new Person("kljl","test")];
    let manipulatedRoot = new ClonedObjectCursor(rootState).to("partyplaner").to("party").to("members").set(nextPersons).getObject();

  })
})
