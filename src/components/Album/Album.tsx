import React, {FC} from 'react';
import {IAlbum} from "../../interfaces";

interface IProps{
    album: IAlbum
}

const Album: FC<IProps> = ({album}) => {

    const {id, title} = album;

    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export default Album;