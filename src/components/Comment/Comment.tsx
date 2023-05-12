import React, {FC} from 'react';
import {IComment} from "../../interfaces";
import './Comment.css';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";


interface IProps{
    comment: IComment
}

const Comment : FC<IProps> = ({comment}) => {

    const navigate = useNavigate();

    const {name, email, body, postId} = comment;

    return (
        <div className={'comment'} >
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <Button variant={"contained"} onClick={()=>navigate(`${postId}`)}>To Post</Button>
        </div>
    );
};

export default Comment;