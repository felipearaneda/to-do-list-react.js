import React, { useState } from 'react';
import AddTask from './addTask';
import '../stylesheets/taskList.css';
import Tarea from './tarea';


function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim(); //quitar espacios
      const updatedTasks = [task, ...tasks]; //arreglo con tarea nueva y tareas anteriores
      setTasks(updatedTasks); //actualizar el estado
    }
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <AddTask onSubmit={addTask} />
      <div className='tareas-lista-contenedor'>
        {
          tasks.map((task) =>
          <Tarea
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask} />
          )
        }
      </div>
    </>
  );
}

export default TaskList;