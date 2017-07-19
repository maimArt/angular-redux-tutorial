import {NgModule} from '@angular/core'
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store'
import {InitialRootState, rootReducer, RootState} from './root.reducer'
import {RootEpics} from './root.epics'

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
    const storeEnhancer = devTools.isEnabled ? [devTools.enhancer()] : []

    store.configureStore(
      rootReducer,
      new InitialRootState(),
      middlewares,
      storeEnhancer
    )
  }
}
