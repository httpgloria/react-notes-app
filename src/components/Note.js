import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import { IoTrashBinOutline } from 'react-icons/io5';

function Note({ noteId, text, date }) {
  const { notes, setNotes } = useContext(AppContext);

  function handleDelete(e) {
    const newNotesArray = notes.filter((note) => note.id !== noteId);
    setNotes(newNotesArray);
  }

  return (
    <div className="note">
      <p className="note__body">{text}</p>
      <div className="note-wrapper">
        <p className="note__date">{date}</p>
        <IoTrashBinOutline onClick={handleDelete} className="note__delete" />
      </div>
    </div>
  );
}

export default Note;
