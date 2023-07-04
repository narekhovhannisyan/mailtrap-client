type MailCredentials = {
  email: string,
  name: string
}

type Attachment = {
  filename: string;
  content: string | Buffer;
  type?: 'text/plain' | 'text/html';
  disposition?: 'inline' | 'attachment';
  content_id?: string;
};

export type SendEmailParams = {
  sender: MailCredentials,
  recipient: MailCredentials,
  subject: string,
  text?: string,
  html?: string,
  attachments?: Array<Attachment>
}

export type CreateMailtrapInstanceParams = {
  accessToken: string,
  testInboxId: number
}
