import axios from 'axios'
import { message } from 'ant-design-vue/es'
import { notification } from 'antd'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 600000 // 请求超时时间
})

// 请求失败处理函数
const onRejected = (error) => {
  if (error.response) {
    const data = error.response.data
    if(error.response.status === 400) {
      return Promise.resolve(data)
    }
    if (error.response.status !== 401) {
      if(error.response.status === 403){
        notification.error({
          message: 'Forbidden',
          description: data.message
        })
        error.resolved = true
      }
    }
    if (error.response.status === 401) {
      notification.error({
        message: 'Unauthorized',
        description: '登录过期'
      })
      error.resolved = true
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {

  // token
  // const token = store.getters.token
  // const token = '********';
  // Authorization 请求头不存在再进行追加
  // if (token && !headers['Authorization']) {
  //   headers['Authorization'] = 'Bearer ' + token // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }


  return config
}, onRejected)

// response interceptor
service.interceptors.response.use((response) => {
  const headers = response.headers
  if (headers != null && headers['content-type'] && headers['content-type'].startsWith('application/json')) {
    return response.data
  } else {
    return response
  }
}, onRejected)



// 判断是否请求成功
export function checkRequestSuccess (res) {
  return res.code === 200
}

// 默认的响应处理器
const defaultResponseHandler = {
  // 判断是否请求成功
  checkRequestSuccess: checkRequestSuccess,
  // 成功消息提示
  successMessage: true,
  // 成功时的处理函数
  onSuccess (res) {
  },
  // 失败消息提示
  failMessage: true,
  // 失败时的处理函数
  onFail (res) {
  },
  // 错误消息提示
  errorMessage: true,
  // 错误时的处理函数
  onError (e) {
  },
  // 最终的执行函数
  onFinally () {
  }
}

/**
 * 请求方法封装
 * @param request promise
 * @param userResponseHandler 用户设置的 userResponseHandler
 */
export function doRequest (request, userResponseHandler) {
  const handler = Object.assign({}, defaultResponseHandler, userResponseHandler)
  request.then(res => {
    if (handler.checkRequestSuccess(res)) {
      handler.successMessage && message.success(res.message)
      handler.onSuccess(res)
    } else {
      handler.failMessage && message.error(res.message)
      handler.onFail(res)
    }
  }).catch((e) => {
    // 未被 axios拦截器处理过，则在这里继续处理
    handler.errorMessage && !e.resolved && message.error(e.message || 'error request')
    handler.onError(e)
  }).finally(() => {
      handler.onFinally()
    }
  )
}


export default service