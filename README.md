# mailtrap-sdk

SDK client for Mailtrap. Here is link to API documentation [Mailtrap](https://api-docs.mailtrap.io/docs/mailtrap-api-docs/5tjdeg9545058-mailtrap-api)

## Usage example:

### Install

```
npm i mailtrap-sdk
```

### Code

```ts
import { MailtrapSDK } from 'mailtrap-sdk'

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

```

 # Table of Contents

* [Contributing](doc/CONTRIBUTING.md)
* [Install](doc/INSTALL.md)
* [Test](doc/TEST.md)
  * [Test Scripts](doc/TEST.md#test-scripts)
