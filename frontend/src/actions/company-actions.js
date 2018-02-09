export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS'
export const CREATE_COMPANY_FAIL = 'CREATE_COMPANY_FAIL'
export const CREATE_COMPANY_LOADING = 'CREATE_COMPANY_LOADING'
export const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS'
export const GET_COMPANY_FAIL = 'GET_COMPANY_FAIL'
export const GET_COMPANY_LOADING = 'GET_COMPANY_LOADING'
export const UPDATE_COMPANY_SUCCESS = 'UPDATE_COMPANY_SUCCESS'
export const UPDATE_COMPANY_FAIL = 'UPDATE_COMPANY_FAIL'
export const UPDATE_COMPANY_LOADING = 'UPDATE_COMPANY_LOADING'

export const createCompanySuccess = payload => ({
  type: CREATE_COMPANY_SUCCESS,
  payload,
})

export const createCompanyFail = () => ({
  type: CREATE_COMPANY_FAIL,
})

export const createCompanyLoading = () => ({
  type: CREATE_COMPANY_LOADING,
})

export const updateCompanySuccess = payload => ({
  type: UPDATE_COMPANY_SUCCESS,
  payload,
})

export const updateCompanyFail = () => ({
  type: UPDATE_COMPANY_FAIL,
})

export const updateCompanyLoading = () => ({
  type: UPDATE_COMPANY_LOADING,
})

export const getCompanySuccess = payload => ({
  type: GET_COMPANY_SUCCESS,
  payload,
})

export const getCompanyFail = payload => ({
  type: GET_COMPANY_FAIL,
  payload,
})

export const getCompanyLoading = () => ({
  type: GET_COMPANY_LOADING,
})
