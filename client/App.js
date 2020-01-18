import React from 'react';  // --> imports React library
import axios from 'axios'; // --> imports axios library
import Task from "./Task"; // imports Task component

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [] // --> This is the initial state
    };
  };

  componentDidMount() {
    this.getDBTask();
  }

  getDBTask() {
    axios.get('/test')
     .then((response) => {
      console.log("This is my client response: ", response);
      this.setState({
        tasks: response.data
      })
    })
     .catch(function (error) {
       console.log(error);
      });
    }

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