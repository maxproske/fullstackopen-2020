import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import noteService from './services/notes'

const Note = ({ note, toggleImportanceOf }) => (
  <li style={note.important ? { color: 'red', fontWeight: 'bold' } : {}}>
    {note.content}{' '}
    <button onClick={() => toggleImportanceOf(note.id)}>
      {note.important ? 'make not important' : 'make important'}
    </button>
  </li>
)

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    noteService.getAll().then((response) => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
  }, [])

  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    noteService.create(noteObject).then((response) => {
      console.log(response)
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportance = (id) => {
    const note = notes.find((note) => note.id === id)
    const updatedNote = { ...note, important: !note.important }

    noteService.update(id, updatedNote).then((response) => {
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)))
    })
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      </div>
      <ul>
        {notesToShow.map((note, i) => (
          <Note key={i} note={note} toggleImportanceOf={toggleImportance} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit" disabled={newNote.length === 0}>
          save
        </button>
      </form>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
