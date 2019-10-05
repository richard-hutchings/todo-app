import React, { Component } from 'react';
import './App.css';
import { Table, Checkbox, Button } from 'semantic-ui-react';

import TodoApp from './components/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="app">
      <TodoApp />
      </div>
  )
 }
}

export default App;
