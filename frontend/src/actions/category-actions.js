export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS'
export const CREATE_CATEGORY_FAIL = 'CREATE_CATEGORY_FAIL'
export const CREATE_CATEGORY_LOADING = 'CREATE_CATEGORY_LOADING'
export const CATEGORIES_LOADING = 'CATEGORIES_LOADING'
export const CATEGORIES_LOADING_FAIL = 'CATEGORIES_LOADING_FAIL'
export const CATEGORIES_LOADING_SUCCESS = 'CATEGORIES_LOADING_SUCCESS'

export const createCategorySuccess = promise => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload: promise,
})

export const createCategoryFail = () => ({
  type: CREATE_CATEGORY_FAIL,
})

export const createCategoryLoading = () => ({
  type: CREATE_CATEGORY_LOADING,
})

export const categoriesLoadingSuccess = payload => ({
  type: CATEGORIES_LOADING_SUCCESS,
  payload,
})

export const categoriesLoadingFail = () => ({
  type: CATEGORIES_LOADING_FAIL,
})

export const categoriesLoading = () => ({
  type: CATEGORIES_LOADING,
})
