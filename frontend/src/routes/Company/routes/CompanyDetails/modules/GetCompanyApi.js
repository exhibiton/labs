// node modules
import axios from 'axios'
import apiEndpoints from '../../../../../../config/apis'
import { getToken } from '../../../../../api/utils/authorization-token'

import {
  getCompanySuccess,
  getCompanyFail,
  getCompanyLoading,
} from './GetCompanyActions'

export const getCompany = id => dispatch => {
  const token = getToken()

  dispatch(getCompanyLoading())

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}companies/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(getCompanySuccess(res))
  }).catch(error => {
    dispatch(getCompanyFail(error))
  })
}
