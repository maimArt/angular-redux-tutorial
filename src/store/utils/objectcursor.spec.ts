import {INITIAL_ROOTSTATE} from '../root.reducer'
import {Person} from '../../model/data/person.type'
import {Cursor} from './objectcursor'
import ClonedObjectCursor = Cursor.ClonedObjectCursor

describe('ObjectCursor', () => {

  it('ClonedObjectCursor: Inputstate must not be modified, output must be modified', () => {
    let rootState = INITIAL_ROOTSTATE;
    let newPerson = new Person("Test", "Person");
    let manipulatedRoot = new ClonedObjectCursor(rootState).to("partyplaner").to("party").to("members").set([newPerson]).getObject();

    expect(rootState.partyplaner.party.members.length).toBe(0);
    expect(manipulatedRoot.partyplaner.party.members).toContain(newPerson);
  })
})
