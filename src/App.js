import './App.css';
// import { User } from './User';
// import { useState } from 'react';
// import { useCounter } from './counter';
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter(((task) =>  task.id !== id)))
  };
  // <<<<<< Long way >>>>>>
  // const deleteTask = (taskName) => {
  //   const newTodoList = todoList.filter((task) => {
  //     if (task === taskName) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });
  //   setTodoList(newTodoList)
  // };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
          <Task
            taskName={task.taskName}
            id={task.id}
            deleteTask={deleteTask}
          />
          );
        })}
      </div>
    </div>
  );
}

export default App;
