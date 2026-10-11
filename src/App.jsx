import { useState } from 'react'
import { createNote } from './notes.js'

function App() {
  const [notes, setNotes] = useState([])

  function handleAddSample() {
    const note = createNote({ title: 'Voicing basics', topic: 'Voicing' })
    setNotes([...notes, note])
  }

  function handleDelete(id) {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div>
      <h1>Piano Notes</h1>
      <button onClick={handleAddSample}>Add sample note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.title} ({note.topics}, {note.date})
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

  
export default App

