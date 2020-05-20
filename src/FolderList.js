import React from 'react';
import Folder from './Folder';
import './FolderList.css';

export default function FolderList (props)  {
    
    let folders = props.folderList.map((folder) => {
        return (
            <Folder className={folder.className} name={folder.name} key={folder.id} id={folder.id} />
        )
    });
    
    function handleDeleteClick(){
        console.log('clicked')
    }

    return (
        <section className='folder-list'>
            {folders}
            <button className='addFolder' onClick={handleDeleteClick}>Add Folder</button>
        </section>
    )

}
