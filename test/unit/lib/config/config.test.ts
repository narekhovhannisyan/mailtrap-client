import config from '../../../../src/lib/config'

describe('config: ', () => {
  describe('object: ', () => {
    it('should have property expected properties.', () => {
      const expectedProperties = ['MAILTRAP']

      expectedProperties.forEach((property) => {
        expect(config).toHaveProperty(property)
      })
    })

    it('should check for `MAILTRAP` properties.', () => {
      const expectedProperties = ['API_BASE', 'ENDPOINTS']

      expectedProperties.forEach((property) => {
        expect(config.MAILTRAP).toHaveProperty(property)
      })
    })

    it('should check `MAILTRAP` send endpoint.', () => {
      const testInboxId = 0 // mock value

      const expectedType = 'string'
      const result = config.MAILTRAP.ENDPOINTS.SEND(testInboxId)
      expect(typeof result).toBe(expectedType)

      const split = result.split('/')
      const inboxIdFromResult = parseInt(split[split.length - 1])
      expect(inboxIdFromResult).toBe(testInboxId)
    })
  })
})
