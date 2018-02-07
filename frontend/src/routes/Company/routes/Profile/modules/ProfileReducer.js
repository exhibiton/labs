import {
  GET_PROFILE_FAILED,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_LOADING,
} from './ProfileActions'

const initialState = {
  error: null,
  isLoading: false,
  messages: {},
  user: {},
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_FAILED:
      return {
        ...state,
        messages: {
          type: 'fail',
          reason: action.payload,
        },
      }
    case GET_PROFILE_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      }

    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        messages: {
          type: 'fail',
          reason: action.payload,
        },
      }

    case UPDATE_PROFILE_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    default:
      return state
  }
}
