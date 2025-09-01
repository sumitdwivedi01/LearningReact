import React, { useContext, useMemo } from "react";
import NoteContext from "../context/notes/NoteContext";
import { DarkContext } from "../context/Theme/DarkTheme";
import {Link} from "react-router-dom";


const previewWords = (str = "", maxWords = 40) => {
  const words = (str || "").trim().split(/\s+/);
  if (words.length <= maxWords) return str;
  return words.slice(0, maxWords).join(" ") + "…";
};

function NoteItem({ note, updateNote, showAlert }) {
  const { theme } = useContext(DarkContext);
  const { deleteNote } = useContext(NoteContext);

  const indTime = (time) =>
    new Date(time).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const handleDelete = () => {
    deleteNote(note._id);
    showAlert("Note Deleted Successfully", "success");
  };

  const handleEdit = () => {
    updateNote(note);
    document.body.classList.add("lock-scroll");
  };

  const descPreview = useMemo(
    () => previewWords(note?.description, 40),
    [note?.description]
  );

  return (
    <div className="col-md-4 d-flex my-3">
      <div
        className={`card note-card h-100 w-100 d-flex flex-column border-0 ${
          theme === "dark" ? "note-dark" : "note-light"
        }`}
      >
        <div className="card-header d-flex align-items-start justify-content-between">
          <span className="note-tag">{note?.tag || "note"}</span>
          <div className="d-flex gap-2">
            <button
              type="button"
              className="icon-btn"
              onClick={handleEdit}
              aria-label="Edit note"
              title="Edit"
            >
              <i className="fa-solid fa-pen-to-square" />
            </button>
            <button
              type="button"
              className="icon-btn"
              onClick={handleDelete}
              aria-label="Delete note"
              title="Delete"
            >
              <i className="fa-solid fa-trash" />
            </button>
          </div>
        </div>

        <div className="card-body flex-grow-1 d-flex flex-column">
          <h5 className="note-title">{note?.title}</h5>
          <p className="note-desc">{descPreview}</p>
        </div>

        <div className="d-flex align-items-center justify-content-between px-3 pb-3">
          <Link type="button" className={`btn-view`} to={`/viewnote/${note._id}`} style={{textDecoration:"none"}}>View Note</Link>
          <span className="note-date">🕒 {indTime(note?.date)}</span>
        </div>
      </div>
    </div>
  );  
}

export default NoteItem;