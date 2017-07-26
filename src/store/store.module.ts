import {isDevMode, NgModule} from '@angular/core'
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store'
import {INITIAL_ROOTSTATE, rootReducer, RootState} from './root.reducer'
import {RootEpics} from './root.epics'
import {deepFreeze} from './utils/redux.helper'

@NgModule({
  imports: [
    NgReduxModule
  ],
  providers: [RootEpics]
})
export class StoreModule {
  constructor(store: NgRedux<RootState>,
              devTools: DevToolsExtension, rootEpics: RootEpics) {
    const middlewares = [...rootEpics.createEpics()]
    const storeEnhancer = devTools.isEnabled ? [devTools.enhancer()] : [];
    const rootState = isDevMode()? deepFreeze(INITIAL_ROOTSTATE) : INITIAL_ROOTSTATE;

    store.configureStore(
      rootReducer,
      rootState,
      middlewares,
      storeEnhancer
    )
  }
}
