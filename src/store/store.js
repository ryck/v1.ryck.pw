import { createStore, compose, combineReducers } from 'redux'
import { ENABLE_DEV_TOOLS } from '../config'

import { menu } from '../reducers/ui/menu'

const reducers = combineReducers({
  ui: combineReducers({ menu }),
})

let composer = compose

if (ENABLE_DEV_TOOLS) {
  // Enable Redux dev tools
  /* eslint-disable */
  composer =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
      : compose
  /* eslint-enable */
}

const store = createStore(reducers, composer())

export default store
