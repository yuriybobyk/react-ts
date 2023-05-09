import React, {useEffect, useState} from 'react';
import {IUser} from "../../interfaces";
import {userService} from "../../services";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";

const Users = () => {

    const [users, setUsers]=useState<IUser[]>([])

    useEffect(()=>{
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    },[])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            {users.map(user => <User user={user} key={user.id}/> )}
        </div>
    );
};

export default Users;