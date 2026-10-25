const STORAGE_KEY = 'piano-notes.notes'

export function loadNotes() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : []
    }   catch {
        return []
    }
}

export function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}