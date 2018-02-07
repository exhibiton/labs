import _ from 'lodash'
import {
  CREATE_COMPANY_FAIL,
  CREATE_COMPANY_LOADING,
  CREATE_COMPANY_SUCCESS,
  GET_TECHNOLOGIES_SUCCESS,
  GET_TECHNOLOGIES_FAIL,
  GET_TECHNOLOGIES_LOADING,
  GET_USERS_FAIL,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  SELECT_CATEGORIES,
  SELECT_USER,
  DESELECT_USER,
  SELECT_TECHNOLOGY,
  DESELECT_TECHNOLOGY,
} from './CreateCompanyActions'

const initialState = {
  isLoading: false,
  error: null,
  messages: {},
  selectedCategories: [],
  selectedTechnologies: {
    byId: [],
    byHash: {},
  },
  selectedUsers: {
    byId: [],
    byHash: {},
  },
  users: {
    byId: [],
    byHash: {},
  },
}

export default function createCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: {
          byId: _.map(action.payload, 'id'),
          byHash: _.keyBy(action.payload, 'id'),
        },
        isLoading: false,
      }

    case SELECT_USER:
      return {
        ...state,
        selectedUsers: {
          byId: [...state.selectedUsers.byId, action.id],
          byHash: {
            ...state.selectedUsers.byHash,
            [action.id]: action.payload,
          },
        },
      }

    case DESELECT_USER:
      delete state.selectedUsers.byHash[action.id]

      return {
        ...state,
        selectedUsers: {
          byId: state.selectedUsers.byId.filter(item => item !== action.id),
          byHash: state.selectedUsers.byHash,
        },
      }

    case GET_USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case GET_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        messages: {
          type: 'fail',
          reason: action.payload,
        },
      }

    case SELECT_TECHNOLOGY:
      return {
        ...state,
        selectedTechnologies: {
          byId: [...state.selectedTechnologies.byId, action.id],
          byHash: {
            ...state.selectedTechnologies.byHash,
            [action.id]: action.payload,
          },
        },
      }

    case DESELECT_TECHNOLOGY:
      delete state.selectedTechnologies.byHash[action.id]

      return {
        ...state,
        selectedTechnologies: {
          byId: state.selectedTechnologies.byId.filter(item => item !== action.id),
          byHash: state.selectedTechnologies.byHash,
        },
      }

    case SELECT_CATEGORIES:
      return {
        ...state,
        selectedCategories: action.payload,
      }

    case CREATE_COMPANY_FAIL:
      return {
        ...state,
        messages: {
          type: 'fail',
          reason: action.reason,
        },
        isLoading: false,
      }

    case CREATE_COMPANY_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case CREATE_COMPANY_SUCCESS:
      return state

    default:
      return state
  }
}
