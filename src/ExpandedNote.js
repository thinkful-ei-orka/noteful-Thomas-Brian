import React from "react";
import { Link } from 'react-router-dom';
import './Note.css';

export default function ExpandedNote(props) {
    //id
    //name
    //modified
    //folderid
    //content
    let day = new Date(props.modified);
    let modifyDate = day.toDateString();

    return (
        <div>
            <div className='note-box'>
                <Link to={`/note/${props.id}`}><h3>{props.name}</h3></Link>
                <p>Date modified on {modifyDate}</p>
                <button className="delete-button">delete</button>
            </div>
            <p className="note-content" >{props.content}</p>
        </div>
    )

} 