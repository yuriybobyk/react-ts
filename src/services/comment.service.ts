import {AxiosResponse} from "axios";
import {IComment} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../configs";

type IRes<T> = Promise<AxiosResponse<T>>

const commentService = {
    getAll:():IRes<IComment[]> => axiosService.get(urls.comments)
}

export {
    commentService
}

export type {
    IRes
}