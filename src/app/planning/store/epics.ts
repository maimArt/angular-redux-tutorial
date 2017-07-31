import {Injectable} from '@angular/core'
import {FriendScoutService} from '../services/social/friendscout-service/friendscout.service'
import {PartyAction, PartyActions} from './actions'
import {createEpicMiddleware, Epic} from 'redux-observable'
import {PartyplanerState} from './reducer'
import 'rxjs/add/operator/catch'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of'

@Injectable()
export class PartyplanningEpics {
  constructor(private service: FriendScoutService, private partyActions: PartyActions) {
  }

  public createEpic() {
    return createEpicMiddleware(this.createAddScoutedFriendEpic())
  }

  private createAddScoutedFriendEpic(): Epic<PartyAction, PartyplanerState> {
    return (action$, store) => action$
      .ofType(PartyActions.SCOUT_PARTYMEMBER)
      .switchMap(() => this.service.findFriend())
      .map(person => this.partyActions.addPartymember(person))
      .catch((error) => {
        console.error(error);
        return null;
      })
  }
}
