import axios from 'axios'
import { browserHistory } from 'react-router'
import jwt from 'jsonwebtoken'
import apiEndpoints from '../../config/apis'
import {
  createCompanyFail,
  createCompanyLoading,
  createCompanySuccess,
  getCompanyFail,
  getCompanyLoading,
  getCompanySuccess,
} from '../actions/company-actions'
import { updateUserSuccess } from '../actions/auth-actions'
import { setAuthorizationToken, getToken } from './utils/authorization-token'

export const createCompany = data => dispatch => {
  dispatch(createCompanyLoading())
  const token = getToken()

  return axios({
    method: 'POST',
    url: `${apiEndpoints.api}/companies`,
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data,
  }).then(res => {
    const token = res.data.auth_token

    setAuthorizationToken(token)
    const user = jwt.decode(token)

    dispatch(createCompanySuccess())
    dispatch(updateUserSuccess(user))
    browserHistory.push('/company')
  }).catch(error => {
    dispatch(createCompanyFail(error))
  })
}

export const updateCompany = (id, data) => dispatch => {
  dispatch(createCompanyLoading())
  const token = getToken()

  return axios({
    method: 'PUT',
    url: `${apiEndpoints.api}/companies/${id}`,
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data,
  }).then(() => {
    dispatch(createCompanySuccess())
  }).catch(error => {
    dispatch(createCompanyFail(error))
  })
}

export const getCompany = id => dispatch => {
  const token = getToken()

  dispatch(getCompanyLoading())

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/companies/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(getCompanySuccess(res.data))
  }).catch(error => {
    dispatch(getCompanyFail(error))
  })
}
