// node modules
import axios from 'axios'
import { browserHistory } from 'react-router'

// file imports
import apiEndpoints from '../../../../../../config/apis'
import { getToken } from '../../../../../api/utils/authorization-token'

import {
  createCompanySuccess,
  createCompanyFail,
  createCompanyLoading,
  getTechnologiesSuccess,
  getTechnologiesFail,
  getTechnologiesLoading,
  getUsersFail,
  getUsersLoading,
  getUsersSuccess,
} from './CreateCompanyActions'

export const getUsers = data => dispatch => {
  dispatch(getUsersLoading())
  const token = getToken()

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/users`,
    params: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(getUsersSuccess(res.data))
  }).catch(error => {
    dispatch(getUsersFail(error))
  })
}

export const getUsersByTerm = term => dispatch => {
  dispatch(getUsersLoading())
  const token = getToken()

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/users/search`,
    params: { term },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(getUsersSuccess(res.data))
  }).catch(error => {
    dispatch(getUsersFail(error))
  })
}

export const getTechnologiesByTerm = term => dispatch => {
  dispatch(getTechnologiesLoading())
  const token = getToken()

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/tools/search`,
    params: { term },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(getTechnologiesSuccess(res.data))
  }).catch(error => {
    dispatch(getTechnologiesFail(error))
  })
}

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
  }).then(() => {
    // We should set the new AuthToken because now currentUser
    // Object will have a Company created for it

    dispatch(createCompanySuccess())
    browserHistory.push('/company')
  }).catch(error => {
    dispatch(createCompanyFail(error))
  })
}
