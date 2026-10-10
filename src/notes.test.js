import { describe, it, expect } from 'vitest'
import { createNote } from './notes.js'

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
