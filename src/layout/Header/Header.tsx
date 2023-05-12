import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';
import ListIcon from '@mui/icons-material/List';
import CollectionsIcon from '@mui/icons-material/Collections';
import CommentIcon from '@mui/icons-material/Comment';

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'nav'}>
                <ListIcon color={"primary"}/>
                <NavLink to={'todos'}>Todos</NavLink>
            </div>
            <div className={'nav'}>
                <CollectionsIcon color={"primary"}/>
                <NavLink to={'albums'}>Albums</NavLink>
            </div>
            <div className={'nav'}>
                <CommentIcon color={"primary"}/>
                <NavLink to={'comments'}>Comments</NavLink>
            </div>
        </div>
    );
};

export default Header;