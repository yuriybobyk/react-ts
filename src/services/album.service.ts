import {AxiosResponse} from "axios";
import {IAlbum} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../configs";

type IRes<T> = Promise<AxiosResponse<T>>

const albumService = {
    getAll:(): IRes<IAlbum[]> => axiosService.get(urls.albums)
}

export {albumService}

export type {
    IRes
}