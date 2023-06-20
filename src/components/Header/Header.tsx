import React, {FC, useEffect} from 'react';
import {NavLink} from "react-router-dom";

import carsLogo from './carsLogo.png'
import './Header.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {authService} from "../../services";
import {authActions} from "../../redux/slices";

const Header: FC = () => {

    const {me} = useAppSelector(state => state.authReducer);

    const dispatch = useAppDispatch();
        if (!me && authService.getAccessToken()){
            dispatch(authActions.me())
        }
    useEffect(()=>{

    },[me])
    return (
        <div className={'header'}>
            <img src={carsLogo} alt={'carsLogo'}/>
            {me ? <div><span>{me.username}</span>
            <button>Log Out</button>
            </div>
                : <div className={'links'}>
                    <NavLink to={'login'}>Login</NavLink>
                    <NavLink to={'register'}>Register</NavLink>
                </div>
            }
        </div>
    );
};

export {Header};
