import React from 'react';  // --> imports React library
import axios from 'axios'; // --> imports axios library
import Task from "./Task"; // imports Task component

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: ['Create a front end', "Conect the server"] // --> This is the initial state
    };
  };

  // make sure you add props to your component. You can name the prop whatever you want.
  render() {
    return (
      <div>
        <h4>Roy's Task List </h4>
        <input type="text"></input> 
        <button>Add Task</button>
       <Task task={this.state.tasks}/>
      </div>
    )
  }
};  