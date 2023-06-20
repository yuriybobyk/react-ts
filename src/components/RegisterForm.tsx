import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {joiResolver} from "@hookform/resolvers/joi";
import {authValidator} from "../validators";
import {useAppDispatch, useAppSelector} from "../hooks/redux.hooks";
import {authActions} from "../redux/slices";
import {useNavigate} from "react-router-dom";

const RegisterForm: FC = () => {

    const dispatch = useAppDispatch();

    const {error} = useAppSelector(state => state.authReducer);

    const navigate = useNavigate();

    const {register, handleSubmit, formState:{errors, isValid}} = useForm<IAuth>({mode: 'all', resolver: joiResolver(authValidator)})

    const registerUser:SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authActions.register(user));
        if (requestStatus === 'fulfilled'){
            navigate('/login')
        }
    };

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="password" placeholder={'password'}{...register('password')}/>
            <button disabled={!isValid} >Register</button>
            {Object.keys(errors).length>0 && <div>{Object.values(errors)[0].message}</div>}
            {error && <div>{error.username[0]}</div>}
        </form>
    );
};

export {RegisterForm};
