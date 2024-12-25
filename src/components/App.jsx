import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(note) {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  console.log(notes);
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((notes, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Note /> */}
      <Footer />
    </div>
  );
}

export default App;
