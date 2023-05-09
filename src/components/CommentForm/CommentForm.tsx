import React, {FC} from 'react';
import {IUseState} from "../../types/useState.type";
import {IComment} from "../../interfaces";
import {SubmitHandler, useForm} from "react-hook-form";
import {commentService} from "../../services/comment.service";

interface IProps {
    setComments: IUseState<IComment[]>
}

const CommentForm: FC<IProps> = ({setComments}) => {

    const {register, reset, handleSubmit} = useForm<IComment>()

    const save:SubmitHandler<IComment> = async (comment)=>{

        const {data} = await commentService.create(comment);
        setComments(prev => [...prev, data])
        reset()

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export default CommentForm;