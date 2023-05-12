import React from 'react';
import Comments from "../../components/Comments/Comments";
import {Outlet} from "react-router-dom";

const CommentPage = () => {
    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    );
};

export default CommentPage;