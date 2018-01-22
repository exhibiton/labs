import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
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
        ...initialState,
        currentUser: action.payload,
        isSignedIn: true,
        messages: {
          type: 'success',
          message: 'messages.login.success',
        },
      }

    case LOGIN_LOADING:
      return {
        ...initialState,
        isSigningIn: true,
      }

    case LOGIN_FAIL:
      return {
        ...initialState,
        messages: {
          type: 'fail',
          reason: action.reason,
        },
      }

    default:
      return state
  }
}
