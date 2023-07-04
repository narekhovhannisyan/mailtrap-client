export default {
  MAILTRAP: {
    API_BASE: 'https://sandbox.api.mailtrap.io/api',
    ENDPOINTS: {
      SEND: (testInboxId: number) => `/send/${testInboxId}`
    }
  }
}
