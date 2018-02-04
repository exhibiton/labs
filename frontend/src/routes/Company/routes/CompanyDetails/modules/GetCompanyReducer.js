import {
  GET_COMPANY_FAIL,
  GET_COMPANY_LOADING,
  GET_COMPANY_SUCCESS,
} from './GetCompanyActions'

const initialState = {
  isLoading: false,
  error: null,
  messages: {},
  company: {
    name: 'Placeholder',
    logo: 'Placeholder',
    users: [],
    tools: [],
  },
}

export default function getCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANY_FAIL:
      return {
        ...initialState,
        messages: {
          type: 'fail',
          reason: action.reason,
        },
        isLoading: false,
      }

    case GET_COMPANY_LOADING:
      return {
        ...initialState,
        isLoading: true,
      }

    case GET_COMPANY_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        company: action.res.data,
      }

    default:
      return state
  }
}
