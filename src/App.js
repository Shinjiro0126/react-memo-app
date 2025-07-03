import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Note from './Note';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', text: '' });

  const addNote = () => {
    if(newNote.title && newNote.text){
      const newId = Date.now().toString();
      setNotes([...notes, {...newNote, id: newId}]);
      setNewNote({ title: '', text: '' });
    }
  }

  const editNote = (id, newText) => {
    const updateNotes = notes.map((note) => 
      note.id === id ? {...note, text: newText } : note
    );
    setNotes(updateNotes);
  }

  const deleteNote = (id) => {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  }

  return (
    <div className="App">
      <h1>メモアプリ</h1>
      <div className='note-form'>
        <input
          type="text"
          placeholder='タイトルを入力してください。'
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })} />

        <textarea
          placeholder='メモ内容を入力してください。'
          value={newNote.text}
          onChange={(e) => setNewNote({ ...newNote, text: e.target.value })} />
        <button onClick={addNote}>メモを追加</button>
      </div>

      <div className='note-list'>
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={deleteNote} onEdit={editNote} />
        ))}
      </div>
    </div>
  );
}