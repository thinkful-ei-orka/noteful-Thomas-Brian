import React from 'react'
import Note from './Note'
import ExpandedNote from './ExpandedNote'

export default function NoteList(props) {
    let notes = []
    console.log(props.noteList.length)
    if (props.noteList.length === 1){
        notes = props.noteList.map((note) => {
            return (
                <ExpandedNote 
                    name={note.name} 
                    key={note.id}
                    id={note.id}
                    modified={note.modified}
                    content={note.content}
                    folderid={note.folderId}
                    />
            )
        });
    } else {
        notes = props.noteList.map((note) => {
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
    }

    return (
        <section className='noteList'>
            {notes}
            <button className='addNote' /*onClick=''*/>Add Note</button>
        </section>
    )
}