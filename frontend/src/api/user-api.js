import axios from 'axios'
import apiEndpoints from '../../config/apis'
import { getToken } from './utils/authorization-token'
import {
  usersLoading,
  usersLoadingFail,
  usersLoadingSuccess,
} from '../actions/user-actions'

export const getUsers = data => dispatch => {
  dispatch(usersLoading())
  const token = getToken()

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/users`,
    params: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(usersLoadingSuccess(res.data))
  }).catch(error => {
    dispatch(usersLoadingFail(error))
  })
}

export const getUsersByTerm = term => dispatch => {
  dispatch(usersLoading())
  const token = getToken()

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/users/search`,
    params: { term },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(usersLoadingSuccess(res.data))
  }).catch(error => {
    dispatch(usersLoadingFail(error))
  })
}
