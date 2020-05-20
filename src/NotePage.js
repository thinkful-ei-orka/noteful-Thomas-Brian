import React from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import Header from './Header';
import StateContext from './StateContext'

export default class NotePage extends React.Component {

    static contextType = StateContext;

    render() {
        this.context.folders.map(folder => {

            folder.className = 'listFolder'

            return folder;
        });

        let noteMatch = this.props.match.params.noteId;

        let note = this.context.notes.filter((note) =>
            note.id === noteMatch
        );

        let folder = this.context.folders.filter(folder =>
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
}