import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import FolderList from './FolderList';
import NoteList from './NoteList';

export default function MainPage(props) {
    let folders = props.folderList.map(folder => {
 
        folder.className='listFolder'
    
    return folder;
});
    return (
        <>
        <Header></Header>

        <div className='list-box'>
            <FolderList folderList={folders} />
            <NoteList noteList={props.noteList} />
        </div>
        </>
    )
}

