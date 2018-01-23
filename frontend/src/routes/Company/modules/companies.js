import axios from 'axios'
import apiEndpoints from '../../../../config/apis'
import {getToken} from '../../../api/utils/authorization-token'

export const GET_COMPANIES_LOADING = 'GET_COMPANIES_LOADING'
export const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS'
export const GET_COMPANIES_FAIL = 'GET_COMPANIES_FAIL'

export default function reducer(state={}, action) {
  switch (action.type) {
    case GET_COMPANIES_SUCCESS:
      return {...state, companies: action.res.data};
    default:
      return state;
  }
}

export function getCompanies() {
  return (dispatch) => {
    const token = getToken()
    dispatch({type: GET_COMPANIES_LOADING});
    axios({
      method: 'GET', 
      url: `${apiEndpoints.api}companies`,
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(res => {
        dispatch({type: GET_COMPANIES_SUCCESS, res});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: GET_COMPANIES_FAIL, err});
      })
    ;
  };
}


