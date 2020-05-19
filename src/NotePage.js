import React from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import Header from './Header';

export default function NotePage(props) {
    let folders = props.folderList.map(folder => {
 
        folder.className='listFolder'
    
    return folder;
});
    let folderMatch = props.routeProps.match.params.folderId;
    let noteMatch = props.routeProps.match.params.noteId;

    let note = props.noteList.filter((note) => 
         note.id === noteMatch
    );

    let folder = props.folderList.filter(folder => 
        folder.id === note[0].folderId
    );
    
    

    return (
        <>
        <Header></Header>

        <div className='list-box'>
            <FolderList folderList={folder} />
            <NoteList noteList={note} />
        </div>
        </>
    )
}