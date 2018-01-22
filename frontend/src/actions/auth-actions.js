export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_LOADING = 'LOGIN_LOADING'
export const SIGN_UP = 'SIGN_UP'
export const LOGOUT = 'LOGOUT'
export const FORCE_SET_AUTH_TOKEN = 'FORCE_SET_AUTH_TOKEN'

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

export const logout = () => ({
  type: LOGOUT,
})

export const forceSetAuthToken = authToken => ({
  type: FORCE_SET_AUTH_TOKEN,
  payload: authToken,
})
