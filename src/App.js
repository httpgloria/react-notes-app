import React, { useState, useEffect } from 'react';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import Search from './components/Search';
import { AppContext } from './context/AppContext';

import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem('notes-app-data'));

    if (storageNotes) {
      setNotes(storageNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes-app">
      <h1 className="notes-app__heading">My Notes</h1>
      <AppContext.Provider value={{ notes, setNotes, search, setSearch }}>
        <Search />
        <AddNote />
        <Notes
          notesList={notes.filter((note) =>
            note.text.toLowerCase().includes(search)
          )}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
