import axios from 'axios'
import apiEndpoints from '../../config/apis'
import setAuthorizationToken from './utils/authorization-token'
import jwt from 'jsonwebtoken'

import {
  loginLoading,
  loginSuccess,
  loginFail,
} from '../actions/auth-actions'

export const login = data => dispatch => {
  dispatch(loginLoading())

  return axios({
    method: 'POST',
    url: `${apiEndpoints.api}/authenticate`,
    params: data,
  }).then(res => {
    const token = res.data.auth_token

    setAuthorizationToken(token)
    const user = jwt.decode(token)

    dispatch(loginSuccess(user))
  }).catch(error => {
    dispatch(loginFail(error))
  })
}
