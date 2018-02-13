export const CREATE_TECHNOLOGY_SUCCESS = 'CREATE_TECHNOLOGY_SUCCESS'
export const CREATE_TECHNOLOGY_FAIL = 'CREATE_TECHNOLOGY_FAIL'
export const CREATE_TECHNOLOGY_LOADING = 'CREATE_TECHNOLOGY_LOADING'
export const TECHNOLOGIES_LOADING = 'TECHNOLOGIES_LOADING'
export const TECHNOLOGIES_LOADING_FAIL = 'TECHNOLOGIES_LOADING_FAIL'
export const TECHNOLOGIES_LOADING_SUCCESS = 'TECHNOLOGIES_LOADING_SUCCESS'
export const GET_TECHNOLOGIES_BY_TERM_LOADING = 'GET_TECHNOLOGIES_BY_TERM_LOADING'
export const GET_TECHNOLOGIES_BY_TERM_FAIL = 'GET_TECHNOLOGIES_BY_TERM_FAIL'
export const GET_TECHNOLOGIES_BY_TERM_SUCCESS = 'GET_TECHNOLOGIES_BY_TERM_SUCCESS'

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

export const technologiesLoadingFail = payload => ({
  type: TECHNOLOGIES_LOADING_FAIL,
  payload,
})

export const technologiesLoading = () => ({
  type: TECHNOLOGIES_LOADING,
})

export const getTechnologiesByTermLoading = () => ({
  type: GET_TECHNOLOGIES_BY_TERM_LOADING,
})

export const getTechnologiesByTermFail = payload => ({
  type: GET_TECHNOLOGIES_BY_TERM_FAIL,
  payload,
})

export const getTechnologiesByTermSuccess = payload => ({
  type: GET_TECHNOLOGIES_BY_TERM_SUCCESS,
  payload,
})
