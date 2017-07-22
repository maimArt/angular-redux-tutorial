import {Injectable} from '@angular/core'
import {PartyplanningEpics} from './party/epics'

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
