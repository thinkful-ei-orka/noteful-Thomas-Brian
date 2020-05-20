import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';
import FolderList from './FolderList';
import NoteList from './NoteList';
import StateContext from './StateContext'

export default class MainPage extends Component {
    static contextType = StateContext;

    render() {
        let folders = this.context.folders.map(folder => {

            folder.className = 'listFolder'

            return folder;
        });
        return (
            <>
                <Header></Header>

                <div className='list-box'>
                    <FolderList folderList={folders} />
                    <NoteList noteList={this.context.notes} />
                </div>
            </>
        )
    }
}
