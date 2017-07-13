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
  public readonly party: Observable<Party>;

  constructor() {
  }

  ngOnInit() {
  }
}
