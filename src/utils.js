export function createNote(title, content) {
    return {
        id: Date.now(),
        title: title.trim(),
        content: content.trim()
    };
}

export function escapeHTML(text) {
    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}