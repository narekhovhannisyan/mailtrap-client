import { MailtrapSDK } from '../src'

const accessToken = '<YOUR_TOKEN_HERE>'
const testInboxId = 0

const client = new MailtrapSDK({
  accessToken,
  testInboxId
})

const test = async () => {
  try {
    await client.send({
      sender: {
        email: 'sender.mock@email.com',
        name: 'sender'
      },
      recipient: {
        email: 'recipient.mock@email.com',
        name: 'recipient'
      },
      subject: 'mock-subject',
      text: 'Mock text'
    })
  } catch (error) {
    console.error(error)
  }
}
test()
