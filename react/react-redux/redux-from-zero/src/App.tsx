import * as React from 'react';
import './App.css';
import { ConnectedLocationList } from './LocationList';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ConnectedLocationList />
      </div>
    );
  }
}

export default App;
