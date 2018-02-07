import _ from 'lodash'
import {
  USERS_LOADING,
  USERS_LOADING_FAIL,
  USERS_LOADING_SUCCESS,
} from '../../actions/user-actions'

const initialState = {
  byId: [],
  byHash: {},
  messages: {},
  isLoading: false,
}

export default function technologyReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case USERS_LOADING_FAIL:
      return {
        ...state,
        messages: {
          type: 'fail',
          reason: action.payload,
        },
        isLoading: false,
      }
    case USERS_LOADING_SUCCESS:
      return {
        ...state,
        byId: _.map(action.payload, 'id'),
        byHash: _.keyBy(action.payload, 'id'),
        isLoading: false,
      }
      
    default:
      return state
  }
}
