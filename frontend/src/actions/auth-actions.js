export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_LOADING = 'LOGIN_LOADING'
export const SIGN_UP = 'SIGN_UP'
export const LOGOUT = 'LOGOUT'
export const FORCE_SET_AUTH_TOKEN = 'FORCE_SET_AUTH_TOKEN'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_LOADING = 'UPDATE_USER_LOADING'
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED'

export const loginSuccess = promise => ({
  type: LOGIN_SUCCESS,
  payload: promise,
})

export const loginFail = promise => ({
  type: LOGIN_FAIL,
  payload: promise,
})

export const loginLoading = () => ({
  type: LOGIN_LOADING,
})

export const signUp = promise => ({
  type: SIGN_UP,
  payload: promise,
})

export const onLogout = () => ({
  type: LOGOUT,
})

export const updateUserSuccess = promise => ({
  type: UPDATE_USER_SUCCESS,
  payload: promise,
})
