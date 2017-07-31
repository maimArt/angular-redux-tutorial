import {FriendScoutService} from './friendscout.service'
import {Observable} from 'rxjs/Observable'
import {Person} from '../../../../../model/data/person.type'
import {async} from '@angular/core/testing'

describe('FriendScoutService', () => {

  let service: FriendScoutService
  let friendObservable: Observable<Person>

  beforeEach(async(() => {
    service = new FriendScoutService()
  }))

  it('Should find friends after some time', (done) => {
    friendObservable = service.findFriend()
    friendObservable.subscribe((friend) => {
      console.info('new Friend created: ' + friend.prename + ' ' + friend.surname)
      done()
      expect(friend).toBeTruthy()
    })
  })

  it('Should occur an error when no friend can be found anymore', (done) => {
    let scoutCounter: number = 0

    let onNext = (friend) => {
      console.info('new Friend created: ' + friend.prename + ' ' + friend.surname)
      scoutCounter++
      if (scoutCounter <= FriendScoutService.SCOUT_THRESHOLD) {
        service.findFriend()
          .subscribe(onNext, onError)
      }
    }

    let onError = (error) => {
      done()
      expect(scoutCounter).toBe(FriendScoutService.SCOUT_THRESHOLD, 'There must be scouted ' + FriendScoutService.SCOUT_THRESHOLD + ' friends before error must occur')
      expect(error).toBeTruthy('Error must be thrown and must not be null')
      console.info('Error: "' + error + '" occured after ' + scoutCounter + ' friends were scouted')
    }

    service.findFriend()
      .subscribe(onNext, onError)
  })
})
