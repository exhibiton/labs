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
  createTechnologySuccess
} from '../actions/technology-actions'

export const getTechnologies = data => dispatch => {
  dispatch(technologiesLoading())
  const token = getToken()
  
  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/tools`,
    params: data,
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
    try {
      dispatch(createTechnologySuccess(res.data))
      dispatch(hideModal('defaultModal'))
    } catch (e) {
      console.log(e)
    }
  }).catch(error => {
    dispatch(createTechnologyFail(error))
  })
}