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
  CATEGORIES_LOADING,
  CATEGORIES_LOADING_FAILED,
  CATEGORIES_LOADING_SUCCESS,
  SELECT_CATEGORIES,
} from './CreateCompanyActions'

const initialState = {
  isLoading: false,
  error: null,
  messages: {},
  categories: {},
  selectedCategories: [],
  technologies: {},
  selectedTechnologies: {},
  selectedUsers: {},
  users: {},
}

export default function createCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
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

    case GET_TECHNOLOGIES_SUCCESS:
      return {
        ...state,
        technologies: action.payload,
        isLoading: false,
      }

    case GET_TECHNOLOGIES_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case GET_TECHNOLOGIES_FAIL:
      return {
        ...state,
        isLoading: false,
        messages: {
          type: 'fail',
          reason: action.payload,
        },
      }


    case SELECT_CATEGORIES:
      return {
        ...state,
        selectedCategories: action.payload,
      }

    case CATEGORIES_LOADING_FAILED:
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
        categories: action.payload,
        isLoading: false,
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
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
