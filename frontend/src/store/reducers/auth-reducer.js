import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER_SUCCESS,
} from '../../actions/auth-actions'

const initialState = {
  currentUser: {},
  isSignedIn: false,
  isSigningIn: false,
  error: null,
  messages: {},
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isSignedIn: true,
        messages: {
          type: 'success',
          message: 'messages.login.success',
        },
      }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      }

    case LOGIN_LOADING:
      return {
        ...state,
        isSigningIn: true,
      }

    case LOGOUT:
      return {
        ...state,
        currentUser: {},
        isSignedIn: false,
      }

    case LOGIN_FAIL:
      return {
        ...state,
        messages: {
          type: 'fail',
          reason: action.reason,
        },
      }

    default:
      return state
  }
}
