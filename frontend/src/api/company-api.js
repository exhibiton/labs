import axios from 'axios'
import { browserHistory } from 'react-router'
import apiEndpoints from '../../config/apis'
import { getToken } from './utils/authorization-token'
import {
  createCompanyFail,
  createCompanyLoading,
  createCompanySuccess,
  getCompanyFail,
  getCompanyLoading,
  getCompanySuccess,
} from '../actions/company-actions'

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
