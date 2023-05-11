import React, {FC} from 'react';
import {ITodo} from "../../interfaces";

interface IProps{
    todo: ITodo
}

const Todo: FC<IProps> = ({todo}) => {

    const {title, completed} = todo;

    return (
        <div>
            <div>Title: {title}</div>
            <div>Status: {completed ? 'Completed' : 'Not Completed'}</div>
        </div>
    );
};

export default Todo;