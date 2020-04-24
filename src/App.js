import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

import Main from './components/Main';

const store = ConfigureStore();

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
