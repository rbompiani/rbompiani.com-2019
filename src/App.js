import React from 'react';
import Main from './components/Main';
import Aside from './components/Aside';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Aside />
      <Main />   
    </BrowserRouter>
  );
}

export default App;
