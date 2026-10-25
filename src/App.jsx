import { useState, useEffect } from 'react'
import { createNote } from './notes.js'
import { loadNotes, saveNotes } from './storage.js'

function App() {
  const [notes, setNotes] = useState(() => loadNotes())

  useEffect(() => {
    saveNotes(notes)
  }, [notes])
  
  const [title, setTitle] = useState('')
  const [topic, setTopic] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    try {
      const note = createNote({ title, topic })
      setNotes([...notes, note])
      setTitle('')
      setTopic('')
      setError('')
    } catch (err) {
      setError(err.message)
    }
  }

  function handleDelete(id) {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div>
      <h1>Piano Notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
        />
        <button type="submit">Add note</button>
        {error && <p>{error}</p>}
      </form>
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

