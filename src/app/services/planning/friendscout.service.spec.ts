import {FriendScoutService} from './friendscout.service'
import {Person} from '../../model/person.type'
import {Observable} from 'rxjs/Observable'

describe('FriendScoutService', () => {
  let service: FriendScoutService

  let lastFriend: Person = null;

  beforeEach((done) => {
    service = new FriendScoutService();
    let friendObservable: Observable<Person>
    friendObservable = service.findFriend();
    console.info('Service invoked');

    friendObservable.subscribe((friend) => {
      console.info('new Friend created: ' + friend.prename + ' ' + friend.surname);
      lastFriend = friend;
      done();
    });
  });

  it('should find friend', (done) => {
    console.info('Test starts');
    expect(lastFriend).toBeTruthy();
    done();
  })

})
