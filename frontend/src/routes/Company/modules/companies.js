import axios from 'axios'
import apiEndpoints from '../../../../config/apis'
import { getToken } from '../../../api/utils/authorization-token'

export const GET_COMPANIES_LOADING = 'GET_COMPANIES_LOADING'
export const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS'
export const GET_COMPANIES_FAIL = 'GET_COMPANIES_FAIL'

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_COMPANIES_SUCCESS:
      return [...action.res.data];
    default:
      return state;
  }
}

const getCompaniesLoading = () => ({
  type: GET_COMPANIES_LOADING,
})
const getCompaniesSuccess = res => ({
  type: GET_COMPANIES_SUCCESS,
  res,
})
const getCompaniesFail = () => ({
  type: GET_COMPANIES_FAIL,
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
        dispatch(getCompaniesSuccess(res));
      })
      .catch(() => {
        dispatch(getCompaniesFail());
      })
    ;
  };
}


