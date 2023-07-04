type CustomErrors = {
  'MailtrapAPIError': ErrorConstructor
}

const ERRORS_LIST = ['MailtrapAPIError']

export const ERRORS = ERRORS_LIST.reduce((acc, className) => {
  acc = {
    ...acc,
    [className]: class extends Error {
      constructor (message: string) {
        super(message)
        this.name = this.constructor.name
      }
    }
  }

  return acc
}, {}) as CustomErrors
