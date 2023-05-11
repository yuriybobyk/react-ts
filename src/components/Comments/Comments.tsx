import React, {useEffect, useState} from 'react';
import {IComment} from "../../interfaces";
import {commentService} from "../../services/comment.service";
import Comment from "../Comment/Comment";




const Comments = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(()=>{
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    },[])

    return (
        <div>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default Comments;