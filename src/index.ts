import axios, { AxiosInstance, AxiosResponse } from 'axios'

import config from './lib/config'

import { ERRORS } from './lib/utils/errors.util'

import { CreateMailtrapInstanceParams, SendEmailParams } from './lib/typings/client.types'
import { flattenEmailData } from './lib/utils/flatten-email.util'

const { MAILTRAP } = config
const { API_BASE, ENDPOINTS } = MAILTRAP

const { MailtrapAPIError } = ERRORS

/**
 * Mailtrap SDK for sending email over Mailtrap Testing API.
 */
export class MailtrapSDK {
  private MailtrapInstance: AxiosInstance
  private testInboxId: number

  constructor (params: CreateMailtrapInstanceParams) {
    this.MailtrapInstance = axios.create({
      baseURL: API_BASE,
      headers: {
        'Authorization': `Bearer ${params.accessToken}`
      }
    })
    this.testInboxId = params.testInboxId
  }

  /**
   * Sends email with given `params` which include recipient, sender, subject, text, etc.
   */
  public async send (params: SendEmailParams) {
    const data = flattenEmailData(params)
    const endpoint = ENDPOINTS.SEND(this.testInboxId)

    try {
      return this.MailtrapInstance.post<AxiosResponse>(endpoint, data)
    } catch (error: unknown) {
      console.error(error)

      if (axios.isAxiosError(error)) {
        throw new MailtrapAPIError(error.message)
      }

      throw error
    }
  }
}
