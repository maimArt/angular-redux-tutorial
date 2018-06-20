import {Component, Input, OnInit} from '@angular/core'
import {Party} from '../../../../model/data/party.type'
import {Person} from '../../../../model/data/person.type'
import {Observable} from 'rxjs/internal/Observable';
import {select, Store} from '@ngrx/store';
import {AddPartyMember, RemovePartyMember, ScoutPartyMember} from '../../store/actions';
import {RootState} from '../../../shared/store/root.reducer';
import {selectParty} from '../../store/selectors';

@Component({
  moduleId: module.id,
  selector: 'member-management-view',
  templateUrl: './member-management-view.component.html',
  styleUrls: ['./member-management-view.component.css']
})

export class MemberManagementViewComponent implements OnInit {

  public party$: Observable<Party>;

  @Input()
  public newPartymember: Person;

  constructor(private store: Store<RootState>) {
    this.party$ = store.pipe(select(selectParty));
    this.newPartymember = new Person('', '')
  }

  ngOnInit() {
  }

  onAddMember() {
    this.store.dispatch(new AddPartyMember(this.newPartymember));
    this.newPartymember = new Person('', '')
  }

  onRemoveMember(person: Person) {
    this.store.dispatch(new RemovePartyMember(person));
  }

  onAddScoutedFriend() {
    this.store.dispatch(new ScoutPartyMember());
  }
}
