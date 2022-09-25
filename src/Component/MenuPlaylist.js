import React from 'react';
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";

import {PlayList} from '../Component/PlayList';

function MenuPlaylist() {
    return (

        <div className='playListContainer' >
            <div className="nameContainer">
                <p>Playlist</p>
                <i> <FaPlus/> </i>
            </div>
            <div className="playListScrooll">
                {PlayList && PlayList.map((list) =>(
                <div className="playList" key={list.id}>
               <i className='list' ><BsMusicNoteList/></i>
               <p>{list.name}</p>
               <i className='trash' ><BsTrash/></i>
               </div>
               ) )}
            </div>
        </div>
    )

}

export { MenuPlaylist};