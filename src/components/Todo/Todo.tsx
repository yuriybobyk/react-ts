import React, {FC} from 'react';
import {ITodo} from "../../interfaces";
import './Todo.css';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

interface IProps{
    todo: ITodo
}

const Todo: FC<IProps> = ({todo}) => {

    const {title, completed} = todo;

    return (
        <div className={'todo'}>
            <div>Title: {title}</div>
            <div className={'status'}>Status: {completed ? <DoneOutlineIcon color={"success"}/>   : <DoNotDisturbOnIcon color={"error"}/>}</div>
        </div>
    );
};

export default Todo;