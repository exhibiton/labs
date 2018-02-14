import _ from 'lodash'
import {
  CREATE_CATEGORY_LOADING,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_SUCCESS,
  CATEGORIES_LOADING,
  CATEGORIES_LOADING_FAIL,
  CATEGORIES_LOADING_SUCCESS,
} from '../../actions/category-actions'

const initialState = {
  byId: [],
  byHash: {},
  isLoading: false,
}

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CATEGORY_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case CREATE_CATEGORY_FAIL:
      return {
        ...state,
        messages: {
          type: 'fail',
          reason: action.payload,
        },
        isLoading: false,
      }
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        byId: [...state.byId, action.payload.id],
        byHash: {
          ...state.byHash,
          [action.payload.id]: {
            value: action.payload.id,
            label: action.payload.name,
          },
        },
        isLoading: false,
      }

    case CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case CATEGORIES_LOADING_FAIL:
      return {
        ...state,
        messages: {
          type: 'fail',
          reason: action.payload,
        },
        isLoading: false,
      }
    case CATEGORIES_LOADING_SUCCESS:
      return {
        ...state,
        byId: _.map(action.payload, 'value'),
        byHash: _.keyBy(action.payload, 'value'),
        isLoading: false,
      }

    default:
      return state
  }
}
