import axios from 'axios'
import _ from 'lodash'
import apiEndpoints from '../../../../config/apis'
import { getToken } from '../../../api/utils/authorization-token'

export const GET_COMPANIES_LOADING = 'GET_COMPANIES_LOADING'
export const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS'
export const GET_COMPANIES_FAIL = 'GET_COMPANIES_FAIL'
export const SELECTED_TAG_ID_LIST = 'SELECTED_TAG_ID_LIST'

const initialState = {
  byId: [],
  byHash: {},
  isLoading: false,
  selectedTagIdList: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES_SUCCESS:
      return {
        ...state,
        byId: _.map(action.payload, 'id'),
        byHash: _.keyBy(action.payload, 'id'),
        isLoading: false,
      }
    case SELECTED_TAG_ID_LIST:
      return {
        ...state,
        selectedTagIdList: action.payload,
      }
    default:
      return state;
  }
}

const getCompaniesLoading = () => ({
  type: GET_COMPANIES_LOADING,
})
const getCompaniesSuccess = payload => ({
  type: GET_COMPANIES_SUCCESS,
  payload,
})
const getCompaniesFail = payload => ({
  type: GET_COMPANIES_FAIL,
  payload,
})

export const selectTagIdList = payload => ({
  type: SELECTED_TAG_ID_LIST,
  payload,
})

export function getCompanies() {
  return dispatch => {
    const token = getToken()

    dispatch(getCompaniesLoading());
    axios({
      method: 'GET',
      url: `${apiEndpoints.api}/companies`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        dispatch(getCompaniesSuccess(res.data))
      })
      .catch(e => {
        dispatch(getCompaniesFail(e))
      })
  }
}

export const getCompaniesByTechnologies = technologyIds => dispatch => {
  const token = getToken()

  dispatch(getCompaniesLoading());
  axios({
    method: 'GET',
    url: `${apiEndpoints.api}/companies/filter`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { tools: technologyIds },
  })
    .then(res => {
      dispatch(getCompaniesSuccess(res.data))
    })
    .catch(e => {
      dispatch(getCompaniesFail(e))
    })
}


