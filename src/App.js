import React from 'react';
import './App.css';
import SideBarContent from './components/sideBar.js';
import Main from './components/main.js';


function App() {
  return (
    <div className='root'>
      <div className='header'>TO DO LIST</div>
      <div className="app">
        <div className='sideBar'>
          <div className='sideBarHeader'>
            <a>Mis Tareas</a>
          </div>
          {/* Lateral bar items */}
          <SideBarContent>Mi día</SideBarContent>
          <SideBarContent>Importante (not yet)</SideBarContent>
          <SideBarContent>Planeado (not yet)</SideBarContent>
          <SideBarContent>Marcado (not yet)</SideBarContent>
          <SideBarContent>Tareas (not yet)</SideBarContent>
          <div className='sideBar-footer'>
          </div>
        </div>
        {/* Import of "Main" component */}
        <Main />
      </div>
    </div>
  );
}

export default App;
