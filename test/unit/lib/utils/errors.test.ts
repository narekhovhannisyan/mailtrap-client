import { ERRORS } from '../../../../src/lib/utils/errors.util'

describe('util/errors: ', () => {
  describe('ERRORS: ', () => {
    it('should be object', () => {
      expect(typeof ERRORS).toBe('object')
    })

    it('should contain valid error instance.', () => {
      const { MailtrapAPIError } = ERRORS
      const message = 'mock-message'

      const ErrorInstance = new MailtrapAPIError(message)

      expect(ErrorInstance).toBeInstanceOf(Error)
      expect(ErrorInstance.name).toBe(MailtrapAPIError.name)
      expect(ErrorInstance.message).toBe(message)
    })
  })
})
