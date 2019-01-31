import React from 'react';
import './App.css';
import { Button } from 'react-materialize'

function TasksList({ numberOfAllTasks, task, index, removeTask, completedTask, taskPositionСhange, editTask, editFormOpen }) {
  return (
    <div key={index}>
      <div className="task">
        <p className={task.completed ? "taskDone" : ""}>{index+1}. {task.text}</p>
      </div>
        <div className="task">
        <Button onClick={() => completedTask(index)}> done </Button>
        <Button onClick={() => removeTask(index)}> delete </Button>
        <div className={editFormOpen ? "displayNone task" : "task"}>
          <Button disabled={(index > 0) ? "" : "disabled"} onClick={() => taskPositionСhange(index, "top")}> top </Button>
          <Button disabled={(index < numberOfAllTasks-1) ? "" : "disabled"} onClick={() => taskPositionСhange(index, "down")}> down </Button>
          <Button waves='light' onClick={() => editTask(index)}> edit </Button>
        </div>
      </div>
    </div>
  );
}

export default TasksList;
