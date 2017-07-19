import {Component, Input, OnInit} from '@angular/core'
import {select} from '@angular-redux/store'
import {Observable} from 'rxjs/Observable'
import {PartyActions} from '../../../../../store/planning/actions'
import {Party} from '../../../../../model/party.type'
import {Person} from '../../../../../model/person.type'

@Component({
  moduleId: module.id,
  selector: 'member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.css']
})

export class MemberManagementComponent implements OnInit {

  @select(['partyplaner', 'party'])
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
