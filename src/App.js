import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>這是API1 : </p>
        <p>{window.__env__.API_URL1}</p><br/>
        <p>這是API2 : </p>
        <p>{window.__env__.API_URL2}</p><br/>
        <p>這是API3 : </p>
        <p>{window.__env__.API_URL3}</p>
        {/*<img src={logo} className="App-logo" alt="logo" />
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
        </a>*/}
      </header>
    </div>
  );
}

export default App;
