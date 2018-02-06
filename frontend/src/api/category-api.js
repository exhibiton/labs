import axios from 'axios'
import apiEndpoints from '../../config/apis'
import { getToken } from './utils/authorization-token'
import {
  categoriesLoading,
  categoriesLoadingFail,
  categoriesLoadingSuccess,
  createCategoryLoading,
  createCategoryFail,
  createCategorySuccess
} from '../actions/category-actions'

export const getCategories = data => dispatch => {
  dispatch(categoriesLoading())
  const token = getToken()
  
  return axios({
    method: 'GET',
    url: `${apiEndpoints.api}/categories/select_options`,
    params: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    dispatch(categoriesLoadingSuccess(res.data))
  }).catch(error => {
    dispatch(categoriesLoadingFail(error))
  })
}

export const createCategory = data => dispatch => {
  dispatch(createCategoryLoading())
  const token = getToken()
  
  return axios({
    method: 'POST',
    url: `${apiEndpoints.api}/categories`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: data,
  }).then(() => {
    dispatch(createCategorySuccess())
  }).catch(error => {
    dispatch(createCategoryFail(error))
  })
}