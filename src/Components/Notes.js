import React, { useContext } from 'react'
import NotesContext from '../context/notes/NotesContext'
import NotesItem from './NotesItem';


export default function Notes() {
    const context = useContext(NotesContext);
    const { notes, setNotes } = context;
    // console.log(notes);
    return (
        <div className="container">
            <div className='row'>
                {notes.map((element) => {
                    return <NotesItem element={element} />
                })}
            </div>
        </div>
    )
}
