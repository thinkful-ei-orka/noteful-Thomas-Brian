import React from 'react'
import Note from './Note'


export default function NoteList(props) {
    let notes = props.noteList.map((note) => {
        return (
            <Note 
                name={note.name} 
                key={note.id}
                id={note.id}
                modified={note.modified}
                content={note.content}
                folderid={note.folderId}
                 />
        )
    });

    return (
        <section className='noteList'>
            {notes}
            <button className='addNote' /*onClick=''*/>Add Note</button>
        </section>
    )
}