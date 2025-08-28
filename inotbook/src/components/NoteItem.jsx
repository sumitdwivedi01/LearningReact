import React, { useContext} from 'react';
import NoteContext from '../context/notes/NoteContext';


function NoteItem({ note ,updateNote}) {
    
    const indTime = (time) => {
        const dateobj = new Date(time);
        const isTime = dateobj.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
        return isTime;
    }
     const context = useContext(NoteContext);
        const { deleteNote } = context;

        const handleDelete=()=>{
            deleteNote(note._id);
        }
        const handleEdit=()=>{
            updateNote(note);
        }
    return (
        <div className="col-md-4 d-flex my-3">
            <div className="card h-100 w-100 d-flex flex-column shadow-sm">
                <div className="card-header fw-semibold">
                    {note.tag}
                </div>

                <div className="card-body flex-grow-1 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title mb-0 text-start">{note.title}</h5>
                        <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-light border-0 p-2 rounded-circle" onClick={handleEdit} title="Edit">
                                <i className="fa-solid fa-file-pen"  />
                            </button>
                            <button className="btn btn-sm btn-light border-0 p-2 rounded-circle" onClick={handleDelete} title="Delete">
                                <i className="fa-solid fa-trash"  />
                            </button>
                        </div>
                    </div>

                    <p className="card-text text-muted">{note.description}</p>
                </div>

                <div className="card-footer text-muted small mt-auto">
                    Last updated: {indTime(note.date)}
                </div>
            </div>
        </div>
    )
}

export default NoteItem
