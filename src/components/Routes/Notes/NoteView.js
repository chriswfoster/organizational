import React from 'react';
import { useParams } from 'react-router-dom'

 
const NoteView = (props) => {

    const {noteId} = useParams();


    return (
        <div>You're viewing note: {noteId}</div>
    )
}
export default NoteView