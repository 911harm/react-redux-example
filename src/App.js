import React from 'react';
import './App.css';
//redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers'
//components
import Headeer from './components/Headeer'
import Mid from './components/Mid'
import Bottom from './components/Bottom'
//reducer


let store = createStore(reducer)
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Headeer></Headeer>
        <Mid></Mid>
        <Bottom></Bottom>

      </Provider>

    </div>
  );
}

export default App;
