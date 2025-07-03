import React from "react";
import { useState } from "react";

export default function Note({ note, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleSave = () => {
    onEdit(note.id, editedText);
    setIsEditing(false);
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>{note.title}</h3>
        <button className="delete-btn" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
      {isEditing ? (
        <div className="note-edit-form">
          <textarea
            rows="4"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value) }
          />
          <button className="edit-btn" onClick={handleSave}>Save</button>
        </div>
      ) : (
        <p>{note.text}</p>
      )}
      {!isEditing && <button className="edit-btn" onClick={handleEdit}>Edit</button>}
    </div>
  );
}