import {createFeatureSelector, createSelector} from '@ngrx/store';
import {featureName} from './feature-definition';
import {PartyplanerState} from './reducer';

export const selectPartyplanning = createFeatureSelector<PartyplanerState>(featureName);

export const selectParty = createSelector(selectPartyplanning, (state: PartyplanerState) => state.party);

