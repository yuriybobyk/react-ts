import React, {useEffect, useState} from 'react';
import {IPost} from "../../interfaces/post.interface";
import {postByIdService} from "../../services/postById.service";
import {useParams} from "react-router-dom";
import './Post.css';


const Post = () => {

    const {postId} = useParams()

    const [post, setPost] = useState<IPost>()

    useEffect(()=>{
        postByIdService.getById(postId).then(value => value.data).then(value => setPost(value))
    },[postId])

    return (
        <div className={'post'}>
            {post &&(
                <div>
                    <div>ID: {post.id}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export default Post;