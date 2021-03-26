// @flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-25 22:43:55
 */
import * as React from 'react';
import logo from './logo.svg';
import './App.css';

function App(): React.Element<any> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
