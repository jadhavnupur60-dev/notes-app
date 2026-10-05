import { addNote } from "./storage.js";
import { createNote } from "./utils.js";
import { renderNotes } from "./ui.js";

const titleInput = document.getElementById("noteTitle");

const contentInput = document.getElementById("noteContent");

const addNoteButton = document.getElementById("addNoteButton");

addNoteButton.addEventListener("click", () => {

    const title = titleInput.value.trim();

    const content = contentInput.value.trim();

    if (!title || !content) {
        alert("Please enter both title and content.");
        return;
    }

    const note = createNote(title, content);

    addNote(note);

    titleInput.value = "";

    contentInput.value = "";

    renderNotes();
});

renderNotes();