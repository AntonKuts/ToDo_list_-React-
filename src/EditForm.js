import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-materialize'

const EditForm = ({ toEdit, addEditTasks, setToEdit }) => {
  const [value, setValue] = useState(toEdit.text);
  const handleSubmit = e => {
    e.preventDefault();
    if (value) {
        addEditTasks(toEdit.index, value);
        setToEdit({});
    }
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <div className="editLine">
            <p> {toEdit.index+1}. </p>
            <input
              key={toEdit.text}
              type="text"
              className="input"
              value={value}
              onChange={e => setValue(e.target.value)}
              maxLength="20"
            />
            <p> {toEdit.completed && " (done)"} </p>
        </div>
        <Button>Save changes (Enter)</Button>
      </form>
      <Button onClick={() => setToEdit({})}> cancel </Button>
    </div>
  );
};

export default EditForm;
