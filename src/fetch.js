import axios from "axios";

const _env = process.env.NODE_ENV

const baseURL = {
  development: 'http://localhost:8090/',
  production: 'http://shimuhong.com:8090/'
}[_env]

axios.defaults.baseURL = baseURL

export function get(url, params = null) {
    return new Promise((resolve, reject) => {
      return axios({
        method:'get',
        url,
        params
      }).then((ev)=> {
        resolve(ev.data)
      }).catch((err)=> {
        reject(err)
      })
    })
    
  
}
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    return axios({
      method: 'post',
      url,
      data
    }).then((ev)=> {
      resolve(ev.data)
    }).catch((err)=> {
      reject(err)
    })
  })
}