export function createNote({ title, topic, date, content = '', homework = '', focus = '' }) {
    if (!title || !title.trim()) {
        throw new Error('Title is required')
    }
    if (!topic || !topic.trim()) {
        throw new Error('Topic is required')
    }

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