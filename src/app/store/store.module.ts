import { NgModule } from '@angular/core';
import { NgReduxModule, DevToolsExtension, NgRedux } from '@angular-redux/store';
import { initialState, rootReducer, } from './root.reducer';
import {RootState} from "./root.state";


@NgModule({
  imports: [
    NgReduxModule
  ]
})
export class StoreModule {
  constructor(
    store: NgRedux<RootState>,
    devTools: DevToolsExtension,
  ) {
    const middlewares = [];
    const storeEnhancer = devTools.isEnabled ? [devTools.enhancer()] : [];

    store.configureStore(
      rootReducer,
      initialState,
      middlewares,
      storeEnhancer
    );
  }
}
