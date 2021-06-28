import axios from "axios";

const _env = process.env.NODE_ENV

const baseURL = {
  development: 'http://localhost:8090/',
  production: 'http://shimuhong.com:8090/'
}[_env]

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {},
  accessToken: null
});


export function get(url, params = null) {
    return new Promise((resolve, reject) => {
      return instance({
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
    return instance({
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