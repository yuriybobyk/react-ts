import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../interfaces";
import {userService} from "../../services";

import {IUseState} from "../../types/useState.type";

interface IProps{
    setUsers: IUseState<IUser[]>
}

const UserForm:FC<IProps> = ({setUsers}) => {
    const {register, reset, handleSubmit} = useForm<IUser>()

    const save:SubmitHandler<IUser> = async (user) => {
        const {data} = await userService.create(user);
        setUsers(prev => [...prev, data])
        reset()
    }



    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button >Save</button>
        </form>
    );
};

export default UserForm;