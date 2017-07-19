import {async} from '@angular/core/testing'
import {FriendScoutService} from './friendscout.service'
import {Person} from '../../../model/person.type'
import {Observable} from 'rxjs/Observable'

describe('FriendScoutService', () => {
  let service: FriendScoutService

  beforeEach(async(() => {
    service = new FriendScoutService()
  }))

  it('should create', () => {
    expect(service).toBeTruthy()
  })

  it('should find friend', () => {

    console.info('Start')
    let friendObservable: Observable<Person>
    friendObservable = service.findFriend()

    let lastFriend: Person
    friendObservable.subscribe((friend) => {
      console.info('new Friend: ' + friend.prename + ' ' + friend.surname)
      lastFriend = friend
      expect(friend).toBeTruthy()
    })
    waits(1000)
    expect(lastFriend).toBeTruthy()

  })

})
