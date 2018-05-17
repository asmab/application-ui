import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Triangle solver</h1>
        </header>
        
        <p className="App-intro">
          Place form
        </p>
        

        <form data-ts="Form">
          <fieldset>
            <label className="ts-error">
              <span>Side A </span>
              <input type="number"/>
            </label>
            <dl className="ts-info">
              <dt>Text</dt>
              <dd>An information about the field</dd>
              <dd>Another information about the field</dd>
            </dl>
            <button data-ts="Button" className="ts-primary">
              <span>Primary</span>
            </button>
          </fieldset>
        </form>

     </div>
    );
  }
}

export default App;
