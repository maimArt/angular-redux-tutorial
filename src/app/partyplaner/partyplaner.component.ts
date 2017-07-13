import {Component, OnInit} from '@angular/core';
import {select} from "@angular-redux/store";
import {Party} from "../model/party.types";
import {Observable} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  selector: 'partyplaner',
  templateUrl: 'partyplaner.component.html'
})

export class PartyplanerComponent implements OnInit {

  @select(['partyplaner', 'party'])
  public party: Observable<Party>;

  @select(state => state.partyplaner.party.members.length)
  public count: Observable<number>

  constructor() {
  }

  ngOnInit() {
    console.log("TEST")
  }
}
