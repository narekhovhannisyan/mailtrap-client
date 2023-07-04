import { SendEmailParams } from '../typings/client.types'

/**
 * Converts given send email data object to Mailtrap format.
 */
export const flattenEmailData = (params: SendEmailParams) => {
  const { sender, recipient, subject, text, html, attachments } = params

  return {
    to: [
      {
        email: recipient.email,
        name: recipient.name
      }
    ],
    from: {
      email: sender.email,
      name: sender.name
    },
    subject,
    ...text && { text },
    ...attachments && { attachments },
    ...html && { html }
  }
}
