import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Header from './Header';
import Note from './Note';

const Account = () => {

  const [notes, setNotes] = useState([ ])

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note]
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return(
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map( (noteItem, index) => {
        return ( 
          <Note 
            key = {index}
            id = {index}
            title = {noteItem.title}
            content = {noteItem.content} 
            onDelete = {deleteNote}
          />
        )
      })} 
    </div>
  );
};

export default Account;
