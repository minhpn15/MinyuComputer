import axios from 'axios'
import { getToken } from './auth'

let DOMAIN = ''

if (import.meta.env.DEV) {
  DOMAIN = import.meta.env.REACT_APP_DOMAIN_TEST
} else DOMAIN = import.meta.env.REACT_APP_DOMAIN_TEST

axios.defaults.baseURL = 'https://run.mocky.io'

const request = ['get', 'post', 'put', 'delete'].reduce((result, method) => {
  result[method] = async (url, data = {}, configs = { headers: {} }) => {
    const { noAuth, ...otherConfig } = configs
    if (!noAuth) {
      const token = getToken()
      otherConfig.headers.Authorization = token
    }
    try {
      const response = await axios({
        method,
        url,
        ...data,
        ...otherConfig
      })
      return response.data
    } catch (e) {
      if (e.response) throw e.response.data
      throw e
    }
  }
  return result
}, {})

export default request
