// node modules
import axios from 'axios'
import apiEndpoints from '../../../../../../config/apis'
import { getToken } from '../../../../../api/utils/authorization-token'

import {
  getProfileFailed,
  getProfileLoading,
  getProfileSuccess,
  updateProfileFailed,
  updateProfileLoading,
} from './ProfileActions'

import { updateUserSuccess } from '../../../../../actions/auth-actions'

export const getProfile = id => dispatch => {
  dispatch(getProfileLoading())
  const token = getToken()

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/users/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(getProfileSuccess(res.data))
  }).catch(error => {
    dispatch(getProfileFailed(error.data.errors))
  })
}

export const updateProfile = (user, userId) => dispatch => {
  const requestBody = {
    email: user.email,
    facebook: user.facebook,
    first_name: user.first_name,
    github: user.github,
    last_name: user.last_name,
    linkedin: user.linkedin,
    title: user.title,
    twitter: user.twitter,
  }
  const token = getToken()

  dispatch(updateProfileLoading())
  return axios({
    method: 'PATCH',
    url: `${apiEndpoints.api}/users/${userId}`,
    data: requestBody,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(updateUserSuccess(res.data))
  }).catch(error => {
    dispatch(updateProfileFailed(error.data.errors))
  })
}
