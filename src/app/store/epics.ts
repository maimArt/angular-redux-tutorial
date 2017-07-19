import {Injectable} from '@angular/core';
import {PartyplanningEpics} from './planning/epics'

@Injectable()
export class RootEpics {
    constructor(private partyplanningEpics: PartyplanningEpics) {
    }

    public createEpics() {
        return [
            this.partyplanningEpics.createEpic()
        ];

    }
}
