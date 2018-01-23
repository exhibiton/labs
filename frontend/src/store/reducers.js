import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

import locationReducer from './location'
import authReducer from './reducers/auth-reducer'
import companiesReducer from '../routes/Company/modules/companies'

export const makeRootReducer = asyncReducers => combineReducers({
  location: locationReducer,
  form: reduxFormReducer,
  auth: authReducer,
  companies: companiesReducer,
  ...asyncReducers,
})

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
