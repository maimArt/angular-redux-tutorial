import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {sampleNames} from './samplenames'
import {Person} from '../../../data/person.type'

@Injectable()
export class FriendScoutService {

  public static DELAYMS: number = 500
  public static SCOUT_THRESHOLD: number = 3
  private scoutCounter: number = 0

  constructor() {
  }

  findFriend(): Observable<Person> {
    let thisService = this;
    return Observable.create(function (observer) {
      if (thisService.scoutCounter < FriendScoutService.SCOUT_THRESHOLD) {
        thisService.incrementCounter();
        setTimeout(function () {
          let randomIndex = Math.floor(Math.random() * 100)
          let newPerson = new Person(sampleNames[randomIndex].prename, sampleNames[randomIndex].surname)
          observer.next(newPerson)
        }, FriendScoutService.DELAYMS)
      } else {
        observer.error("Sorry. Cannot find any more friend for you.")
      }
    })
  }

  incrementCounter()
  {
    this.scoutCounter++;
  }
}
