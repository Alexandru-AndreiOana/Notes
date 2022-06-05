import React from "react";
import { useState } from "react"

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(e){
    const {name, value} = e.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(e) {
    props.onAdd(note)
    setNote ({
      title: "",
      content: ""
    })
    e.preventDefault()
  }

  return (
    <div>
      <form>
        <input name="title" className = "note-title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <div className="button-wrap">
          <button id = "addButton" onClick={submitNote}>+</button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
