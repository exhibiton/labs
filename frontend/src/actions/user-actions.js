export const USERS_LOADING = 'USERS_LOADING'
export const USERS_LOADING_FAIL = 'USERS_LOADING_FAIL'
export const USERS_LOADING_SUCCESS = 'USERS_LOADING_SUCCESS'

export const usersLoadingSuccess = payload => ({
  type: USERS_LOADING_SUCCESS,
  payload,
})

export const usersLoadingFail = () => ({
  type: USERS_LOADING_FAIL,
})

export const usersLoading = () => ({
  type: USERS_LOADING,
})
