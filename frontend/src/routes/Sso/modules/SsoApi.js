import axios from 'axios'
import apiEndpoints from '../../../../config/apis'
import { getToken } from '../../../api/utils/authorization-token';


export const ssoLogin = (sig, sso, userId) => {
  const token = getToken()

  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/discourse/sso`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      sso,
      sig,
      userId,
    },
  }).then(res => {
    window.location.href = `${res.data}`
  })
}
