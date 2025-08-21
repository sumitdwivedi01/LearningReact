import React from 'react'

function NoteItem({ note }) {
    const indTime=(time)=>{
        const dateobj= new Date(time);
        const isTime =dateobj.toLocaleString("en-IN",{timeZone:"Asia/Kolkata"});
        return isTime;
    }
    return (
        <div className="col-md-3 d-flex my-3">
            <div className="card text-center h-100 w-100">
            <div className="card-header">
               {note.tag}
            </div>
            <div className="">
            <div className="card-body my-3">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
            </div>
            <div className="card-footer text-body-secondary">
               Last updated: {indTime(note.date)}
            </div>
            </div>
            </div>

        </div>
    )
}

export default NoteItem
