import {AxiosResponse} from "axios";
import {ITodo} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../configs";

type IRes<T>= Promise<AxiosResponse<T>>



const todoService = {
    getAll: (): IRes<ITodo[]> => axiosService.get(urls.todos)
}

export {
    todoService
}

export type {
    IRes
}