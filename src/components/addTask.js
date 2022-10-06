import React, { useState } from 'react';
import '../stylesheets/addTask.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

function AddTask(props) {

  const [input, setInput] = useState('');

  const useChange = e => {
    setInput(e.target.value);
  }

  const useSending = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);
  }

  return (
    <div>
      <form 
        className='tarea-formulario'
        onSubmit={useSending} >
          <button className='tarea-boton'>
            <AiOutlinePlus />
          </button>
          <input 
            className='tarea-input'
            type='text'
            placeholder='Add a task'
            name='texto'
            onChange={useChange}
          />
      </form>
    </div>
  )
}

export default AddTask;