import axios from 'axios'
import jwt from 'jsonwebtoken'
import { hide as hideModal } from 'redux-modal'
import apiEndpoints from '../../../../config/apis'
import { getToken, setAuthorizationToken } from '../../../api/utils/authorization-token'
import { updateUserSuccess } from '../../../actions/auth-actions'
import {
  getProfileFailed,
  getProfileLoading,
  getProfileSuccess,
  updateProfileFailed,
  updateProfileLoading,
  uploadPhotoFailed,
  uploadPhotoSuccess,
  uploadPhotoLoading,
} from './ProfileActions'

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

export const updatePassword = params => (dispatch, getState) => {
  const token = getToken()
  const store = getState()

  dispatch(updateProfileLoading())
  return axios({
    method: 'PATCH',
    url: `${apiEndpoints.api}/users/${store.auth.currentUser.id}`,
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const newToken = res.data.auth_token

    setAuthorizationToken(newToken)
    const user = jwt.decode(newToken)

    dispatch(updateUserSuccess(user))
    dispatch(hideModal('defaultModal'))
  }).catch(error => {
    dispatch(updateProfileFailed(error.data.errors))
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
    const newToken = res.data.auth_token

    setAuthorizationToken(newToken)
    const user = jwt.decode(newToken)

    dispatch(updateUserSuccess(user))
  }).catch(error => {
    dispatch(updateProfileFailed(error.data.errors))
  })
}

export const uploadPhoto = avatar => dispatch => {
  dispatch(uploadPhotoLoading())
  const token = getToken()

  return axios({
    method: 'PATCH',
    url: `${apiEndpoints.api}/users/upload_photo`,
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data: avatar,
  }).then(res => {
    const token = res.data.auth_token

    setAuthorizationToken(token)
    const user = jwt.decode(token)

    dispatch(uploadPhotoSuccess())
    dispatch(hideModal('defaultModal'))
    // TODO: Add to response full user info with avatar to avoid second request `getProfile`
    dispatch(getProfile(user.id))
  }).catch(error => {
    dispatch(uploadPhotoFailed(error.data.errors))
  })
}
