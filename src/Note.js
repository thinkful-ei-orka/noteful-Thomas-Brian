import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Note.css';
import StateContext from './StateContext'

export default class Note extends Component {
    //id
    //name
    //modified
    //folderid
    //content
    static contextType = StateContext;
render (){

    let day = new Date(this.props.modified);
    let modifyDate = day.toDateString();
    let notelst = this.context.notes
    let thisContext = this.context.setState

    const handleDeleteClick = (e) => {
        let currId = ''
        currId = e.currentTarget.id
        // const Url = 'http://localhost:9090/notes/'

        // fetch(`http://localhost:9090/notes/ ${currId}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        // })

        // let noteMatch = this.props.match.params.noteId;

        let note = notelst.filter((note) =>
            note.id !== currId
        );
        console.log(note);
            //this.context.
        this.context.setState ({notes: note})
    }

    return (
        <div>
            <div className='note-box'>
                <Link to={`/note/${this.props.id}`}><h3>{this.props.name}</h3></Link>
                <p>Date modified on {modifyDate}</p>
                <button id={this.props.id} className="delete-button" onClick={handleDeleteClick}>delete</button>
            </div>
        </div>
    )
    }
} 