import React, {useEffect, useState} from 'react';
import {IAlbum} from "../../interfaces";
import {albumService} from "../../services/album.service";
import Album from "../Album/Album";
import './Albums.css';


const Albums = () => {

    const [albums, setAlbums] = useState<IAlbum[]>([])

    useEffect(()=>{
        albumService.getAll().then(value => value.data).then(value => setAlbums(value))
    })

    return (
        <div className={'albums'}>

            {albums.map(album => <Album album={album} key={album.id}/>)}

        </div>
    );
};

export default Albums;