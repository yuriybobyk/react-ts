import React, {FC} from 'react';
import {IComment} from "../../interfaces";

interface IProps{
    comment: IComment
}

const Comment : FC<IProps> = ({comment}) => {

    const {name, email, body} = comment;

    return (
        <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Comment;