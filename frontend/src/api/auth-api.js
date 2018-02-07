import axios from 'axios'
import apiEndpoints from '../../config/apis'
import { destroyToken, setAuthorizationToken } from './utils/authorization-token'
import jwt from 'jsonwebtoken'
import { browserHistory } from 'react-router'

import {
  loginLoading,
  loginSuccess,
  loginFail,
  onLogout,
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
    browserHistory.push('/company')
  }).catch(error => {
    dispatch(loginFail(error))
  })
}

export const logout = () => dispatch => {
  destroyToken()
  dispatch(onLogout())
  browserHistory.push('/auth')
}
