function validateNote({ title, topic }) {
    if (!title || !title.trim()) {
        throw new Error('Title is required')
    }
    if (!topic || !topic.trim()) {
        throw new Error('Topic is required')
    }
}

export function createNote({ title, topic, date, content = '', homework = '', focus = '' }) {
    validateNote({ title, topic })

    return {
        id: crypto.randomUUID(),
        title: title.trim(),
        topic: topic.trim(),
        date: date || new Date().toLocaleDateString('en-CA'),
        content, 
        homework,
        focus,
    }
}

export function updateNote(note, changes) {
    const updated = { ...note, ...changes }
    
    validateNote(updated)
    
    return { ...updated, title: updated.title.trim(), topic: updated.topic.trim() }
}

