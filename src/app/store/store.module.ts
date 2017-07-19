import {NgModule} from '@angular/core'
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store'
import {InitialRootState, rootReducer, RootState} from './root.reducer'

@NgModule({
  imports: [
    NgReduxModule
  ]
})
export class StoreModule {
  constructor(store: NgRedux<RootState>,
              devTools: DevToolsExtension) {
    const middlewares = []
    const storeEnhancer = devTools.isEnabled ? [devTools.enhancer()] : []

    store.configureStore(
      rootReducer,
      new InitialRootState(),
      middlewares,
      storeEnhancer
    )
  }
}
