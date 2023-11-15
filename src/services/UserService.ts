import { AxiosResponse } from "axios"
import $api from "../http"
import { IUserAPI } from "../models/response/IUser"

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUserAPI[]>> {
        return $api.get<IUserAPI[]>("/api/users")
    }
}
