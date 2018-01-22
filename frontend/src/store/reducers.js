import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

import locationReducer from './location'
import authReducer from './reducers/auth-reducer'

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    location: locationReducer,
    form: reduxFormReducer,
    auth: authReducer,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
