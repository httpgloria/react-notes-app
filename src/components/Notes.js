import React, { useContext } from 'react';
import Note from './Note';
import { AppContext } from '../context/AppContext';

function Notes({ notesList }) {
  const { notes } = useContext(AppContext);

  return (
    <div className="notes">
      {notesList &&
        notesList.map((note) => {
          return (
            <Note
              key={note.id}
              noteId={note.id}
              text={note.text}
              date={note.date}
            />
          );
        })}
      {notes.length == 0 && <p className="notes__message">No notes yet...</p>}
    </div>
  );
}

export default Notes;
