import {
  CREATE_COMPANY_FAIL,
  CREATE_COMPANY_LOADING,
  CREATE_COMPANY_SUCCESS,
} from './CreateCompanyActions'

const initialState = {
  isLoading: false,
  error: null,
  messages: {},
}

export default function createCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COMPANY_FAIL:
      return {
        ...initialState,
        messages: {
          type: 'fail',
          reason: action.reason,
        },
        isLoading: false,
      }

    case CREATE_COMPANY_LOADING:
      return {
        ...initialState,
        isLoading: true,
      }

    case CREATE_COMPANY_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
      }

    default:
      return state
  }
}
