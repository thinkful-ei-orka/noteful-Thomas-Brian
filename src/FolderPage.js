import React from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import Header from './Header';
import StateContext from './StateContext';

export default class FolderPage extends React.Component {

    static contextType = StateContext;

    render() {
        let folderMatch = this.props.match.params.folderId;

        let notes = this.context.notes.filter((note) =>
            note.folderId === folderMatch
        );

        let folders = this.context.folders.map(folder => {
            if (folder.id === folderMatch) {
                folder.className = 'listFolder highlighted';
            } else {
                folder.className = 'listFolder'
            }
            return folder;
        });
        
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
}