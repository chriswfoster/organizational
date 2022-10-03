import React from "react";
import { useParams } from "react-router-dom";
import { withNotes } from "../../../../core/contexts/noteCategoryContext";
import NoteCard from "./children/NoteCard";

const NoteView = (props) => {
  const {listCategories, deleteNoteCard, updateCardText} = props;
  const { categoryId } = useParams();
  const noteObj = listCategories[categoryId];

console.log('the noteObj: ', noteObj)
  return (
      <div>
        <span>You're viewing note: {noteObj.name}</span>
        {Object.values(noteObj.notes).map(note => {
            return (<NoteCard updateCardText={updateCardText} deleteNoteCard={deleteNoteCard} note_id={note.note_id} category_id={categoryId} key={note.note_id} title={note.title} text={note.text} />);
        })}
      </div>
  );
};
export default withNotes(NoteView);
