export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS'
export const CREATE_COMPANY_FAIL = 'CREATE_COMPANY_FAIL'
export const CREATE_COMPANY_LOADING = 'CREATE_COMPANY_LOADING'
export const CATEGORIES_LOADING = 'CATEGORIES_LOADING'
export const CATEGORIES_LOADING_SUCCESS = 'CATEGORIES_LOADING_SUCCESS'
export const CATEGORIES_LOADING_FAILED = 'CATEGORIES_LOADING_FAILED'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAIL = 'GET_USERS_FAIL'
export const GET_USERS_LOADING = 'GET_USERS_LOADING'
export const GET_TECHNOLOGIES_SUCCESS = 'GET_TECHNOLOGIES_SUCCESS'
export const GET_TECHNOLOGIES_FAIL = 'GET_TECHNOLOGIES_FAIL'
export const GET_TECHNOLOGIES_LOADING = 'GET_TECHNOLOGIES_LOADING'
export const SELECT_CATEGORIES = 'SELECT_CATEGORIES'
export const SELECT_USER = 'SELECT_USER'
export const DESELECT_USER = 'DESELECT_USER'
export const SELECT_TECHNOLOGY = 'SELECT_TECHNOLOGY'
export const DESELECT_TECHNOLOGY = 'DESELECT_TECHNOLOGY'
export const CLEAR_SELECTED_TECHNOLOGIES = 'CLEAR_SELECTED_TECHNOLOGIES'
export const CLEAR_SELECTED_USERS = 'CLEAR_SELETED_USERS'
export const CLEAR_SELECTED_CATEGORIES = 'CLEAR_SELECTED_CATEGORIES'

export const createCompanySuccess = () => ({
  type: CREATE_COMPANY_SUCCESS,
})

export const createCompanyFail = promise => ({
  type: CREATE_COMPANY_FAIL,
  payload: promise,
})

export const createCompanyLoading = () => ({
  type: CREATE_COMPANY_LOADING,
})

export const categoriesLoadingSuccess = payload => ({
  type: CATEGORIES_LOADING_SUCCESS,
  payload,
})

export const categoriesLoadingFailed = () => ({
  type: CATEGORIES_LOADING_FAILED,
})

export const categoriesLoading = () => ({
  type: CATEGORIES_LOADING,
})

export const selectCategories = promise => ({
  type: SELECT_CATEGORIES,
  payload: promise,
})

export const getUsersSuccess = promise => ({
  type: GET_USERS_SUCCESS,
  payload: promise,
})

export const getUsersLoading = () => ({
  type: GET_USERS_LOADING,
})

export const getUsersFail = promise => ({
  type: GET_USERS_FAIL,
  payload: promise,
})

export const selectUser = (id, payload) => ({
  type: SELECT_USER,
  id,
  payload
})

export const deselectUser = id => ({
  type: DESELECT_USER,
  id
})

export const selectTechnology = (id, payload) => ({
  type: SELECT_TECHNOLOGY,
  id,
  payload
})

export const deselectTechnology = id => ({
  type: DESELECT_TECHNOLOGY,
  id
})

export const getTechnologiesSuccess = promise => ({
  type: GET_TECHNOLOGIES_SUCCESS,
  payload: promise,
})

export const getTechnologiesFail = promise => ({
  type: GET_TECHNOLOGIES_FAIL,
  payload: promise,
})

export const getTechnologiesLoading = () => ({
  type: GET_TECHNOLOGIES_LOADING,
})

export const clearSelectedTechnologies = () => ({
  type: CLEAR_SELECTED_TECHNOLOGIES,
})

export const clearSelectedUsers = () => ({
  type: CLEAR_SELECTED_USERS,
})

export const clearSelectedCategories = () => ({
  type: CLEAR_SELECTED_CATEGORIES,
})
