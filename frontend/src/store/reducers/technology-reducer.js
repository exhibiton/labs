import _ from 'lodash'
import {
  CREATE_TECHNOLOGY_LOADING,
  CREATE_TECHNOLOGY_FAIL,
  CREATE_TECHNOLOGY_SUCCESS,
  TECHNOLOGIES_LOADING,
  TECHNOLOGIES_LOADING_FAIL,
  TECHNOLOGIES_LOADING_SUCCESS,
  GET_TECHNOLOGIES_BY_TERM_LOADING,
  GET_TECHNOLOGIES_BY_TERM_FAIL,
  GET_TECHNOLOGIES_BY_TERM_SUCCESS,
} from '../../actions/technology-actions'

const initialState = {
  byId: [],
  byHash: {},
  byTerm: [],
  isLoading: false,
}

export default function technologyReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TECHNOLOGY_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case CREATE_TECHNOLOGY_FAIL:
      return {
        ...state,
        messages: {
          type: 'fail',
          reason: action.payload,
        },
        isLoading: false,
      }
    case CREATE_TECHNOLOGY_SUCCESS:
      return {
        ...state,
        byId: [...state.byId, action.payload.id],
        byHash: {
          ...state.byHash,
          [action.payload.id]: action.payload,
        },
        isLoading: false,
      }

    case TECHNOLOGIES_LOADING:
    case GET_TECHNOLOGIES_BY_TERM_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case TECHNOLOGIES_LOADING_FAIL:
    case GET_TECHNOLOGIES_BY_TERM_FAIL:
      return {
        ...state,
        messages: {
          type: 'fail',
          reason: action.payload,
        },
        isLoading: false,
      }
    case TECHNOLOGIES_LOADING_SUCCESS:
      return {
        ...state,
        byId: _.map(action.payload, 'id'),
        byHash: _.keyBy(action.payload, 'id'),
        isLoading: false,
      }
    case GET_TECHNOLOGIES_BY_TERM_SUCCESS:
      return {
        ...state,
        byTerm: _.map(action.payload, 'id'),
        isLoading: false,
      }

    default:
      return state
  }
}
