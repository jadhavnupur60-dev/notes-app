const STORAGE_KEY = "notes";

export function getNotes() {
    const notes = localStorage.getItem(STORAGE_KEY);

    return notes ? JSON.parse(notes) : [];
}

export function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function addNote(note) {
    const notes = getNotes();

    notes.push(note);

    saveNotes(notes);
}

export function updateNote(updatedNote) {
    const notes = getNotes();

    const index = notes.findIndex(note => note.id === updatedNote.id);

    if (index !== -1) {
        notes[index] = updatedNote;
    }

    saveNotes(notes);
}

export function deleteNote(id) {
    const notes = getNotes();

    const updatedNotes = notes.filter(note => note.id !== id);

    saveNotes(updatedNotes);
}