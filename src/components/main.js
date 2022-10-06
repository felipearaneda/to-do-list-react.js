import React, {useState} from 'react';
import bookLogo from '../images/logoLibro.png';
import BookL from './logo.js';
import TaskList from './taskList';
import getCurrentDate from './dateComponent';


const Main = () => {

  return (
    <div className='main'>
      <BookL logo={bookLogo} />
      <div className='date'>{getCurrentDate()}</div>
      <TaskList />
    </div>
  )

}

export default Main;