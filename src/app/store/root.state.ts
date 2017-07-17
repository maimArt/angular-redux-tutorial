import { RouterState } from '@angular/router';
import {PartyplanerState} from "../partyplaner/model/redux/reducer";

export type RootState = {
  partyplaner: PartyplanerState,
  router?: RouterState,
}
