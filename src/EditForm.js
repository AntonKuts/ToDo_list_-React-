import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-materialize'

function EditForm({ addTasks, toEdit, setEditFormOpen, addEditTasks }) {
  const [value, setValue] = useState(toEdit.text);
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addEditTasks(toEdit.index, value);
    setEditFormOpen(false);
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
      <p>For edit № {toEdit.index+1}</p>
        <input
          key={toEdit.text}
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          maxLength="20"
        />
        <Button>Save changes or Enter</Button>
      </form>
      <Button onClick={() =>setEditFormOpen(false)}>cancel</Button>
    </div>
  );
}

export default EditForm;
