import React from 'react';  // --> imports React library
import axios from 'axios'; // --> imports axios library
import Task from "./Task"; // imports Task component

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      taskInput: '', // --> This is the initial state of the input bar
      tasks: [] // --> This is the initial state
    };
    this.getTask = this.getTask.bind(this)
    this.taskInput = this.taskInput.bind(this);
    //this.sendTask = this.sendTask.bind(this)
  };

  componentDidMount() {
    this.getTask(); // Async function 
  }

  // GET req to server for 
  getTask() {
    axios.get('/todo')
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

  // sendTask() {
  //   axios.post("/todo", { task: this.state.inputTask }).then(() => {
  //     this.setState({ inputTask: "" });
  //     return this.getTasks();
  //   });
  // }


  taskInput(event) {
    this.setState({
      inputTask: event.target.value
    });
  }

  // Notes: <input> Make sure to add value from taskInput as the prop for input. this.state.inputTask
   // Notes: <input> Make sure to add an onChange for taskInput
  // Notes: Make sure you add props to Task component. You cant map if Task doesn't have props
  render() {
    return (
      <div>
        <h4>Roy's Task List </h4>
        <input value={this.state.inputTask} onChange={this.taskInput}></input> 
        <button onClick={this.sendTask}>Add Task</button>
       <Task task={this.state.tasks} />
      </div>
    )
  }
};  