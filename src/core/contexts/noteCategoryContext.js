import React, { createContext, useState } from "react";

const NoteContext = createContext();
const tempCategories = {
  1: {
    id: 1,
    name: "First",
    notes: {
      1: { note_id: 1, title: "first idea",  text: "This is a note for First category" },
      11: { note_id: 11, title: "second idea",  text: "This is a note for First category" },
      21: { note_id: 21, title: "third idea",  text: "This is a note for First category" },
    },
  },
  2: {
    id: 2,
    name: "second",
    notes: {
      2: { note_id: 2, text: "This is a note for second category" , title: "first idea",},
      12: { note_id: 12, text: "This is a note for second category" , title: "second idea",},
      22: { note_id: 22, text: "This is a note for second category" , title: "third idea",},
    },
  },
  3: {
    id: 3,
    name: "third",
    notes: {
      3: { note_id: 3, text: "This is a note for third category" , title: "first idea",},
      13: { note_id: 13, text: "This is a note for third category" , title: "second idea",},
      23: { note_id: 23, text: "This is a note for third category", title: "third idea",},
    },
  },
  4: {
    id: 4,
    name: "fourth",
    notes: {
      4: { note_id: 4, text: "This is a note for fourth category" , title: "first idea",},
      14: { note_id: 14, text: "This is a note for fourth category" , title: "second idea",},
      24: { note_id: 24, text: "This is a note for fourth category" , title: "third idea",},
    },
  },
  5: {
    id: 5,
    name: "fifth",
    notes: {
      5: { note_id: 5, text: "This is a note for fifth category" , title: "first idea",},
      15: { note_id: 15, text: "This is a note for fifth category" , title: "second idea",},
      25: { note_id: 25, text: "This is a note for fifth category" , title: "third idea",},
    },
  },
  6: {
    id: 6,
    name: "sixth",
    notes: {
      6: { note_id: 6, text: "This is a note for sixth category" , title: "first idea",},
      16: { note_id: 16, text: "This is a note for sixth category" , title: "second idea",},
      26: { note_id: 26, text: "This is a note for sixth category" , title: "third idea",},
    },
  },
};

const NoteProvider = ({ children }) => {
  const [listCategories, setListCategories] = useState(tempCategories);

  const deleteNoteCard = (categoryId, noteId) => {
    let newList = {};
    Object.keys(listCategories).forEach(catId => {
        newList[catId] = {...listCategories[catId]};
    })
    delete newList[categoryId].notes[noteId];
    // newList[categoryId].notes = listCategories[categoryId].notes.filter(note => note.note_id !== noteId)

    setListCategories(newList)
  }

  const updateCardText = (categoryId, noteId, text) => {
    let newList = {...listCategories};
    newList[categoryId].notes[noteId].text = text;
    setListCategories(newList);
  }

  return <NoteContext.Provider value={{ listCategories, deleteNoteCard, updateCardText }}>{children}</NoteContext.Provider>;
};

const withNotes = (Child) => (props) => <NoteContext.Consumer>{(context) => <Child {...props} {...context} />}</NoteContext.Consumer>;
export { NoteProvider, withNotes };
