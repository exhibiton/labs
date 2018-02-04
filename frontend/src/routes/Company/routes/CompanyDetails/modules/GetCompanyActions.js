export const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS'
export const GET_COMPANY_FAIL = 'GET_COMPANY_FAIL'
export const GET_COMPANY_LOADING = 'GET_COMPANY_LOADING'

export const getCompanySuccess = res => ({
  type: GET_COMPANY_SUCCESS,
  res,
})

export const getCompanyFail = () => ({
  type: GET_COMPANY_FAIL,
})

export const getCompanyLoading = () => ({
  type: GET_COMPANY_LOADING,
})
