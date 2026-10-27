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
  const [date, setDate] = useState('')
  const [error, setError] = useState('')
  const [content, setContent] = useState('')
  const [homework, setHomework] = useState('')
  const [focus, setFocus] = useState('')
  

  function handleSubmit(event) {
    event.preventDefault()
    try {
      const note = createNote({ title, topic, date, content, homework, focus })
      setNotes([...notes, note])
      setTitle('')
      setContent('')
      setHomework('')
      setFocus('')
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
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <textarea
          placeholder="What I learned"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <textarea
          placeholder="Homework"
          value={homework}
          onChange={(event) => setHomework(event.target.value)}
        />
        <textarea
          placeholder="Focus"
          value={focus}
          onChange={(event) => setFocus(event.target.value)}
        />
        <button type="submit">Add note</button>
        {error && <p>{error}</p>}
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.title} ({note.topic}, {note.date})
            <p>Learned: {note.content}</p>
            <p>Homework: {note.homework}</p>
            <p>Focus: {note.focus}</p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

