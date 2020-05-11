import React, { useState } from 'react';
import AddNewTask from './AddNewTask';
import TasksList from './TasksList';
import EditForm from './EditForm';
import './App.css';

const App = () => {

 const startTasks = () => {
     // Tasks from localStorage or default
     const returnLocalStorage = JSON.parse(localStorage.getItem("allTasksInLocalStorage"));
     return returnLocalStorage
     ? returnLocalStorage.allTasks
     :
     [
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
 };

 const [tasks, setTasksForClient] = useState(startTasks());
 const [toEdit, setToEdit] = useState({});

 const setTasks = newTasks => {
    setTasksForClient(newTasks);
    // saveTasksInLocalStorage
    const dataForLocalStorage = JSON.stringify({"allTasks": newTasks});
    localStorage.setItem("allTasksInLocalStorage", dataForLocalStorage);
 };

 const addTasks = text => {
     const Tasks = [...tasks, { text }];
     setTasks(Tasks);
 };

 const addEditTasks = (index, text) => {
     const Tasks = [...tasks];
     Tasks[index].text = text;
     setTasks(Tasks);
 };

 return (
     <div className="container">
        <h4> To Do list </h4>
        { Number.isInteger(toEdit.index) || <AddNewTask addTasks={addTasks} />}
        { tasks.map((task, index, arr) => (
            toEdit && toEdit.index === index
            ?
                <EditForm
                    key = {index}
                    toEdit={toEdit}
                    setToEdit={setToEdit}
                    addEditTasks={addEditTasks}
                />
            :
                <TasksList
                    numberOfAllTasks = {arr.length}
                    key = {index}
                    task = {task}
                    tasks = {arr}
                    index = {index}
                    toEdit = {toEdit}
                    setTasks = {setTasks}
                    setToEdit = {setToEdit}
                />
        ))}
    </div>
 )
};

export default App;
