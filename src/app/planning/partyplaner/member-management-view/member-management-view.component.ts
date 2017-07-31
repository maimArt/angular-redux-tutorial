import {Component, Input, OnInit} from '@angular/core'
import {select} from '@angular-redux/store'
import {Observable} from 'rxjs/Observable'
import {getParty} from '../../store/selectors'
import {Party} from '../../../../model/data/party.type'
import {Person} from '../../../../model/data/person.type'
import {PartyActions} from '../../store/actions'

@Component({
  moduleId: module.id,
  selector: 'member-management-view',
  templateUrl: './member-management-view.component.html',
  styleUrls: ['./member-management-view.component.css']
})

export class MemberManagementViewComponent implements OnInit {

  @select(getParty)
  public party: Observable<Party>

  @Input()
  public newPartymember: Person

  constructor(private partyActions: PartyActions) {
    this.newPartymember = new Person('', '')
  }

  ngOnInit() {
  }

  onAddMember() {
    this.partyActions.addPartymember(this.newPartymember)
    this.newPartymember = new Person('', '')
  }

  onRemoveMember(person: Person) {
    this.partyActions.removePartymember(person)
  }

  onAddScoutedFriend() {
    this.partyActions.scoutPartymember()
  }
}
