import { describe, it, expect } from 'vitest'
import { createNote, updateNote } from './notes.js'

describe('createNote', () => {
    it('rejects a note with no title', () => {
        expect(() => createNote({ topic: 'Voicing' })).toThrow('Title is required')
    })
    it('rejects a note with no topic', () => {
        expect(() => createNote({ title: 'Voicing basics' })).toThrow('Topic is required')
    })
    it('creates a note with an id and a trimmed title', () => {
        const note = createNote({ title: '  Scales  ', topic: 'Scales' })
        expect(note.id).toBeTruthy()
        expect(note.title).toBe('Scales')
    })
})

describe('updateNote', () => {
    it('keeps the id and changes the title', () => {
        const note = createNote({ title: 'Old title', topic: 'Voicing' })
        const updated = updateNote(note, { title: 'New title' })
        expect(updated.id).toBe(note.id)
        expect(updated.title).toBe('New title')
    })
    it('keeps unchanged fields', () => {
        const note = createNote({ title: 'Old title', topic: 'Voicing', content: 'Drop 2 voicings' })
        const updated = updateNote(note, { title: 'New title' })
        expect(updated.content).toBe('Drop 2 voicings')
    })
    it('rejects an empty title', () => {
        const note = createNote({ title: 'Old title', topic: 'Voicing' })
        expect(() => updateNote(note, { title: '' })).toThrow('Title is required')
    })
})
