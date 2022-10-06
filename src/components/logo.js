import React from 'react';

const bookL = ({logo}) => (
  <div className='titleContainer'>
    <h2>
      <img 
          src={logo}
          className='bookLogo' />
      <span>Mi día</span>
    </h2>
  </div>
)

export default bookL;