import axios, {AxiosResponse} from "axios";
import {baseURL} from "../configs";

type IRes<T> = Promise<AxiosResponse<T>>

const axiosService = axios.create({baseURL})

export {axiosService}

export type {
    IRes
}