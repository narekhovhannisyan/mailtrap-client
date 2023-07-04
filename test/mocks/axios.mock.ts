import { SendEmailParams } from '../../src/lib/typings/client.types'

class AxiosError extends Error {}

const instance = {
  post: (_endpoint: string, data: SendEmailParams) => {
    if (data.subject === 'mock-subject') {
      return Promise.resolve(true)
    }

    if (data.subject === 'not-mock-subject') {
      return Promise.reject(new AxiosError(data.subject))
    }

    return Promise.reject(new Error(data.subject))
  }
}

export default {
  create: (_axiosParams: any) => {
    return instance
  },
  isAxiosError: (error: Error) => {
    return error.message === 'not-mock-subject'
  }
}
