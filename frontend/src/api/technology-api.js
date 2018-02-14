import axios from 'axios'
import { hide as hideModal } from 'redux-modal'
import apiEndpoints from '../../config/apis'
import { getToken } from './utils/authorization-token'
import {
  technologiesLoading,
  technologiesLoadingFail,
  technologiesLoadingSuccess,
  createTechnologyLoading,
  createTechnologyFail,
  createTechnologySuccess,
  getTechnologiesByTermFail,
  getTechnologiesByTermLoading,
  getTechnologiesByTermSuccess,
} from '../actions/technology-actions'

export const getTechnologies = () => dispatch => {
  dispatch(technologiesLoading())
  const token = getToken()

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/tools`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(technologiesLoadingSuccess(res.data))
  }).catch(error => {
    dispatch(technologiesLoadingFail(error))
  })
}

export const createTechnology = data => dispatch => {
  dispatch(createTechnologyLoading())
  const token = getToken()

  return axios({
    method: 'POST',
    url: `${apiEndpoints.api}/tools`,
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data,
  }).then(res => {
    dispatch(createTechnologySuccess(res.data))
    dispatch(hideModal('defaultModal'))
  }).catch(error => {
    dispatch(createTechnologyFail(error))
  })
}

export const getTechnologiesByTerm = term => dispatch => {
  dispatch(getTechnologiesByTermLoading())
  const token = getToken()

  if (!term) return dispatch(getTechnologiesByTermSuccess([]))

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/tools/search`,
    params: { term },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(getTechnologiesByTermSuccess(res.data))
  }).catch(error => {
    dispatch(getTechnologiesByTermFail(error))
  })
}
