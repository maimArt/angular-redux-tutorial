import {Component, Input, OnInit} from '@angular/core';
import {select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";
import {PartyActions} from "./model/redux/actions";
import {Party} from "../model/party.type";
import {Person} from "../model/person.type";

@Component({
  moduleId: module.id,
  selector: 'partyplaner',
  templateUrl: 'partyplaner.component.html',
  styleUrls: ['./partyplaner.component.css']
})

export class PartyplanerComponent implements OnInit {

  @select(['partyplaner','party'])
  public party: Observable<Party>;

  @Input()
  public newPartymember: Person;

  constructor(private partyActions: PartyActions) {
    this.newPartymember = new Person("","");
  }

  ngOnInit() {
  }

  onAddMember(){
    this.partyActions.addPartymember(this.newPartymember);
    this.newPartymember = new Person("","");
  }

  onRemoveMember(person: Person) {
    this.partyActions.removePartymember(person);
  }
}
