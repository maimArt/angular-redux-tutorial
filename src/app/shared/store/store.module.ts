import {isDevMode, NgModule} from '@angular/core'
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store'
import {INITIAL_ROOTSTATE, rootReducer, RootState} from './root.reducer'
import {RootEpics} from './root.epics'
import {deepFreeze} from 'typescript-immutable-helper'
import {createEpicMiddleware} from 'redux-observable';

@NgModule({
  imports: [
    NgReduxModule
  ],
  providers: [RootEpics]
})
export class StoreModule {
  constructor(store: NgRedux<RootState>,
              devTools: DevToolsExtension, rootEpics: RootEpics) {
    const epicMiddleware = createEpicMiddleware();
    const middlewares = [epicMiddleware];
    const storeEnhancer = devTools.isEnabled ? [devTools.enhancer()] : [];
    const rootState = isDevMode() ? deepFreeze(INITIAL_ROOTSTATE) : INITIAL_ROOTSTATE;

    store.configureStore(
      rootReducer,
      rootState,
      middlewares,
      storeEnhancer
    )

    epicMiddleware.run(rootEpics.createRootEpic())
  }
}
