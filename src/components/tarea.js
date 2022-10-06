import React from 'react';
import '../stylesheets/tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';


function Tarea({ id, text, completed, completeTask, deleteTask }) {
  return (
    <div className={completed ? 'tarea-contenedor completed' : 'tarea-contenedor' }>
      <div 
        className='tarea-texto'
        onClick={() => completeTask(id)}>
        {text}
      </div>
      <div 
        className='tarea-icono'
        onClick={() => deleteTask(id)} >
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;