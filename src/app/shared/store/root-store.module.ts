import {InjectionToken, NgModule} from '@angular/core'
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {RootState} from './root.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../../environments/environment';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<RootState>>('Registered Reducers');

export function getReducers(): ActionReducerMap<RootState> {
  return {};
}

@NgModule({
  imports: [
    StoreModule.forRoot(REDUCER_TOKEN),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [{
    provide: REDUCER_TOKEN,
    useFactory: getReducers,
  }]
})
export class RootStoreModule {
}
