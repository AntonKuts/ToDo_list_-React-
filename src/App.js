import React, { useState } from 'react';
import AddNewTask from './AddNewTask';
import TasksList from './TasksList';
import EditForm from './EditForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(startTasks());
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [toEdit, setToEdit] = useState({});

  function startTasks() {
    let returnLocalStorage = JSON.parse(localStorage.getItem("allTasksInLocalStorage"));
    if (returnLocalStorage){
      return returnLocalStorage.allTasks
    } else {
      return [
          {
            text: "ToDo Anton",
            completed: false
          },
          {
            text: "React hook",
            completed: false
          },
          {
            text: "See my friend",
            completed: false
          }
      ]
    }
  }

  function saveTasksInLocalStorage() {
    let ForLocalStorage = {"allTasks": tasks}
    let serialForLocalStorage = JSON.stringify(ForLocalStorage);
    localStorage.setItem("allTasksInLocalStorage", serialForLocalStorage);
  }
  saveTasksInLocalStorage();

  const addTasks = text => {
      const Tasks = [...tasks, { text }];
      setTasks(Tasks);
  };

  const removeTask = index => {
    const Tasks = [...tasks];
    Tasks.splice(index, 1);
    setTasks(Tasks);
    setEditFormOpen(false);
  };

  const completedTask = index => {
    const Tasks = [...tasks];
    console.log(Tasks, Tasks[index].completed);
    if (Tasks[index].completed){
      Tasks[index].completed = false
    } else {
      Tasks[index].completed = true
    }
    setTasks(Tasks);
  }

  const taskPositionСhange = (index, direction) => {
    const Tasks = [...tasks];
    console.log(Tasks, direction);
    let temporaryStorage = Tasks[index];
    console.log( temporaryStorage );
    if (direction === "top"){
      Tasks[index] = Tasks[index-1];
      Tasks[index-1] = temporaryStorage;
    }
    if (direction === "down"){
      Tasks[index] = Tasks[index+1];
      Tasks[index+1] = temporaryStorage;
    }
    setTasks(Tasks);
  }

  const editTask = index => {
    const Tasks = [...tasks];
    setEditFormOpen(true);
    setToEdit(
      {
        text: (Tasks[index].text),
        index: index
      });
  }

  const addEditTasks = (index, text) => {
      console.log(text, index);
      const Tasks = [...tasks];
      Tasks[index].text = text;
      setTasks(Tasks);
  };

  return (
     <div className="сontainer">
      <h4> To Do list </h4>
      <AddNewTask addTasks={addTasks} />
      {editFormOpen ?
        <EditForm
          addTasks={addTasks}
          toEdit={toEdit}
          setEditFormOpen={setEditFormOpen}
          addEditTasks={addEditTasks}
        />
      : ""}
      {tasks.map((task, index, arr) => (
        <TasksList
          numberOfAllTasks={arr.length}
          task={task}
          index={index}
          key={index}
          removeTask={removeTask}
          completedTask ={completedTask}
          taskPositionСhange ={taskPositionСhange}
          editTask ={editTask}
          editFormOpen={editFormOpen}
        />
      ))}
     </div>
  )
}

export default App;
