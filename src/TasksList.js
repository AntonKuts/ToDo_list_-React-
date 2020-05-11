import React from 'react';
import './App.css';
import { Button } from 'react-materialize'

const TasksList = (props) => {

    const {
        numberOfAllTasks,
        task,
        index,
        tasks,
        toEdit,
        setTasks,
        setToEdit,
    } = props;

    const removeTask = index => {
        const confirmDelete = window.confirm(`Delete task №${index+1} with text: "${task.text}"?`);
        if (confirmDelete) {
            const Tasks = [...tasks];
            Tasks.splice(index, 1);
            setTasks(Tasks);
        }
    };

    const completedTask = index => {
        const Tasks = [...tasks];
        Tasks[index].completed = !Tasks[index].completed;
        setTasks(Tasks);
    };

    const taskPositionChange = (index, direction) => {
        const Tasks = [...tasks];
        const newIndex = direction === "top" ? index-1 : index+1;
        [Tasks[index], Tasks[newIndex]] = [Tasks[newIndex], Tasks[index]];
        setTasks(Tasks);
    };

    const editTask = index => {
        const Tasks = [...tasks];
        setToEdit(
            {
                text: (Tasks[index].text),
                index: index,
                completed: task.completed
            }
        );
    };

    return (
        <div>
            <div className="text">
                <p className={task.completed ? "taskDone" : ""}>{index+1}. {task.text}</p>
            </div>
            <div className="button-box">
                <Button onClick={() => completedTask(index)}>
                    {task.completed ? "return" : "done"}
                </Button>
                <Button className="red lighten-1"
                        onClick={() => removeTask(index)}
                        disabled = {toEdit.index > -1}
                > delete </Button>
                <Button
                    onClick = {() => taskPositionChange(index, "top")}
                    disabled = {index === 0 || toEdit.index > -1}
                > top </Button>
                <Button
                    onClick={() => taskPositionChange(index, "down")}
                    disabled = {index === numberOfAllTasks-1 || toEdit.index > -1}
                > down </Button>
                <Button waves='light' onClick={() => editTask(index)}
                > edit </Button>
            </div>
        </div>
    );
};

export default TasksList;
