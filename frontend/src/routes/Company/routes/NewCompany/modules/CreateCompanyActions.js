export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS'
export const CREATE_COMPANY_FAIL = 'CREATE_COMPANY_FAIL'
export const CREATE_COMPANY_LOADING = 'CREATE_COMPANY_LOADING'

export const createCompanySuccess = () => ({
  type: CREATE_COMPANY_SUCCESS,
})

export const createCompanyFail = () => ({
  type: CREATE_COMPANY_FAIL,
})

export const createCompanyLoading = () => ({
  type: CREATE_COMPANY_LOADING,
})
