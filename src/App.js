import React from 'react';
import logo from './logo.svg';
import 'bootswatch/dist/minty/bootstrap.min.css'; // Added this :boom:
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
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
        <Button variant="primary" style={{ marginBottom: '10px' }}>
          Primary button using react-bootstrap
        </Button>
        <Button variant="secondary" style={{ marginBottom: '10px' }}>
          Secondary Button
        </Button>
        <button className="btn btn-primary">
          Primary using classes (default)
        </button>
      </header>
    </div>
  );
}

export default App;
