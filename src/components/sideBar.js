import React from 'react';

const SideBarContent = (props) => (

  <div className='sideBar-content'>
    <div className='list-item' onClick='location.href="#";'>{props.children}</div>
  </div>

)

export default SideBarContent;