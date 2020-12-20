import React from 'react';

import UserBar from "./UserBar";
import Name from "./Name";
import Resume from "./Resume";

import './styles/App.css'
function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="user_bar">
          <UserBar/>
        </div>
        <div className="name">
          <Name/>
        </div>
        <div className="resume">
          <Resume/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
