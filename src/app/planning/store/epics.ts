import {Injectable} from '@angular/core'
import {FriendScoutService} from '../services/social/friendscout-service/friendscout.service'
import {PartyAction, PartyActions} from './actions'
import {combineEpics, createEpicMiddleware, Epic, ofType} from 'redux-observable'
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

@Injectable()
export class PartyplanningEpics {
  constructor(private service: FriendScoutService, private partyActions: PartyActions) {
  }

  public createEpic() {
    return combineEpics(this.createAddScoutedFriendEpic());
  }

  public createAddScoutedFriendEpic(): Epic<PartyAction> {
    return (action$, state$) => action$.pipe(
      ofType(PartyActions.SCOUT_PARTYMEMBER),
      switchMap(() =>
        this.service.findFriend().pipe(
          map(person => this.partyActions.addPartymember(person)),
          catchError((error) => {
            console.error(error);
            return of({type: 'ERROR-ACTION'});
          }))
      ));
  }

}
