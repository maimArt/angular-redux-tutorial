import {RootState} from '../root.reducer'
import {Party} from '../../model/data/party.type'
import {PartyplanerState} from './reducer'

function getPartyplanerState(rootState: RootState): PartyplanerState {
  return rootState.partyplaner;
}

export function getParty(rootState: RootState): Party {
  return getPartyplanerState(rootState).party;
}
