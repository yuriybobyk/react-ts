import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import carsLogo from './carsLogo.png'
import './Header.css'

const Header: FC = () => {
    return (
        <div className={'header'}>
            <img src={carsLogo} alt={'carsLogo'}/>
            <div className={'links'}>
                <NavLink to={'login'}>Login</NavLink>
                <NavLink to={'register'}>Register</NavLink>
            </div>
        </div>
    );
};

export {Header};
