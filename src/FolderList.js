import React from 'react';
import Folder from './Folder';
import './FolderList.css';

export default function Folders(props) {
    let folders = props.folderList.map((folder) => {
        return (
            <Folder className={folder.className} name={folder.name} key={folder.id} id={folder.id}/>
        )
    });

    return (
        <section className='folder-list'>
            <ul>
                {folders}
            </ul>
            <button className='addFolder' /*onClick=''*/>Add Folder</button>
        </section>
    )
}