import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Routers from './router/routers';
import {Provider} from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <div className="App">
      <Provider store= {store}>

     
      <BrowserRouter>
      <Routers></Routers>
      
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
