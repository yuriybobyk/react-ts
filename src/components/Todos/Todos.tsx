import React, {useEffect, useState} from 'react';
import {ITodo} from "../../interfaces";
import {todoService} from "../../services";
import Todo from "../Todo/Todo";

const Todos = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(()=>{
        todoService.getAll().then(value => value.data).then(value => setTodos(value))
    },[])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;