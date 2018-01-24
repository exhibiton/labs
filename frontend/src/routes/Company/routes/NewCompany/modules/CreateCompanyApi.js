// node modules
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { browserHistory } from 'react-router'

// file imports
import apiEndpoints from '../../../../../../config/apis'
import { setAuthorizationToken } from '../../../../../api/utils/authorization-token'
import { updateUser } from '../../../../../actions/auth-actions'

import {
  createCompanySuccess,
  createCompanyFail,
  createCompanyLoading,
} from './CreateCompanyActions'

export const createCompany = data => dispatch => {
  dispatch(createCompanyLoading())
  const company = data.company

  return axios({
    method: 'POST',
    url: `${apiEndpoints.api}/companies`,
    params: company,
  }).then(res => {
    const token = res.data.auth_token

    // We should set the new AuthToken because now currentUser
    // Object will have a Company created for it
    setAuthorizationToken(token)
    const user = jwt.decode(token)

    dispatch(createCompanySuccess())
    dispatch(updateUser(user))
    browserHistory.push('/company')
  }).catch(error => {
    dispatch(createCompanyFail(error))
  })
}