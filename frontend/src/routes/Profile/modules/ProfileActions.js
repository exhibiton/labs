export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_LOADING = 'GET_PROFILE_LOADING'
export const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'
export const UPDATE_PROFILE_LOADING = 'UPDATE_PROFILE_LOADING'
export const UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED'

export const getProfileSuccess = payload => ({
  type: GET_PROFILE_SUCCESS,
  payload,
})

export const getProfileFailed = payload => ({
  type: GET_PROFILE_FAILED,
  payload,
})

export const getProfileLoading = () => ({
  type: GET_PROFILE_LOADING,
})

export const updateProfileSuccess = payload => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload,
})

export const updateProfileFail = payload => ({
  type: UPDATE_PROFILE_FAILED,
  payload,
})

export const updateProfileLoading = () => ({
  type: UPDATE_PROFILE_LOADING,
})
