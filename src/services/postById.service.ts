import {AxiosResponse} from "axios";
import {IPost} from "../interfaces/post.interface";
import {axiosService} from "./axios.service";
import {urls} from "../configs";

type IRes<T> = Promise<AxiosResponse<T>>

const postByIdService = {
   getById: (id:string): IRes<IPost> => axiosService.get(urls.posts.getById(id))
}

export {
    postByIdService
}

export type {
    IRes
}