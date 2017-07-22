import {Injectable} from '@angular/core'
import {PartyplanningEpics} from '../_planning/store/epics'

@Injectable()
export class RootEpics {
  constructor(private partyplanningEpics: PartyplanningEpics) {
  }

  public createEpics() {
    return [
      this.partyplanningEpics.createEpic()
    ]
  }
}
