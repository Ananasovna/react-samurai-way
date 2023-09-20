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

export const ProfileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType, AxiosResponse<ProfileType>>('profile/' + userId);
    },

    getStatus(userId: string) {
        return instance.get<string, AxiosResponse<string>>('profile/status/' + userId);
    },

    updateStatus(status: string) {
        return instance.put<ResponseType, AxiosResponse<ResponseType>>('profile/status/', {status});
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


export type Contacts = {
  facebook?: string;
  website?: string;
  vk?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
  mainLink?: string;
}

export interface Photos {
  small: string;
  large: string;
}

export type ProfileType = {
  aboutMe?: string;
  contacts: Contacts;
  lookingForAJob: boolean;
  lookingForAJobDescription?: string;
  fullName: string;
  userId: number;
  photos: Photos;
}