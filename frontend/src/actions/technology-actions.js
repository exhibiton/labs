export const CREATE_TECHNOLOGY_SUCCESS = 'CREATE_TECHNOLOGY_SUCCESS'
export const CREATE_TECHNOLOGY_FAIL = 'CREATE_TECHNOLOGY_FAIL'
export const CREATE_TECHNOLOGY_LOADING = 'CREATE_TECHNOLOGY_LOADING'
export const TECHNOLOGIES_LOADING = 'TECHNOLOGIES_LOADING'
export const TECHNOLOGIES_LOADING_FAIL = 'TECHNOLOGIES_LOADING_FAIL'
export const TECHNOLOGIES_LOADING_SUCCESS = 'TECHNOLOGIES_LOADING_SUCCESS'

export const createTechnologySuccess = promise => ({
  type: CREATE_TECHNOLOGY_SUCCESS,
  payload: promise,
})

export const createTechnologyFail = () => ({
  type: CREATE_TECHNOLOGY_FAIL,
})

export const createTechnologyLoading = () => ({
  type: CREATE_TECHNOLOGY_LOADING,
})

export const technologiesLoadingSuccess = payload => ({
  type: TECHNOLOGIES_LOADING_SUCCESS,
  payload,
})

export const technologiesLoadingFail = () => ({
  type: TECHNOLOGIES_LOADING_FAIL,
})

export const technologiesLoading = () => ({
  type: TECHNOLOGIES_LOADING,
})
