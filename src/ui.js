import { getNotes, deleteNote, updateNote } from "./storage.js";
import { escapeHTML } from "./utils.js";

const notesContainer = document.getElementById("notesContainer");

export function renderNotes() {
    const notes = getNotes();

    notesContainer.innerHTML = "";

    if (notes.length === 0) {
        notesContainer.innerHTML = "<p>No notes available.</p>";
        return;
    }

    notes.forEach(note => {
        const noteElement = document.createElement("article");

        noteElement.className = "note";

        noteElement.innerHTML = `
            <h3>${escapeHTML(note.title)}</h3>

            <p>${escapeHTML(note.content)}</p>

            <div class="note-actions">
                <button class="edit-button" data-id="${note.id}">
                    Edit
                </button>

                <button class="delete-button" data-id="${note.id}">
                    Delete
                </button>
            </div>
        `;

        notesContainer.appendChild(noteElement);
    });

    addButtonEvents();
}

function addButtonEvents() {

    const editButtons = document.querySelectorAll(".edit-button");

    const deleteButtons = document.querySelectorAll(".delete-button");

    editButtons.forEach(button => {
        button.addEventListener("click", () => {
            editNote(Number(button.dataset.id));
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            deleteNote(Number(button.dataset.id));

            renderNotes();
        });
    });
}

function editNote(id) {

    const notes = getNotes();

    const note = notes.find(note => note.id === id);

    if (!note) {
        return;
    }

    const newTitle = prompt("Enter new title:", note.title);

    if (newTitle === null) {
        return;
    }

    const newContent = prompt("Enter new content:", note.content);

    if (newContent === null) {
        return;
    }

    updateNote({
        id: note.id,
        title: newTitle,
        content: newContent
    });

    renderNotes();
}