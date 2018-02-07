import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { reducer as modal } from 'redux-modal'

import locationReducer from './location'
import authReducer from './reducers/auth-reducer'
import categoryReducer from './reducers/category-reducer'
import technologyReducer from './reducers/technology-reducer'
import companyReducer from './reducers/company-reducer'
import userReducer from './reducers/user-reducer'

export const makeRootReducer = asyncReducers => combineReducers({
  location: locationReducer,
  form: reduxFormReducer,
  auth: authReducer,
  categories: categoryReducer,
  technologies: technologyReducer,
  users: userReducer,
  company: companyReducer,
  modal,
  ...asyncReducers,
})

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
