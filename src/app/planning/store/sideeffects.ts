import {Injectable} from '@angular/core';
import {FriendScoutService} from '../services/social/friendscout-service/friendscout.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/internal/Observable';
import {Action} from '@ngrx/store';
import {AddPartyMember, PartyActionTypes} from './actions';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class PartyplanningSideEffects {

  @Effect()
  scout$: Observable<Action> = this.action$.pipe(
    ofType(PartyActionTypes.SCOUT_PARTYMEMBER),
    switchMap(() =>
      this.service.findFriend().pipe(
        map(person => new AddPartyMember(person)),
        catchError((error) => {
          console.error(error);
          this.snackBar.open('Error while finding friend', error, {duration: 5000});
          return of({type: 'ERROR-ACTION'});
        }))
    ));

  constructor(private service: FriendScoutService, private action$: Actions, private snackBar: MatSnackBar) {
  }

}
