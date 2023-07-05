const addNote = document.getElementById("add-note");

addNote.addEventListener("click", () => {
  createNote();
});

function createNote() {
  const note = document.createElement("div");
  note.classList.add("notes");

  note.innerHTML = `
    <div class="note">
      <div class="note__header">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="remove"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="note__body note--hide"></div>
      <textarea></textarea>
    </div>
  `;

  document.body.appendChild(note);
}
