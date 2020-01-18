import React from 'react';  // --> imports React library
import axios from 'axios'; // --> imports axios library

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [] // --> This is the initial state
    };
  };

  render() {
    return (
      
      <div>
        <h4>Roy's Task List </h4>
        <input type="text"></input> 
        <button>Add Task</button>
      </div>
    )
  }
};  