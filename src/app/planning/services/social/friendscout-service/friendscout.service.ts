import {Injectable} from '@angular/core'
import {sampleNames} from './samplenames'
import {Person} from '../../../../../model/data/person.type'
import {Observable} from 'rxjs';

@Injectable()
export class FriendScoutService {

  public static DELAYMS = 500;
  public static SCOUT_THRESHOLD = 3;
  private scoutCounter = 0;

  constructor() {
  }

  findFriend(): Observable<Person> {
    const thisService = this;
    return Observable.create(function (observer) {
      if (thisService.scoutCounter < FriendScoutService.SCOUT_THRESHOLD) {
        thisService.incrementCounter();
        setTimeout(function () {
          const randomIndex = Math.floor(Math.random() * 100);
          const newPerson = new Person(sampleNames[randomIndex].prename, sampleNames[randomIndex].surname);
          observer.next(newPerson)
        }, FriendScoutService.DELAYMS)
      } else {
        observer.error('Sorry. Cannot find a friend anymore!')
      }
    })
  }

  incrementCounter() {
    this.scoutCounter++;
  }
}
