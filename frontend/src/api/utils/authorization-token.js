import axios from 'axios'

export function setAuthorizationToken(token) {
  if (token) {
    localStorage.setItem('authToken', token)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  else {
    localStorage.removeItem('authToken')
    delete axios.defaults.headers.common.Authorization
  }
}

export const destroyToken = () => setAuthorizationToken(null)

export const getToken = () => localStorage.getItem('authToken')
