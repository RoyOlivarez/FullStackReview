import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTask: '',
      tasks: []
    };
    this.sendTask = this.sendTask.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.taskInput = this.taskInput.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios
      .get('/todo')
      .then(response => {
        console.log('This is from app get request: ', response);
        this.setState({
          tasks: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  sendTask() {
    axios
      .post('/todo', {
        task: this.state.inputTask
      })
      .then(() => {
        this.setState({
          inputTask: ''
        });
        return this.getTasks();
      });
  }

  taskInput(event) {
    this.setState({
      inputTask: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>Todo list</h3>
        <input value={this.state.inputTask} onChange={this.taskInput} />
        <button onClick={this.sendTask}>Add Task</button>
      </div>
    );
  }
}
