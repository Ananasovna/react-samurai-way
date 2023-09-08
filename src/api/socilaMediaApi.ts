import axios, {AxiosResponse} from "axios";
import {UserType} from "../redux/types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '5fc11a34-7258-4926-8c00-91db4f940cfd'
    }
})

export const authAPI = {
    me() {
        return instance.get<ResponseType<AuthDataType>, AxiosResponse<ResponseType<AuthDataType>>>('auth/me');
    },

}

export const usersAPI = {
    get(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType, AxiosResponse<GetUsersResponseType>>(`users?page=${currentPage}&count=${pageSize}`);
    },

    follow(userId: string) {
        return instance.post<ResponseType, AxiosResponse<ResponseType>>(`follow/${userId}`);
    },

    unfollow(userId: string) {
        return instance.delete<ResponseType, AxiosResponse<ResponseType>>(`follow/${userId}`);
    },
}

export type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export type AuthDataType = {
    id: number
    email: string
    login: string
}

export type GetUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}