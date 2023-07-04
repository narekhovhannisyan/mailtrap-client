import { flattenEmailData } from '../../../../src/lib/utils/flatten-email.util'

describe('utils/flatten-email: ', () => {
  describe('flattenEmailData(): ', () => {
    it('Should have all properties in case if called with all properties', () => {
      const emailData = {
        sender: {
          email: 'sender.mock@email.com',
          name: 'sender'
        },
        recipient: {
          email: 'recipient.mock@email.com',
          name: 'recipient'
        },
        subject: 'mock-subject',
        text: 'mock-text',
        html: 'mock-html',
        attachments: [{
          filename: 'mock-filename',
          content: 'mock-content'
        }]
      }

      const mailtrapCompatibleData = flattenEmailData(emailData)
      const expectedTo = 'to'
      const expectedFrom = 'from'
      const expectedSubject = 'subject'
      const expectedText = 'text'
      const expectedHTML = 'html'
      const expectedAttachments = 'attachments'

      expect(mailtrapCompatibleData).toHaveProperty(expectedTo)
      expect(mailtrapCompatibleData).toHaveProperty(expectedFrom)
      expect(mailtrapCompatibleData).toHaveProperty(expectedSubject)
      expect(mailtrapCompatibleData).toHaveProperty(expectedText)
      expect(mailtrapCompatibleData).toHaveProperty(expectedHTML)
      expect(mailtrapCompatibleData).toHaveProperty(expectedAttachments)

      expect(mailtrapCompatibleData.from.email).toBe(emailData.sender.email)
      expect(mailtrapCompatibleData.from.name).toBe(emailData.sender.name)

      expect(mailtrapCompatibleData.to[0].email).toBe(emailData.recipient.email)
      expect(mailtrapCompatibleData.to[0].name).toBe(emailData.recipient.name)

      expect(mailtrapCompatibleData.html).toBe(emailData.html)
      expect(mailtrapCompatibleData.text).toBe(emailData.text)
      expect(mailtrapCompatibleData.subject).toBe(emailData.subject)
      expect(mailtrapCompatibleData.attachments).toBe(emailData.attachments)
    })

    it('Should miss properties which are not provided.', () => {
      const emailData = {
        sender: {
          email: 'sender.mock@email.com',
          name: 'sender'
        },
        recipient: {
          email: 'recipient.mock@email.com',
          name: 'recipient'
        },
        subject: 'mock-subject',
        text: 'mock-text'
      }

      const mailtrapCompatibleData = flattenEmailData(emailData)
      const expectedTo = 'to'
      const expectedFrom = 'from'
      const expectedSubject = 'subject'
      const expectedText = 'text'

      expect(mailtrapCompatibleData).toHaveProperty(expectedTo)
      expect(mailtrapCompatibleData).toHaveProperty(expectedFrom)
      expect(mailtrapCompatibleData).toHaveProperty(expectedSubject)
      expect(mailtrapCompatibleData).toHaveProperty(expectedText)
      expect(mailtrapCompatibleData.html).toBeUndefined()
      expect(mailtrapCompatibleData.attachments).toBeUndefined()
    })
  })
})
