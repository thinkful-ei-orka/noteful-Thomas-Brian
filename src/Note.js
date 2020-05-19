import React from "react";
import './Note.css';

export default function Note(props) {
    //id
    //name
    //modified
    //folderid
    //content

    return (
        <div>
            <div className='note-box'>
                <h3>{props.name}</h3>
                <p>{props.modified}</p>
                <button className="delete-button">delete</button>
            </div>
            <p className="note-content" >{props.content}</p>
            {/*this.props.extended === true && 
                <p className="note-content" >{props.content}</p>*/}
        </div>
    )

} 