import React, {FC} from 'react';
import {IAlbum} from "../../interfaces";
import './Album.css';

interface IProps{
    album: IAlbum
}

const Album: FC<IProps> = ({album}) => {

    const {id, title} = album;

    return (
        <div className={'album'}>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export default Album;