import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <NavLink to={'todos'}>Todos</NavLink>
            </div>
            <div>
                <NavLink to={'albums'}>Albums</NavLink>
            </div>
            <div>
                <NavLink to={'comments'}>Comments</NavLink>
            </div>
        </div>
    );
};

export default Header;