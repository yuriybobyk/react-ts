import {axiosService, IRes} from "./axios.service";
import {IComment} from "../interfaces";
import {urls} from "../configs";

const commentService = {
    getAll: (): IRes<IComment[]> => axiosService.get(urls.comments),
    create: (comment: IComment): IRes<IComment> => axiosService.post(urls.comments, comment)
}

export {
    commentService
}