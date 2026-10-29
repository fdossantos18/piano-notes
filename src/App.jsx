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
  const [selectedId, setSelectedId] = useState(null)
  const selectedNote = notes.find((note) => note.id === selectedId)
  

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
      setDate('')
      setError('')
    } catch (err) {
      setError(err.message)
    }
  }

  function handleDelete(id) {
    setNotes(notes.filter((note) => note.id !== id))
    if (id === selectedId) {
      setSelectedId(null)
    }
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
            <button onClick={() => setSelectedId(note.id)}>
              {note.title} ({note.topic}, {note.date})
            </button>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedNote && (
        <section>
          <h2>{selectedNote.title}</h2>
          <p>Topic: {selectedNote.topic}</p>
          <p>Date: {selectedNote.date}</p>
          <p>Content: {selectedNote.content}</p>
          <p>Homework: {selectedNote.homework}</p>
          <p>Focus: {selectedNote.focus}</p>
        </section>
      )}
    </div>
  )
}

export default App

