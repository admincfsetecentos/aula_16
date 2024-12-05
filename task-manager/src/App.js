// src/App.js
import React from 'react';
import Header from './components/Header';  // Importando o Header
import TaskContainer from './components/TaskContainer';  // Importando o TaskContainer

function App() {
  return (
    <div className="App">
      <Header />
      <TaskContainer />
    </div>
  );
}

export default App;
