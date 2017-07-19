import {FriendScoutService} from './friendscout.service'
import {Observable} from 'rxjs/Observable'
import {Person} from '../../../model/person.type'

describe('FriendScoutService', () => {
  let service: FriendScoutService

  let lastFriend: Person = null

  beforeEach((done) => {
    service = new FriendScoutService()
    let friendObservable: Observable<Person>
    friendObservable = service.findFriend()
    console.info('Service invoked')

    friendObservable.subscribe((friend) => {
      console.info('new Friend created: ' + friend.prename + ' ' + friend.surname)
      lastFriend = friend
      done()
    })
  })

  it('should find friends after some time', (done) => {
    console.info('Test starts')
    expect(lastFriend).toBeTruthy()
    done()
  })

})
