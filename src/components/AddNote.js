import React, { useState, useContext, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { AppContext } from '../context/AppContext';

function AddNote() {
  const maxCharacterCount = 200;
  const { notes, setNotes } = useContext(AppContext);
  const [note, setNote] = useState('');
  const [characterCount, setCharacterCount] = useState(maxCharacterCount);
  const addNoteField = useRef(null);

  useEffect(() => {
    addNoteField.current.focus();
  }, []);

  function formHandler(e) {
    const count = maxCharacterCount - e.target.value.length;
    setNote(e.target.value);
    if (count >= 0) {
      setCharacterCount(count);
    }
  }

  function buttonHandler() {
    const date = new Date();
    const today =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    let currentNote = {
      text: note,
      date: today,
      id: nanoid(),
    };
    setNotes([...notes, currentNote]);
    setNote('');
    setCharacterCount(maxCharacterCount);
  }

  return (
    <div className="add-note">
      <textarea
        className="add-note__area"
        onChange={formHandler}
        placeholder="Add a new note..."
        name="note"
        id="note"
        maxLength={maxCharacterCount}
        cols="30"
        rows="10"
        value={note}
        ref={addNoteField}
      ></textarea>
      <div className="add-note-wrapper">
        <button className="add-note__btn" onClick={buttonHandler}>
          Save
        </button>
        <p className={`add-note__count ${characterCount === 0 ? 'red' : ''}`}>
          {characterCount}
        </p>
      </div>
    </div>
  );
}

export default AddNote;
