import { TUserPrivate } from '@/types/entity/user'

export type TLoginResponse = TUserPrivate

export type TLoginRequest = {
  username: string
  password: string
}
