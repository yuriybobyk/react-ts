import {axiosService, IRes} from "./axios.service";
import {IUser} from "../interfaces";
import {urls} from "../configs";


const userService = {
    getAll: () : IRes<IUser[]> => axiosService.get(urls.users),
    create: (user: IUser): IRes<IUser> => axiosService.post(urls.users, user)
}

export {userService}