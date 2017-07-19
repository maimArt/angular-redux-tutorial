import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {Person} from '../../../model/person.type'
import {sampleNames} from './samplenames'

@Injectable()
export class FriendScoutService {

  public static DELAYMS: number = 500

  constructor() {
  }

  findFriend = (): Observable<Person> => Observable.create(function (observer) {
    setTimeout(function () {
      let randomIndex = Math.floor(Math.random() * 100)
      let newPerson = new Person(sampleNames[randomIndex].prename, sampleNames[randomIndex].surname)
      observer.next(newPerson)
    }, FriendScoutService.DELAYMS)

  })


}
