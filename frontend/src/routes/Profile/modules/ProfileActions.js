export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_LOADING = 'GET_PROFILE_LOADING'
export const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'
export const UPDATE_PROFILE_LOADING = 'UPDATE_PROFILE_LOADING'
export const UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED'
export const UPLOAD_PHOTO_SUCCESS = 'UPLOAD_PHOTO_SUCCESS'
export const UPLOAD_PHOTO_LOADING = 'UPLOAD_PHOTO_LOADING'
export const UPLOAD_PHOTO_FAILED = 'UPLOAD_PHOTO_FAILED'

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

export const updateProfileFailed = payload => ({
  type: UPDATE_PROFILE_FAILED,
  payload,
})

export const updateProfileLoading = () => ({
  type: UPDATE_PROFILE_LOADING,
})

export const uploadPhotoSuccess = payload => ({
  type: UPLOAD_PHOTO_SUCCESS,
  payload,
})

export const uploadPhotoFailed = payload => ({
  type: UPLOAD_PHOTO_FAILED,
  payload,
})

export const uploadPhotoLoading = () => ({
  type: UPLOAD_PHOTO_LOADING,
})
