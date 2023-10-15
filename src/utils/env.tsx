export type TAppEnv = {
  API_BASE_URL: () => string
  REDUX_TOOLKIT_IS_DEBUGGING: () => boolean
}

export const env: TAppEnv = {
  API_BASE_URL: () => process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
  REDUX_TOOLKIT_IS_DEBUGGING: () =>
    process.env.NEXT_PUBLIC_REDUX_TOOLKIT_IS_DEBUGGING
      ? process.env.NEXT_PUBLIC_REDUX_TOOLKIT_IS_DEBUGGING.toLowerCase() === 'true'
      : false,
}
