import { IUserAPI } from "./IUser"

export interface AuthResponse {
    accessToken: string
    refreshToken: string
    user: IUserAPI
}
