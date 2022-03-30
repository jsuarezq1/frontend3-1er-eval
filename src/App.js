import './index';
import React from 'react';
import data from "./components/data.json";
import Textos from './components/Textos/Textos'
import Botones from './components/Botones/Botones'
import Design from './components/Design/Design';


function App() {
  return (
    <div className="layout">
      <Design/>
      
      <Botones/>
    </div>
  );
}

export default App;
