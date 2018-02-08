import {
  CREATE_COMPANY_LOADING,
  CREATE_COMPANY_FAIL,
  CREATE_COMPANY_SUCCESS,
  GET_COMPANY_LOADING,
  GET_COMPANY_FAIL,
  GET_COMPANY_SUCCESS,
  UPDATE_COMPANY_FAIL,
  UPDATE_COMPANY_LOADING,
  UPDATE_COMPANY_SUCCESS,
} from '../../actions/company-actions'

const initialState = {
  data: {},
  messages: {},
  isLoading: false,
}

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COMPANY_LOADING:
    case UPDATE_COMPANY_LOADING:
    case GET_COMPANY_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case UPDATE_COMPANY_FAIL:
    case CREATE_COMPANY_FAIL:
    case GET_COMPANY_FAIL:
      return {
        ...state,
        messages: {
          type: 'fail',
          reason: action.payload,
        },
        isLoading: false,
      }
    case CREATE_COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case UPDATE_COMPANY_SUCCESS:
    case GET_COMPANY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }

    default:
      return state
  }
}
