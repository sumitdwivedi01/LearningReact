
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState =(props)=>{
        const InitialNotes =[
        {
            "_id": "689c84880c7864f9d6f54f3b",
            "user": "6897855cc814ca987f0ff4de",
            "title": "My Title",
            "description": "This is an amazing Notes React app",
            "tag": "public",
            "date": "2025-08-13T12:26:48.697Z",
            "__v": 0
        },
        {
            "_id": "68a034c5ecdb87df1815c057",
            "user": "6897855cc814ca987f0ff4de",
            "title": "My testing",
            "description": "it's working greate yrrr not a bad backend ",
            "tag": "public",
            "date": "2025-08-16T07:35:33.923Z",
            "__v": 0
        },
        {
            "_id": "68a45b879b06c1c9a250d0bd",
            "user": "6897855cc814ca987f0ff4de",
            "title": "My testing 3000",
            "description": "it's working greate yrrr not a bad backend ",
            "tag": "public",
            "date": "2025-08-19T11:09:59.515Z",
            "__v": 0
        },
        {
            "_id": "68a73914beff39ee3f1ee1ec",
            "user": "68a723a8beff39ee3f1ee1e7",
            "title": "Updated Title recently",
            "description": "This is an amazing updated feature of Notes React app",
            "tag": "public",
            "date": "2025-08-21T15:19:48.016Z",
            "__v": 0
        },
        {
            "_id": "68a7458abeff39ee3f1ee21e",
            "user": "68a723a8beff39ee3f1ee1e7",
            "title": "Updated Title recently ",
            "description": "bhai mei mrzi mai kuch bhi kru theek hai updated the new time",
            "tag": "public",
            "date": "2025-08-21T16:21:36.587Z",
            "__v": 0
        }
        ]
    const [notes, setNotes] = useState(InitialNotes);

    return <NoteContext.Provider value={{notes , setNotes}}>
        {props.children}
    </NoteContext.Provider>
}

export default NoteState;