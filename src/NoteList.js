import React from 'react'
import Note from './Note'


export default function NoteList() {

    return (
        <section className='noteList'>
            <Note />
            <button className='addNote' /*onClick=''*/>Add Note</button>
        </section>
    )
}