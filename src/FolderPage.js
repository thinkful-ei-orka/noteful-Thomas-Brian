import React from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import Header from './Header';

export default function FolderPage(props) {
    let folderMatch = props.routeProps.match.params.folderId;

    let notes = props.noteList.filter((note) => 
         note.folderId === folderMatch
    );

    let folders = props.folderList.map(folder => {
        if (folder.id === folderMatch) {
            folder.className='listFolder highlighted';
        } else {
            folder.className='listFolder'
        }
        return folder;
    });


    console.log(props);
    console.log(notes);
    return (
        <>
        <Header></Header>

        <div className='list-box'>
            <FolderList folderList={folders} />
            <NoteList noteList={notes} />
        </div>
        </>
    )
}