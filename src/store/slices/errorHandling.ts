import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'

const errorMap: { [key: string]: string } = {
  'Network request failed':
    'خطای شبکه، لطفا اتصال خود را به اینترنت بررسی کنید و یا بعدا تلاش کنید',
}

const showError = (messageKey: string) => {
  const message = errorMap[messageKey] ?? 'خطایی رخ داده است'
  console.error(message)
}

export const rtkQueryErrorHandling: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    try {
      const errorMessageObject = action.payload.message
      const isUnauthorizedError = errorMessageObject.toLowerCase().startsWith('unauthorized')
      if (isUnauthorizedError) {
        next(authSlice.actions.logout())
        return
      }
      const errorMessage = errorMessageObject.split(' ')[0].replace('errors.', '').replace(':', '')
      showError(errorMessage)
    } catch (e) {
      showError((e as Error).message)
    }
  } else if (action.error) {
    showError(action.error.message)
  }
  return next(action)
}
