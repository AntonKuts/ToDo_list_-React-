import  React, { useState } from 'react';
import './App.css';
import { Button } from 'react-materialize'

const AddNewTask = ({ addTasks }) => {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (value) {
        addTasks(value);
        setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Write a new task"
        maxLength="20"
      />
      <Button>Save (Enter)</Button>
    </form>
  );
};

export default AddNewTask;
