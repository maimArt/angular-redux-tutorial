import { RouterState } from '@angular/router';
import {PartyplanerState} from "../partyplaner/model/redux/partyplaner.types";

export type RootState = {
  partyplaner: PartyplanerState,
  router?: RouterState,
}
