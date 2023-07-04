import axios, { AxiosError } from 'axios'
import { MailtrapSDK } from '../../src'
import { ERRORS } from '../../src/lib/utils/errors.util'

jest.mock('axios', () => require('../mocks/axios.mock'))

const { MailtrapAPIError } = ERRORS

describe('MailtrapSDK: ', () => {
  const accessToken = 'mock-accessToken'
  const testInboxId = 0
  const instance = new MailtrapSDK({
    accessToken,
    testInboxId
  })

  describe('contructor: ', () => {
    it('should successfully create instance.', () => {
      const expectedProperty = 'send'
      const expectedPropertyType = 'function'

      expect(instance).toHaveProperty(expectedProperty)
      expect(typeof instance[expectedProperty]).toBe(expectedPropertyType)
    })
  })

  describe('send(): ', () => {
    it('should be successfully executed.', async () => {
      try {
        const response = await instance.send({
          recipient: {
            name: 'mock-name',
            email: 'mock.recipient@email'
          },
          sender: {
            name: 'mock-name',
            email: 'mock.sender@email'
          },
          subject: 'mock-subject'
        })

        expect(response).toBeTruthy()
      } catch (error) {
        console.error(error)
      }
    })

    it('should reject with Mailtrap error.', async () => {
      const subject = 'not-mock-subject'

      try {
        await instance.send({
          recipient: {
            name: 'mock-name',
            email: 'mock.recipient@email'
          },
          sender: {
            name: 'mock-name',
            email: 'mock.sender@email'
          },
          subject
        })
      } catch (error) {
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(Error)
          expect(error).toBeInstanceOf(MailtrapAPIError)

          expect(error.message).toBe(subject)
        }
      }
    })

    it('should reject with Axios error.', async () => {
      const subject = 'axios-mock-subject'

      try {
        await instance.send({
          recipient: {
            name: 'mock-name',
            email: 'mock.recipient@email'
          },
          sender: {
            name: 'mock-name',
            email: 'mock.sender@email'
          },
          subject
        })
      } catch (error) {
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(Error)

          expect(error.message).toBe(subject)
        }
      }
    })
  })
})
