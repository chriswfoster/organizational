import React, { createContext, useState } from "react";

const NoteContext = createContext();
const tempCategories = {
  1: {
    id: 1,
    name: "First",
    notes: [
      { note_id: 1, text: "This is a note for First category" },
      { note_id: 11, text: "This is a note for First category" },
      { note_id: 21, text: "This is a note for First category" },
    ],
  },
  2: {
    id: 2,
    name: "second",
    notes: [
      { note_id: 2, text: "This is a note for second category" },
      { note_id: 12, text: "This is a note for second category" },
      { note_id: 22, text: "This is a note for second category" },
    ],
  },
  3: {
    id: 3,
    name: "third",
    notes: [
      { note_id: 3, text: "This is a note for third category" },
      { note_id: 13, text: "This is a note for third category" },
      { note_id: 23, text: "This is a note for third category" },
    ],
  },
  4: {
    id: 4,
    name: "fourth",
    notes: [
      { note_id: 4, text: "This is a note for fourth category" },
      { note_id: 14, text: "This is a note for fourth category" },
      { note_id: 24, text: "This is a note for fourth category" },
    ],
  },
  5: {
    id: 5,
    name: "fifth",
    notes: [
      { note_id: 5, text: "This is a note for fifth category" },
      { note_id: 15, text: "This is a note for fifth category" },
      { note_id: 25, text: "This is a note for fifth category" },
    ],
  },
  6: {
    id: 6,
    name: "sixth",
    notes: [
      { note_id: 6, text: "This is a note for sixth category" },
      { note_id: 16, text: "This is a note for sixth category" },
      { note_id: 26, text: "This is a note for sixth category" },
    ],
  },
};

const NoteProvider = ({ children }) => {
  const [listCategories, setListCategories] = useState(tempCategories);

  const deleteNoteCard = (categoryId, noteId) => {
    let newList = {};
    Object.keys(listCategories).forEach(catId => {
        newList[catId] = {...listCategories[catId]};
    })
    delete newList[categoryId].notes;
    newList[categoryId].notes = listCategories[categoryId].notes.filter(note => note.note_id !== noteId)

    setListCategories(newList)
  }

  return <NoteContext.Provider value={{ listCategories, deleteNoteCard }}>{children}</NoteContext.Provider>;
};

const withNotes = (Child) => (props) => <NoteContext.Consumer>{(context) => <Child {...props} {...context} />}</NoteContext.Consumer>;
export { NoteProvider, withNotes };
